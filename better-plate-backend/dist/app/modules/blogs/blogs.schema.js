"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blogs = void 0;
const mongoose_1 = require("mongoose");
const blogs_constant_1 = require("./blogs.constant");
const blogsSchema = new mongoose_1.Schema({
    category: { type: String, enum: blogs_constant_1.BlogsCategoryEnums, required: true },
    title: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Blogs = (0, mongoose_1.model)("Blogs", blogsSchema);
