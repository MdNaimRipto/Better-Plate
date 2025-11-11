import { SortOrder } from "mongoose";
import { calculatePaginationFunction } from "../../../helpers/paginationHelpers";
import {
  IGenericPaginationResponse,
  IPaginationOptions,
} from "../../../interface/pagination";
import { OrderSearchableFields } from "./order.constant";
import { currentStatusEnums, IOrder, IOrderFilters } from "./order.interface";
import { Orders } from "./order.schema";
import { jwtHelpers } from "../../../helpers/jwtHelpers";
import config from "../../../config/config";

const getAllOrders = async (
  filters: IOrderFilters,
  paginationOptions: IPaginationOptions,
  accessToken: string,
): Promise<IGenericPaginationResponse<IOrder[]>> => {
  jwtHelpers.jwtVerify(accessToken, config.jwt_access_secret);
  const { searchTerm, ...filterData } = filters;
  const andConditions = [];
  if (searchTerm) {
    andConditions.push({
      $or: OrderSearchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: "i",
        },
      })),
    });
  }
  //

  if (Object.keys(filterData).length) {
    const filterConditions: { [x: string]: string }[] = [];

    Object.entries(filterData).forEach(([field, value]) => {
      if (field === "packageType" || field === "dietPlan") {
        filterConditions.push({
          [`subscriptionDetails.${field}`]: value,
        });
      } else {
        filterConditions.push({ [field]: value });
      }
    });

    andConditions.push({
      $and: filterConditions,
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

  const result = await Orders.find(checkAndCondition, {
    password: 0,
    uid: 0,
  })
    .sort(sortConditions)
    .skip(skip)
    .limit(limit)
    .populate("packageInfo");

  const total = await Orders.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getUserOrders = async (accessToken: string) => {
  const { email } = jwtHelpers.jwtVerify(accessToken, config.jwt_access_secret);
  const result = await Orders.find({
    $and: [{ "customer.email": email }],
  }).populate("packageInfo");

  return result;
};

const updateOrderStatus = async (id: string, status: currentStatusEnums) => {
  const result = await Orders.findOneAndUpdate(
    { _id: id },
    { currentStatus: status },
    { new: true },
  );
  return result;
};

// Orders overview
const getOrdersOverview = async () => {
  const totalOrders = await Orders.countDocuments();
  const activeOrders = await Orders.countDocuments({ currentStatus: "ACTIVE" });
  const pausedOrders = await Orders.countDocuments({ currentStatus: "PAUSED" });
  const canceledOrders = await Orders.countDocuments({
    currentStatus: "CANCELED",
  });
  const spammingOrders = await Orders.countDocuments({
    currentStatus: "SPAMMING",
  });

  return {
    totalOrders,
    activeOrders,
    pausedOrders,
    spammingOrders,
    canceledOrders,
  };
};

export const OrderService = {
  getAllOrders,
  getUserOrders,
  updateOrderStatus,
  getOrdersOverview,
};
