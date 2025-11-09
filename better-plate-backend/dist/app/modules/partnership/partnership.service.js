"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartnershipService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const partnership_schema_1 = require("./partnership.schema");
const partnership_constant_1 = require("./partnership.constant");
const paginationHelpers_1 = require("../../../helpers/paginationHelpers");
// * Add a new Partnership
const addPartnership = (_a) => __awaiter(void 0, [_a], void 0, function* ({ payload, }) {
    const result = yield partnership_schema_1.Partnership.create(payload);
    return result;
});
// * Update a Partnership
const updatePartnershipStatus = (_a) => __awaiter(void 0, [_a], void 0, function* ({ id, status, }) {
    const isPartnershipExist = yield partnership_schema_1.Partnership.findById(id);
    if (!isPartnershipExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Partnership not found");
    }
    const result = yield partnership_schema_1.Partnership.findOneAndUpdate({ _id: id }, { status }, {
        new: true,
    });
    return result;
});
// * Get all Partnership
const getAllPartnerships = (filters, paginationOptions) => __awaiter(void 0, void 0, void 0, function* () {
    const { searchTerm } = filters, filterData = __rest(filters, ["searchTerm"]);
    const andConditions = [];
    if (searchTerm) {
        andConditions.push({
            $or: partnership_constant_1.PartnershipSearchableFields.map(field => ({
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
    const { page, limit, skip, sortBy, sortOrder } = (0, paginationHelpers_1.calculatePaginationFunction)(paginationOptions);
    const sortConditions = {};
    if (sortBy && sortOrder) {
        sortConditions[sortBy] = sortOrder;
    }
    //
    const checkAndCondition = (andConditions === null || andConditions === void 0 ? void 0 : andConditions.length) > 0 ? { $and: andConditions } : {};
    const result = yield partnership_schema_1.Partnership.find(checkAndCondition, {
        password: 0,
        uid: 0,
    })
        .sort(sortConditions)
        .skip(skip)
        .limit(limit);
    const total = yield partnership_schema_1.Partnership.countDocuments();
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: result,
    };
});
// * Delete a Partnership
const deletePartnership = (_a) => __awaiter(void 0, [_a], void 0, function* ({ id, }) {
    const isPartnershipExist = yield partnership_schema_1.Partnership.findOne({ _id: id });
    if (!isPartnershipExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Partnership Already Deleted");
    }
    const result = yield partnership_schema_1.Partnership.findOneAndDelete({ _id: id }, { new: true });
    return result;
});
exports.PartnershipService = {
    addPartnership,
    updatePartnershipStatus,
    getAllPartnerships,
    deletePartnership,
};
