import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import { IBlogFilters, IBlogs } from "./blogs.interface";
import { Blogs } from "./blogs.schema";
import {
  IGenericPaginationResponse,
  IPaginationOptions,
} from "../../../interface/pagination";
import { BlogSearchableFields } from "./blogs.constant";
import { calculatePaginationFunction } from "../../../helpers/paginationHelpers";
import { SortOrder } from "mongoose";
import config from "../../../config/config";
import { jwtHelpers } from "../../../helpers/jwtHelpers";

// * Add a new blog
const addBlog = async ({
  payload,
  token,
}: {
  payload: IBlogs;
  token: string;
}): Promise<IBlogs | null> => {
  jwtHelpers.jwtVerify(token, config.jwt_access_secret);

  const result = await Blogs.create(payload);
  return result;
};

// * Update a blog
const updateBlog = async ({
  id,
  payload,
  token,
}: {
  id: string;
  payload: Partial<IBlogs>;
  token: string;
}): Promise<IBlogs | null> => {
  jwtHelpers.jwtVerify(token, config.jwt_access_secret);

  const isBlogExist = await Blogs.findById(id);
  if (!isBlogExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "Blog not found");
  }

  const result = await Blogs.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

// * Get all blogs
const getAllBlogs = async (
  filters: IBlogFilters,
  paginationOptions: IPaginationOptions,
): Promise<IGenericPaginationResponse<IBlogs[]>> => {
  const { searchTerm, ...filterData } = filters;
  const andConditions = [];
  if (searchTerm) {
    andConditions.push({
      $or: BlogSearchableFields.map(field => ({
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

  const result = await Blogs.find(checkAndCondition, {
    password: 0,
    uid: 0,
  })
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await Blogs.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

// * Get a blog by id
const getBlogById = async ({ id }: { id: string }): Promise<IBlogs | null> => {
  const result = await Blogs.findById({ _id: id });
  return result;
};

// * Delete a blog
const deleteBlog = async ({ id }: { id: string }): Promise<IBlogs | null> => {
  const isBlogExist = await Blogs.findOne({ _id: id });
  if (!isBlogExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "Blog Already Deleted");
  }

  const result = await Blogs.findOneAndDelete({ _id: id }, { new: true });
  return result;
};

export const BlogsService = {
  addBlog,
  updateBlog,
  getAllBlogs,
  getBlogById,
  deleteBlog,
};
