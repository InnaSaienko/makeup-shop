import {RootState} from "./store";

export const selectUser = (state: RootState) => state.auth.user;
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectIsAuthOpen = (state: RootState) => state.auth.isModalOpen;
export const selectIsBasketOpen = ((state: RootState) => state.basket.isOpen);

export const selectBasketItems = (state: RootState) => state.basket.items;
export const selectTotalQuantity = (state: RootState) =>
    state.basket.items.reduce((total: number, item: BasketItem) => total + item.quantity, 0);
export const selectProductQuantity = (id: string, color: string) => (state: RootState) => {
    const item : BasketItem | undefined = state.basket.items.find((item: { id: string; selectedColor: string; }) => item.id === id && item.selectedColor === color);
    return item?.quantity || 0;
};



