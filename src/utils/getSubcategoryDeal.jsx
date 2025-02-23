import { categories } from "../constatnts/categories";

export const getSubcategoryDeal = (subcategory) => {
  if (!subcategory) return null;

  // const formattedSubcategory = subcategory.toLowerCase().replace(/_/g, " ");
  
  const category = categories.find((cat) =>
    cat.items.some((item) => item.name.toLowerCase() === subcategory)
  );
  
  if (!category) return false;

  const subcategoryItem = category.items.find(
    (item) => item.name.toLowerCase() === subcategory
  );

  if (!subcategoryItem || !subcategoryItem.attention) return { deal: false, message: null };
  
  return {
    deal: subcategoryItem.attention.deal,
    message: subcategoryItem.attention.message
  };
};
