import {RootState} from "./store";

export const selectUsers = (state: RootState) => state.auth.users;
export const selectIsLoggedIn =(state: RootState)=> state.auth.isLoggedIn;
export const selectLoggedUser = (state: RootState) => state.auth.loggedUser;
export const selectBasketItems = (state: RootState) => state.basket.items;
export const selectTotalQuantity = (state: RootState) =>
    state.basket.items.reduce((total, item) => total + item.quantity, 0);
export const selectProductQuantity = (id: string, color: string) => (state: RootState) => {
    const item = state.basket.items.find(i => i.id === id && i.selectedColor === color);
    return item?.quantity || 0;
};



