"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Partnership = void 0;
const mongoose_1 = require("mongoose");
const partnership_constant_1 = require("./partnership.constant");
const partnershipSchema = new mongoose_1.Schema({
    fullName: { type: String, required: true },
    companyName: { type: String, required: true },
    companySocialMediaLink: {
        facebook: { type: String, required: true },
        twitter: { type: String, required: true },
        instagram: { type: String, required: true },
        linkedin: { type: String, required: true },
    },
    companyWebsite: { type: String, required: true },
    country: { type: String, required: true },
    message: { type: String, required: true },
    numberOfEmployees: { type: Number, required: true },
    phoneNumber: { type: String, required: true },
    status: {
        type: String,
        enum: partnership_constant_1.PartnershipStatusEnum,
        required: true,
        default: "PENDING",
    },
    workEmail: { type: String, required: true },
});
exports.Partnership = (0, mongoose_1.model)("Partnership", partnershipSchema);
