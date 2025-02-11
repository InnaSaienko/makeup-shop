export const calculatePrice = (price, deal) => {
  const priceNum = Number(price).toFixed(2);
    
  if (deal) {
    return {
      oldPrice: (Number(priceNum) / 0.95).toFixed(2),
      newPrice: priceNum,
    };
  }
  return { oldPrice: priceNum, newPrice: null };
};
