"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogsValidation = void 0;
const zod_1 = require("zod");
const blogs_constant_1 = require("./blogs.constant");
const AddBlogValidation = zod_1.z.object({
    body: zod_1.z.object({
        category: zod_1.z.enum([...blogs_constant_1.BlogsCategoryEnums], {
            required_error: "Category is Required",
        }),
        title: zod_1.z.string({
            required_error: "Title is Required",
        }),
        image: zod_1.z.string({
            required_error: "Image is Required",
        }),
        description: zod_1.z.string({
            required_error: "Image is Required",
        }),
    }),
});
exports.BlogsValidation = {
    AddBlogValidation,
};
