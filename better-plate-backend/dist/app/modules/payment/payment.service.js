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
exports.PaymentService = void 0;
const axios_1 = __importDefault(require("axios"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const config_1 = __importDefault(require("../../../config/config"));
const order_schema_1 = require("../order/order.schema");
const plansAndPackages_schema_1 = require("../plansAndPackages/plansAndPackages.schema");
const makePayment = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const { address, amount, city, countryCode, currency, email, fullName, phoneNumber, packageInfo, deliveryTime, } = payload;
    const options = {
        method: "POST",
        url: "https://secure.telr.com/gateway/api_quicklink.json",
        headers: {
            accept: "application/json",
            "content-type": "application/json",
        },
        data: {
            quicklinkrequest: {
                storeid: config_1.default.telr_store_id,
                authkey: config_1.default.telr_auth_key,
                details: {
                    desc: `pr:${packageInfo} dt:${deliveryTime}`,
                    cart: `${Math.floor(1000 + Math.random() * 9000)}-${Date.now()}`,
                    currency: currency,
                    amount: amount,
                    fullname: fullName,
                    addr1: address,
                    city: city,
                    country: countryCode,
                    email: email,
                    phone: phoneNumber,
                },
            },
        },
    };
    try {
        const response = yield axios_1.default.request(options);
        const paymentURL = (_b = (_a = response.data) === null || _a === void 0 ? void 0 : _a.QuickLinkResponse) === null || _b === void 0 ? void 0 : _b.URL;
        if (paymentURL) {
            return paymentURL;
        }
        else {
            throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Failed to generate Payment Url");
        }
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Failed to generate Payment Url");
    }
});
const getPaymentDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const webhookData = req.body;
    if (webhookData.tran_status === "A") {
        const desc = webhookData.tran_desc;
        // Extract packageType, dietPlan, days, and totalCalory from the description string
        const packageInfo = ((_a = desc.match(/pr:([A-Za-z0-9_&-]+)(?=\s*dt:)/)) === null || _a === void 0 ? void 0 : _a[1]) || "";
        const deliveryTime = ((_b = desc.match(/dt:([A-Za-z0-9_&-]+)/)) === null || _b === void 0 ? void 0 : _b[1]) || "";
        const pack = yield plansAndPackages_schema_1.PlansAndPackages.findOne({ _id: packageInfo });
        if (!pack) {
            throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Plan Does Not exists!");
        }
        const startingDate = new Date();
        const expireDate = new Date(startingDate);
        expireDate.setDate(startingDate.getDate() + pack.totalDays);
        const orderPayload = {
            transactionId: webhookData.tran_ref,
            amount: webhookData.tran_amount,
            currency: webhookData.tran_currency,
            paymentDate: webhookData.actual_payment_date,
            cardDetails: {
                cardType: webhookData.card_payment,
                cardCountry: webhookData.card_country,
                cardLast4: webhookData.card_last4,
            },
            customer: {
                fullName: `${webhookData.bill_fname} ${webhookData.bill_sname}`,
                email: webhookData.bill_email,
                phone: webhookData.bill_phone1,
                address: webhookData.bill_addr1,
                city: webhookData.bill_city,
                country: webhookData.bill_country,
            },
            packageInfo: packageInfo,
            expireDate: expireDate,
            startingDate: startingDate,
            totalDays: pack.totalDays.toString(),
            deliveryTime: deliveryTime,
        };
        console.log(orderPayload);
        yield order_schema_1.Orders.create(orderPayload);
        console.log(`Order Placed Successfully for Transaction: ${webhookData.tran_ref}`);
        //
    }
    else if (webhookData.tran_status === "H") {
        console.log("Payment is on hold");
    }
    else if (webhookData.tran_status === "D") {
        console.log("Payment was declined");
    }
    else {
        console.log("Unknown payment status");
    }
    res.status(200).send("Webhook received");
});
exports.PaymentService = {
    makePayment,
    getPaymentDetails,
};
