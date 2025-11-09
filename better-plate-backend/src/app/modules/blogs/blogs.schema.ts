import { model, Schema } from "mongoose";
import { IBlogs } from "./blogs.interface";
import { BlogsCategoryEnums } from "./blogs.constant";

const blogsSchema = new Schema<IBlogs>(
  {
    category: { type: String, enum: BlogsCategoryEnums, required: true },
    title: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

export const Blogs = model<IBlogs>("Blogs", blogsSchema);
