import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { BlogsService } from "./blogs.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { BlogFilterableFields } from "./blogs.constant";
import { paginationFields } from "../../../constants/pagination.constant";
import pick from "../../../shared/shared";
import { jwtHelpers } from "../../../helpers/jwtHelpers";

// * Add a new blog
const addBlog = catchAsync(async (req: Request, res: Response) => {
  const { ...payload } = req.body;
  const token = jwtHelpers.verifyAuthToken(req);

  const result = await BlogsService.addBlog({ payload, token });

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Blog added successfully",
    data: result,
  });
});

// * Update a blog
const updateBlog = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { ...payload } = req.body;
  const token = jwtHelpers.verifyAuthToken(req);

  const result = await BlogsService.updateBlog({ id, payload, token });

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Blog updated successfully",
    data: result,
  });
});

// * Get all blogs
const getAllBlogs = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, BlogFilterableFields);
  const options = pick(req.query, paginationFields);

  const result = await BlogsService.getAllBlogs(filters, options);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "All Blogs",
    data: result,
  });
});

// * Get a blog by id
const getBlogById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await BlogsService.getBlogById({ id });

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Blog",
    data: result,
  });
});

// * Delete a blog
const deleteBlog = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await BlogsService.deleteBlog({ id });

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Blog deleted successfully",
    data: result,
  });
});

export const BlogsController = {
  addBlog,
  updateBlog,
  getAllBlogs,
  getBlogById,
  deleteBlog,
};
