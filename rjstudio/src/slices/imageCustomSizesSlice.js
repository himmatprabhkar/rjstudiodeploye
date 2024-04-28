import { createSlice } from "@reduxjs/toolkit";

const imageCustomSizesSlice = createSlice({
    name: "uploadImage",
    initialState: {
        imageCustomHeight: 200,
        imageCustomWidth: 200
    },
    reducers: {
        setImageCustomSizeZoom(state, action) {
            return {
                ...state,
                ...action.payload
            };
        }
    },
});

export const { setImageCustomSizeZoom } = imageCustomSizesSlice.actions;
export default imageCustomSizesSlice.reducer;
