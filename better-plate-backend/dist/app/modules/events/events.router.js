"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsRouter = void 0;
const express_1 = __importDefault(require("express"));
const zodValidationRequest_1 = __importDefault(require("../../../middlewares/zodValidationRequest"));
const events_validation_1 = require("./events.validation");
const events_controller_1 = require("./events.controller");
const router = express_1.default.Router();
router.post("/addEvent", (0, zodValidationRequest_1.default)(events_validation_1.EventsValidation.AddEventValidation), events_controller_1.EventsController.addEvent);
router.patch("/updateEvent/:id", events_controller_1.EventsController.updateEvent);
router.get("/getAllEvents", events_controller_1.EventsController.getAllEvents);
router.get("/getEventById/:id", events_controller_1.EventsController.getEventById);
router.delete("/deleteEvent/:id", events_controller_1.EventsController.deleteEvent);
exports.EventsRouter = router;
