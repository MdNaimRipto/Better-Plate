"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealsRouter = void 0;
const express_1 = __importDefault(require("express"));
const zodValidationRequest_1 = __importDefault(require("../../../middlewares/zodValidationRequest"));
const meals_validation_1 = require("./meals.validation");
const meals_controller_1 = require("./meals.controller");
const router = express_1.default.Router();
router.post("/addMeal", (0, zodValidationRequest_1.default)(meals_validation_1.MealsValidation.AddMealValidation), meals_controller_1.MealsController.addMeal);
router.patch("/updateMeal/:id", meals_controller_1.MealsController.updateMeal);
router.get("/getAllMeals", meals_controller_1.MealsController.getAllMeals);
router.get("/getMealById/:id", meals_controller_1.MealsController.getMealById);
router.delete("/deleteMeal/:id", meals_controller_1.MealsController.deleteMeal);
exports.MealsRouter = router;
