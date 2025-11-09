import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { MealsService } from "./meals.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import pick from "../../../shared/shared";
import { MealFilterableFields } from "./meals.constant";
import { paginationFields } from "../../../constants/pagination.constant";
import { jwtHelpers } from "../../../helpers/jwtHelpers";

// * Add a new Meal
const addMeal = catchAsync(async (req: Request, res: Response) => {
  const { ...payload } = req.body;
  const token = jwtHelpers.verifyAuthToken(req);

  const result = await MealsService.addMeal({ payload, token });

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Meal added successfully",
    data: result,
  });
});

// * Update a Meal
const updateMeal = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { ...payload } = req.body;
  const token = jwtHelpers.verifyAuthToken(req);

  const result = await MealsService.updateMeal({ id, payload, token });

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Meal updated successfully",
    data: result,
  });
});

// * Get all Meals
const getAllMeals = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, MealFilterableFields);
  const options = pick(req.query, paginationFields);

  const result = await MealsService.getAllMeals(filters, options);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "All Meals Fetched Successfully",
    data: result,
  });
});

// * Delete a Meal
const deleteMeal = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const token = jwtHelpers.verifyAuthToken(req);

  const result = await MealsService.deleteMeal({ id, token });

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Meal deleted successfully",
    data: result,
  });
});

export const MealsController = {
  addMeal,
  updateMeal,
  getAllMeals,
  deleteMeal,
};
