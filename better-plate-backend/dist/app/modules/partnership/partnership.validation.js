"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartnershipValidations = void 0;
const zod_1 = require("zod");
const PartnershipValidation = zod_1.z.object({
    body: zod_1.z.object({
        fullName: zod_1.z.string({ required_error: "Full Name is Required" }),
        companyName: zod_1.z.string({ required_error: "Company Name is Required" }),
        companySocialMediaLink: zod_1.z.object({
            facebook: zod_1.z.string({ required_error: "Facebook link is Required" }),
            twitter: zod_1.z.string({ required_error: "Twitter link is Required" }),
            instagram: zod_1.z.string({ required_error: "Instagram link is Required" }),
            linkedin: zod_1.z.string({ required_error: "LinkedIn link is Required" }),
        }),
        companyWebsite: zod_1.z.string({ required_error: "Company Website is Required" }),
        country: zod_1.z.string({ required_error: "Country is Required" }),
        message: zod_1.z.string({ required_error: "Message is Required" }),
        numberOfEmployees: zod_1.z
            .number({ required_error: "Number of Employees is Required" })
            .int("Number of Employees must be an integer"),
        phoneNumber: zod_1.z.string({ required_error: "Phone Number is Required" }),
        workEmail: zod_1.z.string({ required_error: "Work Email is Required" }),
    }),
});
exports.PartnershipValidations = {
    PartnershipValidation,
};
