import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: AuthState  = {
    user: {
        first_name: "",
        last_name: "",
        date_of_birth: "",
        phone: "",
        email: "",
        password: "",
    },
    isLoggedIn: false,
    isModalOpen: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
        signUp: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
            state.isLoggedIn = true;
        },
        logIn: (state, action: PayloadAction<string>) => {
            state.isLoggedIn = true;
        },
        logOut: (state) => {
            state.user = initialState.user;
            state.isLoggedIn = false;
        },
        closeAuthorization: (state) => {
            state.isModalOpen = false;
        },
        openAuthorization: (state) => {
            state.isModalOpen = true;
        },
    },
});

export const {setUser, signUp, logIn, logOut, closeAuthorization, openAuthorization} = authSlice.actions;
export default authSlice.reducer;