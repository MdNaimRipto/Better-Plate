"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealsValidation = void 0;
const zod_1 = require("zod");
// import { MealsDietPlanEnums, MealsTypeEnums } from "./meals.constant";
const AddMealValidation = zod_1.z.object({
    body: zod_1.z.object({
        // type: z.enum([...MealsTypeEnums] as [string, ...string[]], {
        //   required_error: "Type is Required",
        // }),
        // dietPlan: z.enum([...MealsDietPlanEnums] as [string, ...string[]], {
        //   required_error: "Diet Plan is Required",
        // }),
        title: zod_1.z.object({
            en: zod_1.z.string({ required_error: "Title En is Required" }),
            ar: zod_1.z.string({ required_error: "Title Ar is Required" }),
        }),
        image: zod_1.z.string({ required_error: "Image is Required" }),
        // description: z.object({
        //   en: z.string({ required_error: "Description En is Required" }),
        //   ar: z.string({ required_error: "Description Ar is Required" }),
        // }),
        calory: zod_1.z.number({ required_error: "Calory is Required" }),
        protein: zod_1.z.number({ required_error: "Protein is Required" }),
        craps: zod_1.z.number({ required_error: "Craps is Required" }),
        fat: zod_1.z.number({ required_error: "Fat is Required" }),
        quantity: zod_1.z.number({ required_error: "Quantity is Required" }),
    }),
});
exports.MealsValidation = {
    AddMealValidation,
};
