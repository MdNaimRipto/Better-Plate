import express from "express";
import zodValidationRequest from "../../../middlewares/zodValidationRequest";
import { BlogsValidation } from "./blogs.validation";
import { BlogsController } from "./blogs.controller";

const router = express.Router();

router.post(
  "/addBlog",
  zodValidationRequest(BlogsValidation.AddBlogValidation),
  BlogsController.addBlog,
);

router.patch("/updateBlog/:id", BlogsController.updateBlog);

router.get("/getAllBlogs", BlogsController.getAllBlogs);

router.get("/getBlogById/:id", BlogsController.getBlogById);

router.delete("/deleteBlog/:id", BlogsController.deleteBlog);

export const BlogsRouter = router;
