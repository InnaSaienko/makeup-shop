import {createSlice} from "@reduxjs/toolkit";

interface BasketState {
    items: BasketItem[];
}

const initialState: BasketState = {
    items: [],
};

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {},
});

export const {

} = basketSlice.actions;

export default basketSlice.reducer;