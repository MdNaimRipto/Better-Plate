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
exports.PlansAndPackagesService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const plansAndPackages_schema_1 = require("./plansAndPackages.schema");
const uploadPlan = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, category, packageType, totalDays } = payload;
    const isPlanAlreadyExist = yield plansAndPackages_schema_1.PlansAndPackages.findOne({
        $and: [{ name }, { category }, { packageType }, { totalDays }],
    });
    if (isPlanAlreadyExist) {
        throw new ApiError_1.default(http_status_1.default.CONFLICT, `Plan already exist With ${name} & ${category}`);
    }
    // if (category === "CUTTING") {
    //   payload.carbs = 100;
    //   payload.protein = 100;
    // } else if (category === "DAILY_LIFESTYLE") {
    //   payload.carbs = 150;
    //   payload.protein = 150;
    // } else if (category === "HIGH_PROTEIN") {
    //   payload.carbs = 150;
    //   payload.protein = 200;
    // }
    const result = yield plansAndPackages_schema_1.PlansAndPackages.create(payload);
    return result;
});
const getAllPlans = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield plansAndPackages_schema_1.PlansAndPackages.find();
    return result;
});
const updatePlan = (planId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isPlanExist = yield plansAndPackages_schema_1.PlansAndPackages.findOne({ _id: planId });
    if (!isPlanExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Plan Does Not Exists!");
    }
    const { price, calory, includes } = payload, restPayload = __rest(payload, ["price", "calory", "includes"]);
    if (price && Object.keys(price).length > 0) {
        Object.keys(price).map(key => {
            const pricesKey = `price.${key}`;
            restPayload[pricesKey] = price[key];
        });
    }
    if (calory && Object.keys(calory).length > 0) {
        Object.keys(calory).map(key => {
            const caloriesKey = `calory.${key}`;
            restPayload[caloriesKey] = calory[key];
        });
    }
    if (includes && Object.keys(includes).length > 0) {
        Object.keys(includes).map(key => {
            const includesKey = `includes.${key}`;
            restPayload[includesKey] =
                includes[key];
        });
    }
    const result = yield plansAndPackages_schema_1.PlansAndPackages.findOneAndUpdate({ _id: planId }, restPayload, {
        new: true,
    });
    return result;
});
exports.PlansAndPackagesService = {
    uploadPlan,
    getAllPlans,
    updatePlan,
};
