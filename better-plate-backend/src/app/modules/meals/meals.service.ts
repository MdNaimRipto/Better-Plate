import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import { IMealFilters, IMeals } from "./meals.interface";
import { Meals } from "./meals.schema";
import {
  IGenericPaginationResponse,
  IPaginationOptions,
} from "../../../interface/pagination";
import { MealSearchableFields } from "./meals.constant";
import { calculatePaginationFunction } from "../../../helpers/paginationHelpers";
import { SortOrder } from "mongoose";
import config from "../../../config/config";
import { jwtHelpers } from "../../../helpers/jwtHelpers";

// * Add a new Meal
const addMeal = async ({
  payload,
  token,
}: {
  payload: IMeals;
  token: string;
}): Promise<IMeals | null> => {
  jwtHelpers.jwtVerify(token, config.jwt_access_secret);

  const result = await Meals.create(payload);
  return result;
};

// * Update a Meal
const updateMeal = async ({
  id,
  payload,
  token,
}: {
  id: string;
  payload: Partial<IMeals>;
  token: string;
}): Promise<IMeals | null> => {
  jwtHelpers.jwtVerify(token, config.jwt_access_secret);

  const isMealExist = await Meals.findById(id);
  if (!isMealExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "Meal not found");
  }

  const result = await Meals.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

// * Get all Meals
const getAllMeals = async (
  filters: IMealFilters,
  paginationOptions: IPaginationOptions,
): Promise<IGenericPaginationResponse<IMeals[]>> => {
  const { searchTerm, ...filterData } = filters;
  const andConditions = [];
  if (searchTerm) {
    andConditions.push({
      $or: MealSearchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: "i",
        },
      })),
    });
  }
  //
  if (Object.keys(filterData).length) {
    andConditions.push({
      $and: Object.entries(filterData).map(([field, value]) => {
        return { [field]: value };
      }),
    });
  }
  //
  const { page, limit, skip, sortBy, sortOrder } =
    calculatePaginationFunction(paginationOptions);

  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }
  //
  const checkAndCondition =
    andConditions?.length > 0 ? { $and: andConditions } : {};

  const result = await Meals.find(checkAndCondition, {
    password: 0,
    uid: 0,
  })
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await Meals.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

// * Delete a Meal
const deleteMeal = async ({
  id,
  token,
}: {
  id: string;
  token: string;
}): Promise<IMeals | null> => {
  jwtHelpers.jwtVerify(token, config.jwt_access_secret);

  const isMealExist = await Meals.findOne({ _id: id });
  if (!isMealExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "Meal Already Deleted");
  }

  const result = await Meals.findOneAndDelete({ _id: id }, { new: true });
  return result;
};

export const MealsService = {
  addMeal,
  updateMeal,
  getAllMeals,
  deleteMeal,
};
