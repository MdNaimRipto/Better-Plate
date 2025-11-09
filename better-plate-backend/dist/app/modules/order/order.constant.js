"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderFilterableFields = exports.OrderSearchableFields = exports.CurrentStatusEnums = void 0;
exports.CurrentStatusEnums = [
    "ACTIVE",
    "PAUSED",
    "CANCELED",
    "SPAMMING",
];
exports.OrderSearchableFields = [
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
exports.OrderFilterableFields = [
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
