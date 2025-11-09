"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsRouter = void 0;
const express_1 = __importDefault(require("express"));
const zodValidationRequest_1 = __importDefault(require("../../../middlewares/zodValidationRequest"));
const subscriptionInfo_validation_1 = require("./subscriptionInfo.validation");
const subscriptionInfo_controller_1 = require("./subscriptionInfo.controller");
const router = express_1.default.Router();
router.post("/addSubscription", (0, zodValidationRequest_1.default)(subscriptionInfo_validation_1.SubscriptionInfoValidation.SubscriptionInfo), subscriptionInfo_controller_1.SubscriptionsController.addSubscription);
router.patch("/updateSubscription/:id", subscriptionInfo_controller_1.SubscriptionsController.updateSubscription);
router.get("/getAllSubscriptions", subscriptionInfo_controller_1.SubscriptionsController.getAllSubscriptions);
router.delete("/deleteSubscription/:id", subscriptionInfo_controller_1.SubscriptionsController.deleteSubscription);
exports.SubscriptionsRouter = router;
