"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealsReviewsRouter = void 0;
const express_1 = __importDefault(require("express"));
const zodValidationRequest_1 = __importDefault(require("../../../middlewares/zodValidationRequest"));
const mealsReviews_validation_1 = require("./mealsReviews.validation");
const mealsReviews_controller_1 = require("./mealsReviews.controller");
const router = express_1.default.Router();
router.post("/addMealReview", (0, zodValidationRequest_1.default)(mealsReviews_validation_1.MealsReviewValidation.IAddMealReview), mealsReviews_controller_1.MealsReviewController.addMealReview);
router.get("/getAllMealsReview", mealsReviews_controller_1.MealsReviewController.getAllMealsReview);
router.get("/getMealReviewByMealId/:id", mealsReviews_controller_1.MealsReviewController.getMealReviewByMealId);
exports.MealsReviewsRouter = router;
