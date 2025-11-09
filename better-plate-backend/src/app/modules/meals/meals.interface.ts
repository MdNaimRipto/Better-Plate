export interface IMeals {
  title: {
    en: string;
    ban: string;
  };
  image: string;
  protein: number;
  craps: number;
  fat: number;
}

export type IMealFilters = {
  searchTerm?: string;
  title?: string;
};
