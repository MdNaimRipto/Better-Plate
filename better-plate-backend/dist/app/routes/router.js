"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routers = void 0;
const express_1 = __importDefault(require("express"));
const users_router_1 = require("../modules/users/users.router");
const blogs_router_1 = require("../modules/blogs/blogs.router");
const meals_router_1 = require("../modules/meals/meals.router");
const mealsReviews_router_1 = require("../modules/mealsReviews/mealsReviews.router");
const subscriptionInfo_router_1 = require("../modules/subscriptionInfo/subscriptionInfo.router");
const events_router_1 = require("../modules/events/events.router");
const payment_router_1 = require("../modules/payment/payment.router");
const order_router_1 = require("../modules/order/order.router");
const partnership_router_1 = require("../modules/partnership/partnership.router");
const plansAndPackages_router_1 = require("../modules/plansAndPackages/plansAndPackages.router");
const admin_router_1 = require("../modules/admin/admin.router");
const router = express_1.default.Router();
const routes = [
    {
        path: "/users",
        route: users_router_1.UserRouter,
    },
    {
        path: "/blogs",
        route: blogs_router_1.BlogsRouter,
    },
    {
        path: "/meals",
        route: meals_router_1.MealsRouter,
    },
    {
        path: "/mealsReviews",
        route: mealsReviews_router_1.MealsReviewsRouter,
    },
    {
        path: "/subscriptions",
        route: subscriptionInfo_router_1.SubscriptionsRouter,
    },
    {
        path: "/events",
        route: events_router_1.EventsRouter,
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
        path: "/partnership",
        route: partnership_router_1.PartnershipRouter,
    },
    {
        path: "/plansAndPackages",
        route: plansAndPackages_router_1.PlansAndPackagesRouter,
    },
    {
        path: "/admin",
        route: admin_router_1.AdminRouter,
    },
];
routes.map(r => router.use(r.path, r.route));
exports.Routers = router;
