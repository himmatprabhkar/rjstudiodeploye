import { createSlice } from "@reduxjs/toolkit";

const uploadImageSlice = createSlice({
    name: "uploadImage",
    initialState: {
        url: ''
    },
    reducers: {
        setImageUrl(state, action) {
            state.url = action.payload.url
        }
    },
});

export const { setImageUrl } = uploadImageSlice.actions;
export default uploadImageSlice.reducer;
