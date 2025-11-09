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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = exports.usersSchema = void 0;
const mongoose_1 = require("mongoose");
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = __importDefault(require("../../../config/config"));
const user_constant_1 = require("./user.constant");
exports.usersSchema = new mongoose_1.Schema({
    userName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    contactNumber: { type: String, required: true },
    profileImage: {
        type: String,
        required: true,
        default: "https://i.ibb.co/dcHVrp8/User-Profile-PNG-Image.png",
    },
    password: { type: String, required: true },
    uid: { type: String, required: true, unique: true },
    linkedProviders: {
        type: [
            {
                type: String,
                enum: user_constant_1.LinkedProvidersEnums,
            },
        ],
        required: true,
    },
    location: {
        latitude: { type: Number, required: true, default: 0 },
        longitude: { type: Number, required: true, default: 0 },
        address: { type: String, required: true, default: "Not Updated Yet!" },
    },
    dateOfBirth: {
        date: { type: String, required: true, default: "Not Updated Yet!" },
        year: { type: String, required: true, default: "Not Updated Yet!" },
        month: { type: String, required: true, default: "Not Updated Yet!" },
    },
    activeStatus: { type: Boolean, required: true, default: false },
    role: {
        type: String,
        enum: user_constant_1.RoleEnums,
        required: true,
        default: "USER",
    },
    gender: {
        type: String,
        enum: user_constant_1.GenderTypeEnums,
        required: true,
        default: "Not Updated Yet!",
    },
    goal: {
        type: String,
        enum: user_constant_1.GoalEnums,
        required: true,
        default: "Not Updated Yet!",
    },
    levelOfActivity: {
        type: String,
        enum: user_constant_1.ActivityEnums,
        required: true,
        default: "Not Updated Yet!",
    },
    height: { type: Number, required: true, default: 0, min: 0 },
    weight: { type: Number, required: true, default: 0, min: 0 },
    idealWeight: { type: Number, required: true, default: 0, min: 0 },
    mustWarnYou: { type: [String], required: true, default: [] },
    accountStatus: {
        type: String,
        enum: user_constant_1.AccountStatusEnums,
        required: true,
        default: "ACTIVE",
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.usersSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        this.password = yield bcrypt_1.default.hash(this.password, Number(config_1.default.salt_round));
        next();
    });
});
exports.Users = (0, mongoose_1.model)("Users", exports.usersSchema);
