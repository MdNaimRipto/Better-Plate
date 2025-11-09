export type blogCategoryEnums =
  | "HEALTHY_HABITS"
  | "HEALTH_AWARENESS"
  | "WEIGHT_MANAGEMENT"
  | "NUTRITION"
  | "FITNESS"
  | "SUPPLEMENTS";

export interface IBlogs {
  category: blogCategoryEnums;
  title: string;
  image: string;
  description: string;
}

export type IBlogFilters = {
  searchTerm?: string;
  title?: string;
  category?: blogCategoryEnums;
};
