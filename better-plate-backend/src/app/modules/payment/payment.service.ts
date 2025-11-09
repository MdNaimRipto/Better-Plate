import axios from "axios";
import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";
import { Request, Response } from "express";
import config from "../../../config/config";
import { IPaymentBody } from "./payment.interface";
import { Orders } from "../order/order.schema";
import { IOrder } from "../order/order.interface";
import Stripe from "stripe";

const stripe = new Stripe(config.stripe_secret_key as string, {
  apiVersion: "2025-10-29.clover",
});

const createPaymentLink = async (payload: IPaymentBody) => {
  const {
    amount,
    currency,
    email,
    fullName,
    phoneNumber,
    packageInfo,
    location,
  } = payload;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      customer_email: email as string | undefined,
      line_items: [
        {
          price_data: {
            currency: (currency || "usd") as string,
            product_data: {
              name: `Meal Plan - ${packageInfo.planType}`,
              description: `Meals: ${packageInfo.mealPerDay.join(
                ", ",
              )} | Days: ${packageInfo.daysOfWeek.join(", ")}`,
            },
            unit_amount: Math.round(Number(amount) * 100),
          },
          quantity: 1,
        },
      ],
      success_url: "http://localhost:3000/user",
      cancel_url: "http://localhost:3000/payment-cancel",
      metadata: {
        // custom data you’ll receive later in the webhook
        email: String(email),
        fullName: String(fullName),
        phoneNumber: String(phoneNumber),
        location: String(location),
        planType: String(packageInfo.planType),
        mealPerDay: packageInfo.mealPerDay.join(","),
        daysOfWeek: packageInfo.daysOfWeek.join(","),
        totalDays: String(packageInfo.totalDays),
      },
    } as Stripe.Checkout.SessionCreateParams);
    return session.url;
  } catch (error) {
    console.error(error);
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "Failed to generate Payment URL",
    );
  }
};

export const handleStripeWebhook = async (req: any, res: any) => {
  const sig = req.headers["stripe-signature"];
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err: any) {
    console.error("Webhook signature verification failed:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    try {
      // --- Extract Metadata and payment info ---
      const metadata = session.metadata!;

      console.log("Metadata", metadata);
      const paymentIntentId = session.payment_intent as string;
      const amountTotal = session.amount_total! / 100; // back to dollars

      const startingDate = new Date();
      const totalDays = Number(metadata.totalDays) || 7; // fallback 7 days
      const expireDate = new Date(startingDate);
      expireDate.setDate(startingDate.getDate() + totalDays);

      const orderPayload: IOrder = {
        transactionId: paymentIntentId,
        amount: amountTotal.toString(),
        currency: String(session.currency),
        paymentDate: new Date().toISOString(),
        customer: {
          fullName: metadata.fullName,
          email: metadata.email,
          phone: metadata.phoneNumber,
          address: metadata.location,
        },
        packageInfo: {
          mealPerDay: JSON.stringify(metadata.mealPerDay) as any, // save JSON string
          daysOfWeek: JSON.stringify(metadata.daysOfWeek) as any,
          planType: metadata.planType,
          totalDays: Number(metadata.totalDays),
        },
        startingDate,
        expireDate,
        currentStatus: "ACTIVE",
      };

      const result = await Orders.create(orderPayload);

      console.log("Order Result: ", result);

      console.log(
        `✅ Order placed successfully for transaction: ${paymentIntentId}`,
      );
    } catch (err) {
      console.error("Error creating order:", err);
    }
  }

  res.status(200).send("Webhook received");
};

export const PaymentService = {
  createPaymentLink,
  handleStripeWebhook,
};
