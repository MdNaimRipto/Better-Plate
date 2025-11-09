"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealsReviewValidation = void 0;
const zod_1 = require("zod");
const IAddMealReview = zod_1.z.object({
    body: zod_1.z.object({
        userId: zod_1.z.string({ required_error: "User Id is Required" }),
        mealId: zod_1.z.string({ required_error: "Meal Id is Required" }),
        title: zod_1.z.string({ required_error: "Title is Required" }),
        reviewDescription: zod_1.z.string({
            required_error: "Review Description is Required",
        }),
        rating: zod_1.z.number({ required_error: "Rating is Required" }).min(1).max(5),
    }),
});
exports.MealsReviewValidation = {
    IAddMealReview,
};
