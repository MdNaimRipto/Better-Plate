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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const subscriptionInfo_schema_1 = require("./subscriptionInfo.schema");
// * Add a new Subscription
const addSubscription = (_a) => __awaiter(void 0, [_a], void 0, function* ({ payload, }) {
    const result = yield subscriptionInfo_schema_1.Subscriptions.create(payload);
    return result;
});
// * Update a Subscription
const updateSubscription = (_a) => __awaiter(void 0, [_a], void 0, function* ({ id, payload, }) {
    const isSubscriptionExist = yield subscriptionInfo_schema_1.Subscriptions.findById(id);
    if (!isSubscriptionExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Subscription not found");
    }
    const { monthlyPrice, weeklyPrice } = payload, updatePayload = __rest(payload, ["monthlyPrice", "weeklyPrice"]);
    if (monthlyPrice && Object.keys(monthlyPrice).length > 0) {
        Object.keys(monthlyPrice).map(key => {
            const monthlyPricesKey = `monthlyPrice.${key}`;
            updatePayload[monthlyPricesKey] =
                monthlyPrice[key];
        });
    }
    if (weeklyPrice && Object.keys(weeklyPrice).length > 0) {
        Object.keys(weeklyPrice).map(key => {
            const weeklyPricesKey = `weeklyPrice.${key}`;
            updatePayload[weeklyPricesKey] =
                weeklyPrice[key];
        });
    }
    const result = yield subscriptionInfo_schema_1.Subscriptions.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
// * Get all Subscriptions
const getAllSubscriptions = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield subscriptionInfo_schema_1.Subscriptions.find();
    return result;
});
// * Delete a Subscription
const deleteSubscription = (_a) => __awaiter(void 0, [_a], void 0, function* ({ id, }) {
    const isSubscriptionExist = yield subscriptionInfo_schema_1.Subscriptions.findOne({ _id: id });
    if (!isSubscriptionExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Subscription Already Deleted");
    }
    const result = yield subscriptionInfo_schema_1.Subscriptions.findOneAndDelete({ _id: id }, { new: true });
    return result;
});
exports.SubscriptionsService = {
    addSubscription,
    updateSubscription,
    getAllSubscriptions,
    deleteSubscription,
};
