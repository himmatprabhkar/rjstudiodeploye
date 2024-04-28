import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth: false,
        token: ""
    },
    reducers: {
        login(state, action) {
            state.token = action?.payload?.token
            state.isAuth = true
            localStorage.setItem('token', action?.payload?.token);
        },
        logout(state) {
            state.isAuth = false
            localStorage.removeItem('token')
        }
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
