import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { OrderService } from "./order.service";
import pick from "../../../shared/shared";
import { OrderFilterableFields } from "./order.constant";
import { paginationFields } from "../../../constants/pagination.constant";

// All Orders
const getAllOrders = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, OrderFilterableFields);
  const options = pick(req.query, paginationFields);

  const result = await OrderService.getAllOrders(filters, options);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Order's Retrieved",
    data: result,
  });
});

// User Orders
const getUserOrders = catchAsync(async (req: Request, res: Response) => {
  const { email, phone } = req.query;
  const result = await OrderService.getUserOrders(
    email as string,
    phone as string,
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Order's Retrieved",
    data: result,
  });
});

// * Update a PlanAndPackage
const updateOrderStatus = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const { status } = req.body;

  const result = await OrderService.updateOrderStatus(id, status);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Order Status updated successfully",
    data: result,
  });
});

// * Orders overview
const getOrdersOverview = catchAsync(async (req: Request, res: Response) => {
  const result = await OrderService.getOrdersOverview();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Order Overview Retrieved",
    data: result,
  });
});

export const OrderController = {
  getUserOrders,
  getAllOrders,
  updateOrderStatus,
  getOrdersOverview,
};
