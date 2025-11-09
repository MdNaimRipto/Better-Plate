"use strict";
// import { mealsDietPlanEnums, mealsTypeEnums } from "./meals.interface";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealFilterableFields = exports.MealSearchableFields = void 0;
// export const MealsTypeEnums: mealsTypeEnums[] = [
//   "BREAKFAST",
//   "LUNCH",
//   "DINNER",
//   "SNACKS",
// ];
// export const MealsDietPlanEnums: mealsDietPlanEnums[] = [
//   "BALANCED",
//   "HIGH_PROTEIN",
//   "LOW_CRAB",
//   "VEGETARIAN",
// ];
exports.MealSearchableFields = ["title.en", "title.ar"];
exports.MealFilterableFields = ["searchTerm", "title", "type", "dietPlan"];
