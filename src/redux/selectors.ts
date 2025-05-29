import {RootState} from "./store";

export const selectUsers = (state: RootState) => state.auth.users;
export const selectIsLoggedIn =(state: RootState)=> state.auth.isLoggedIn;
export const selectLoggedUser = (state: RootState) => state.auth.loggedUser;