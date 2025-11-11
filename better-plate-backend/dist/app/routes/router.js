"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routers = void 0;
const express_1 = __importDefault(require("express"));
const users_router_1 = require("../modules/users/users.router");
const payment_router_1 = require("../modules/payment/payment.router");
const order_router_1 = require("../modules/order/order.router");
const admin_router_1 = require("../modules/admin/admin.router");
const router = express_1.default.Router();
const routes = [
    {
        path: "/users",
        route: users_router_1.UserRouter,
    },
    {
        path: "/payment",
        route: payment_router_1.PaymentRouter,
    },
    {
        path: "/order",
        route: order_router_1.OrderRouter,
    },
    {
        path: "/admin",
        route: admin_router_1.AdminRouter,
    },
];
routes.map(r => router.use(r.path, r.route));
exports.Routers = router;
