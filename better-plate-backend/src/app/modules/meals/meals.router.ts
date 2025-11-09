import express from "express";
import zodValidationRequest from "../../../middlewares/zodValidationRequest";
import { MealsValidation } from "./meals.validation";
import { MealsController } from "./meals.controller";

const router = express.Router();

router.post(
  "/addMeal",
  zodValidationRequest(MealsValidation.AddMealValidation),
  MealsController.addMeal,
);

router.patch("/updateMeal/:id", MealsController.updateMeal);

router.get("/getAllMeals", MealsController.getAllMeals);

router.delete("/deleteMeal/:id", MealsController.deleteMeal);

export const MealsRouter = router;
