import { categories } from "../constatnts/categories";

export const getCategoryName = (subcategory: string | null) : string | null => {
  if (!subcategory) return null; 

  // const formattedSubcategory = subcategory.toLowerCase().replace(/_/g, " ");

  const category =categories.find((cat) =>
    cat.items.some((item) => item.name.toLowerCase() === subcategory))?.category;

  return category || null;
};
