"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogsRouter = void 0;
const express_1 = __importDefault(require("express"));
const zodValidationRequest_1 = __importDefault(require("../../../middlewares/zodValidationRequest"));
const blogs_validation_1 = require("./blogs.validation");
const blogs_controller_1 = require("./blogs.controller");
const router = express_1.default.Router();
router.post("/addBlog", (0, zodValidationRequest_1.default)(blogs_validation_1.BlogsValidation.AddBlogValidation), blogs_controller_1.BlogsController.addBlog);
router.patch("/updateBlog/:id", blogs_controller_1.BlogsController.updateBlog);
router.get("/getAllBlogs", blogs_controller_1.BlogsController.getAllBlogs);
router.get("/getBlogById/:id", blogs_controller_1.BlogsController.getBlogById);
router.delete("/deleteBlog/:id", blogs_controller_1.BlogsController.deleteBlog);
exports.BlogsRouter = router;
