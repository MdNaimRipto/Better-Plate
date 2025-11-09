"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartnershipRouter = void 0;
const express_1 = __importDefault(require("express"));
const zodValidationRequest_1 = __importDefault(require("../../../middlewares/zodValidationRequest"));
const partnership_validation_1 = require("./partnership.validation");
const partnership_controller_1 = require("./partnership.controller");
const router = express_1.default.Router();
router.post("/addPartnership", (0, zodValidationRequest_1.default)(partnership_validation_1.PartnershipValidations.PartnershipValidation), partnership_controller_1.PartnershipsController.addPartnership);
router.patch("/updatePartnershipStatus/:id", partnership_controller_1.PartnershipsController.updatePartnershipStatus);
router.get("/getAllPartnerships", partnership_controller_1.PartnershipsController.getAllPartnerships);
router.delete("/deletePartnership/:id", partnership_controller_1.PartnershipsController.deletePartnership);
exports.PartnershipRouter = router;
