import { blogCategoryEnums } from "./blogs.interface";

export const BlogsCategoryEnums: blogCategoryEnums[] = [
  "HEALTH_AWARENESS",
  "WEIGHT_MANAGEMENT",
  "NUTRITION",
  "FITNESS",
  "SUPPLEMENTS",
  "HEALTHY_HABITS",
];

export const BlogSearchableFields = ["title"];

export const BlogFilterableFields = ["searchTerm", "title", "category"];
