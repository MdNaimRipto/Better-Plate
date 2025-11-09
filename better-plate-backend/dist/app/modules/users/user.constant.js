"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFilterableFields = exports.UserSearchableFields = exports.AccountStatusEnums = exports.ActivityEnums = exports.GoalEnums = exports.GenderTypeEnums = exports.RoleEnums = exports.LinkedProvidersEnums = void 0;
exports.LinkedProvidersEnums = [
    "CUSTOM",
    "FACEBOOK",
    "TWITTER",
    "GOOGLE",
];
exports.RoleEnums = ["USER", "ADMIN"];
exports.GenderTypeEnums = [
    "FEMALE",
    "MALE",
    "Not Updated Yet!",
];
exports.GoalEnums = [
    "DELICIOUS_FOOD",
    "MAINTAINING_WEIGHT",
    "MUSCLE_BUILDING",
    "Not Updated Yet!",
    "WEIGHT_GAIN",
    "WEIGHT_LOSS",
];
exports.ActivityEnums = [
    "NO_EXERCISE",
    "Not Updated Yet!",
    "ONE_TO_THREE_TIMES_A_WEEK",
    "SIX_TO_SEVEN_TIMES_A_WEEK",
    "THREE_TO_FIVE_TIMES_A_WEEK",
];
exports.AccountStatusEnums = ["ACTIVE", "FREEZE"];
exports.UserSearchableFields = ["userName", "email"];
exports.UserFilterableFields = [
    "searchTerm",
    "userName",
    "email",
    "accountStatus",
    "goal",
    "levelOfActivity",
];
