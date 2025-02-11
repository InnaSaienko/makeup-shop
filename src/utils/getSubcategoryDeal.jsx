import { getCategoryName } from "./getCategoryName";
import { categories } from "../constatnts/categories";

export const getSubcategoryDeal = (subcategory) => {
  if (!subcategory) return null;

  const formattedSubcategory = subcategory.toLowerCase().replace(/_/g, " ");
  
  const category = categories.find((cat) =>
    cat.items.some((item) => item.name.toLowerCase() === formattedSubcategory)
  );
  
  if (!category) return false;

  const subcategoryItem = category.items.find(
    (item) => item.name.toLowerCase() === formattedSubcategory
  );

  return subcategoryItem?.deal || false;
};
