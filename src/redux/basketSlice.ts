import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: BasketState = {
    items: [],
    isOpen: false,
};

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Omit<BasketItem, 'quantity'>>) => {
            const existing = state.items.find(
                item =>
                    item.id === action.payload.id &&
                    item.selectedColor === action.payload.selectedColor
            );
            if (existing) {
                existing.quantity += 1;
            } else {
                state.items.push({...action.payload, quantity: 1});
            }
        },
        decreaseQuantity: (state, action: PayloadAction<Pick<BasketItem, 'id' | 'selectedColor'>>) => {
            const item = state.items.find(
                i => i.id === action.payload.id && i.selectedColor === action.payload.selectedColor
            );
            if (item) {
                item.quantity -= 1;
                if (item.quantity <= 0) {
                    state.items = state.items.filter(i => i !== item);
                }
            }
        },
        removeFromBasket: (state, action: PayloadAction<Pick<BasketItem, 'id' | 'selectedColor'>>) => {
            state.items = state.items.filter(
                i => !(i.id === action.payload.id && i.selectedColor === action.payload.selectedColor)
            );
        },
        setBasket: (state, action: PayloadAction<BasketItem[]>) => {
            state.items = action.payload;
        },
        clearBasket: (state): void => {
            state.items = [];
        },
        openBasket: (state): void => {
            state.isOpen = true;
        },
        closeBasket: (state): void => {
            state.isOpen = false;
        },

    },
});

export const {
    addProduct,
    decreaseQuantity,
    removeFromBasket,
    setBasket,
    clearBasket,
    openBasket,
    closeBasket,
} = basketSlice.actions;

export default basketSlice.reducer;