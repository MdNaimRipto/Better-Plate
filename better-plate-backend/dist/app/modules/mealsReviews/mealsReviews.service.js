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
exports.MealsReviewService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const mealsReviews_schema_1 = require("./mealsReviews.schema");
const users_schema_1 = require("../users/users.schema");
const meals_schema_1 = require("../meals/meals.schema");
// * Add a new Meal
const addMealReview = (_a) => __awaiter(void 0, [_a], void 0, function* ({ payload, }) {
    const { mealId, userId } = payload;
    const isUserExists = yield users_schema_1.Users.findOne({ _id: userId });
    if (!isUserExists) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "User not found");
    }
    const isMealExist = yield meals_schema_1.Meals.findOne({ _id: mealId });
    if (!isMealExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Meal not found");
    }
    const isAlreadyReviewed = yield mealsReviews_schema_1.MealsReview.findOne({ mealId, userId });
    if (isAlreadyReviewed) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Meal Already Reviewed");
    }
    const result = yield mealsReviews_schema_1.MealsReview.create(payload);
    return result;
});
// * Get all MealsReview
const getAllMealsReview = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield mealsReviews_schema_1.MealsReview.find();
    return result;
});
// * Get a Meal Reviews by Meal id
const getMealReviewByMealId = (_a) => __awaiter(void 0, [_a], void 0, function* ({ id, }) {
    const result = yield mealsReviews_schema_1.MealsReview.findById({ _id: id });
    return result;
});
exports.MealsReviewService = {
    addMealReview,
    getAllMealsReview,
    getMealReviewByMealId,
};
