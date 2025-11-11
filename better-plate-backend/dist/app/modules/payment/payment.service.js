"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = exports.handleStripeWebhook = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const config_1 = __importDefault(require("../../../config/config"));
const order_schema_1 = require("../order/order.schema");
const stripe_1 = __importDefault(require("stripe"));
const stripe = new stripe_1.default(config_1.default.stripe_secret_key, {
    apiVersion: "2025-10-29.clover",
});
const createPaymentLink = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { amount, currency, email, fullName, phoneNumber, packageInfo, location, } = payload;
    try {
        const session = yield stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            customer_email: email,
            line_items: [
                {
                    price_data: {
                        currency: (currency || "usd"),
                        product_data: {
                            name: `Meal Plan - ${packageInfo.planType}`,
                            description: `Meals: ${packageInfo.mealPerDay.join(", ")} | Days: ${packageInfo.daysOfWeek.join(", ")}`,
                        },
                        unit_amount: Math.round(Number(amount) * 100),
                    },
                    quantity: 1,
                },
            ],
            success_url: `${config_1.default.FRONTEND_URL}/user`,
            cancel_url: `${config_1.default.FRONTEND_URL}/en/plansAndPackages`,
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
        });
        return session.url;
    }
    catch (error) {
        console.error(error);
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Failed to generate Payment URL");
    }
});
const handleStripeWebhook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const sig = req.headers["stripe-signature"];
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
    let event;
    try {
        event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    }
    catch (err) {
        console.error("Webhook signature verification failed:", err.message);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }
    if (event.type === "checkout.session.completed") {
        const session = event.data.object;
        try {
            // --- Extract Metadata and payment info ---
            const metadata = session.metadata;
            console.log("Metadata", metadata);
            const paymentIntentId = session.payment_intent;
            const amountTotal = session.amount_total / 100; // back to dollars
            const startingDate = new Date();
            const totalDays = Number(metadata.totalDays) || 7; // fallback 7 days
            const expireDate = new Date(startingDate);
            expireDate.setDate(startingDate.getDate() + totalDays);
            const orderPayload = {
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
                    mealPerDay: JSON.stringify(metadata.mealPerDay), // save JSON string
                    daysOfWeek: JSON.stringify(metadata.daysOfWeek),
                    planType: metadata.planType,
                    totalDays: Number(metadata.totalDays),
                },
                startingDate,
                expireDate,
                currentStatus: "ACTIVE",
            };
            const result = yield order_schema_1.Orders.create(orderPayload);
            console.log("Order Result: ", result);
            console.log(`✅ Order placed successfully for transaction: ${paymentIntentId}`);
        }
        catch (err) {
            console.error("Error creating order:", err);
        }
    }
    res.status(200).send("Webhook received");
});
exports.handleStripeWebhook = handleStripeWebhook;
exports.PaymentService = {
    createPaymentLink,
    handleStripeWebhook: exports.handleStripeWebhook,
};
