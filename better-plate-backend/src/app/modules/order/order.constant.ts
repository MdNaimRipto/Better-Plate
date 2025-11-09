import { currentStatusEnums } from "./order.interface";

export const CurrentStatusEnums: currentStatusEnums[] = [
  "ACTIVE",
  "PAUSED",
  "CANCELED",
  "SPAMMING",
];

export const OrderSearchableFields = [
  "customer.fullName",
  "customer.email",
  "customer.phone",
  "customer.address",
  "customer.city",
  "transactionId",
  "currentStatus",
  "cardDetails.cardType",
  "cardDetails.cardLast4",
];

export const OrderFilterableFields = [
  "searchTerm",
  "fullName",
  "email",
  "phone",
  "address",
  "city",
  "transactionId",
  "currentStatus",
  "cardType",
  "cardLast4",
];
