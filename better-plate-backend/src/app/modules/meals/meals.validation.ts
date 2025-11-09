import { z } from "zod";
// import { MealsDietPlanEnums, MealsTypeEnums } from "./meals.constant";

const AddMealValidation = z.object({
  body: z.object({
    title: z.object({
      en: z.string({ required_error: "Title En is Required" }),
      ban: z.string({ required_error: "Title Ar is Required" }),
    }),
    image: z.string({ required_error: "Image is Required" }),
    protein: z.number({ required_error: "Protein is Required" }),
    craps: z.number({ required_error: "Craps is Required" }),
    fat: z.number({ required_error: "Fat is Required" }),
  }),
});

export const MealsValidation = {
  AddMealValidation,
};
