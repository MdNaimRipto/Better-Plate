import { model, Schema } from "mongoose";
import { IMeals } from "./meals.interface";

const mealsSchema = new Schema<IMeals>(
  {
    title: {
      en: { type: String, required: true },
      ban: { type: String, required: true },
    },
    image: { type: String, required: true },
    protein: { type: Number, required: true },
    craps: { type: Number, required: true },
    fat: { type: Number, required: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

export const Meals = model<IMeals>("Meals", mealsSchema);
