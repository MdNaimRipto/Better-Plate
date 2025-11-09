"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlansAndPackagesRouter = void 0;
const express_1 = __importDefault(require("express"));
const plansAndPackages_controller_1 = require("./plansAndPackages.controller");
const zodValidationRequest_1 = __importDefault(require("../../../middlewares/zodValidationRequest"));
const plansAndPackages_validation_1 = require("./plansAndPackages.validation");
const router = express_1.default.Router();
router.post("/uploadPlan", (0, zodValidationRequest_1.default)(plansAndPackages_validation_1.PlansAndPackagesValidation.AddPlanValidation), plansAndPackages_controller_1.PlanAndPackagesController.uploadPlan);
router.patch("/updatePlan/:id", plansAndPackages_controller_1.PlanAndPackagesController.updatePlan);
router.get("/getAllPlans", plansAndPackages_controller_1.PlanAndPackagesController.getAllPlans);
exports.PlansAndPackagesRouter = router;
