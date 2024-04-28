import { createSlice } from "@reduxjs/toolkit";

const imageSizesSlice = createSlice({
    name: "uploadImage",
    initialState: {
        imageSizeZoom: 1
    },
    reducers: {
        setImageSizeZoom(state, action) {
            state.imageSizeZoom = action.payload.imageSizeZoom
        }
    },
});

export const { setImageSizeZoom } = imageSizesSlice.actions;
export default imageSizesSlice.reducer;
