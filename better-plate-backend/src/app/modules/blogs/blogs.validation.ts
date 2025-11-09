import { z } from "zod";
import { BlogsCategoryEnums } from "./blogs.constant";

const AddBlogValidation = z.object({
  body: z.object({
    category: z.enum([...BlogsCategoryEnums] as [string, ...string[]], {
      required_error: "Category is Required",
    }),
    title: z.string({
      required_error: "Title is Required",
    }),
    image: z.string({
      required_error: "Image is Required",
    }),
    description: z.string({
      required_error: "Image is Required",
    }),
  }),
});

export const BlogsValidation = {
  AddBlogValidation,
};
