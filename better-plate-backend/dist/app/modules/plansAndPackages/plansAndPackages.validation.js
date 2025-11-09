"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlansAndPackagesValidation = void 0;
const zod_1 = require("zod");
const plansAndPackages_constant_1 = require("./plansAndPackages.constant");
const AddPlanValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.enum([...plansAndPackages_constant_1.PackageNameEnums], {
            required_error: "Name is Required",
        }),
        category: zod_1.z.enum([...plansAndPackages_constant_1.PlanCategoryEnums], {
            required_error: "Category is Required",
        }),
        packageType: zod_1.z.enum([...plansAndPackages_constant_1.PackageTypeEnums], {
            required_error: "Package Type is Required",
        }),
        totalDays: zod_1.z
            .number({ required_error: "Total Days is Required" })
            .positive("Total Days must be a positive number"),
        calory: zod_1.z
            .object({
            minCalory: zod_1.z
                .number({ required_error: "Min Calory is Required" })
                .min(0),
            maxCalory: zod_1.z
                .number({ required_error: "Max Calory is Required" })
                .min(0),
        })
            .refine(data => data.minCalory <= data.maxCalory, {
            message: "Min Calory cannot be greater than Max Calory",
            path: ["calory"],
        }),
        carbs: zod_1.z.number({ required_error: "Carbs is Required" }).min(0),
        protein: zod_1.z.number({ required_error: "Min Protein is Required" }).min(0),
        pauseOption: zod_1.z.enum([...plansAndPackages_constant_1.PauseOptionEnums], {
            required_error: "Pause Option is Required",
        }),
        includes: zod_1.z.object({
            snacks: zod_1.z.boolean(),
            juice: zod_1.z.boolean(),
        }),
        price: zod_1.z.object({
            raw: zod_1.z.number({ required_error: "Raw price is Required" }).nonnegative(),
            tax: zod_1.z.number({ required_error: "Tax is Required" }).nonnegative(),
            deliveryCharge: zod_1.z
                .number({ required_error: "Delivery Charge is Required" })
                .nonnegative(),
        }),
    }),
});
exports.PlansAndPackagesValidation = {
    AddPlanValidation,
};
