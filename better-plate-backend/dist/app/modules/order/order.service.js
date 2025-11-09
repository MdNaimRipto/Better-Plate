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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const paginationHelpers_1 = require("../../../helpers/paginationHelpers");
const order_constant_1 = require("./order.constant");
const order_schema_1 = require("./order.schema");
const getAllOrders = (filters, paginationOptions) => __awaiter(void 0, void 0, void 0, function* () {
    const { searchTerm } = filters, filterData = __rest(filters, ["searchTerm"]);
    const andConditions = [];
    if (searchTerm) {
        andConditions.push({
            $or: order_constant_1.OrderSearchableFields.map(field => ({
                [field]: {
                    $regex: searchTerm,
                    $options: "i",
                },
            })),
        });
    }
    //
    if (Object.keys(filterData).length) {
        const filterConditions = [];
        Object.entries(filterData).forEach(([field, value]) => {
            if (field === "packageType" || field === "dietPlan") {
                filterConditions.push({
                    [`subscriptionDetails.${field}`]: value,
                });
            }
            else {
                filterConditions.push({ [field]: value });
            }
        });
        andConditions.push({
            $and: filterConditions,
        });
    }
    //
    const { page, limit, skip, sortBy, sortOrder } = (0, paginationHelpers_1.calculatePaginationFunction)(paginationOptions);
    const sortConditions = {};
    if (sortBy && sortOrder) {
        sortConditions[sortBy] = sortOrder;
    }
    //
    const checkAndCondition = (andConditions === null || andConditions === void 0 ? void 0 : andConditions.length) > 0 ? { $and: andConditions } : {};
    const result = yield order_schema_1.Orders.find(checkAndCondition, {
        password: 0,
        uid: 0,
    })
        .sort(sortConditions)
        .skip(skip)
        .limit(limit)
        .populate("packageInfo");
    const total = yield order_schema_1.Orders.countDocuments();
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: result,
    };
});
const getUserOrders = (email, phone) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_schema_1.Orders.find({
        $and: [{ "customer.email": email }, { "customer.phone": phone }],
    }).populate("packageInfo");
    console.log(result);
    return result;
});
const updateOrderStatus = (id, status) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_schema_1.Orders.findOneAndUpdate({ _id: id }, { currentStatus: status }, { new: true });
    return result;
});
// Orders overview
const getOrdersOverview = () => __awaiter(void 0, void 0, void 0, function* () {
    const totalOrders = yield order_schema_1.Orders.countDocuments();
    const activeOrders = yield order_schema_1.Orders.countDocuments({ currentStatus: "ACTIVE" });
    const pausedOrders = yield order_schema_1.Orders.countDocuments({ currentStatus: "PAUSED" });
    const canceledOrders = yield order_schema_1.Orders.countDocuments({
        currentStatus: "CANCELED",
    });
    const spammingOrders = yield order_schema_1.Orders.countDocuments({
        currentStatus: "SPAMMING",
    });
    return {
        totalOrders,
        activeOrders,
        pausedOrders,
        spammingOrders,
        canceledOrders,
    };
});
exports.OrderService = {
    getAllOrders,
    getUserOrders,
    updateOrderStatus,
    getOrdersOverview,
};
