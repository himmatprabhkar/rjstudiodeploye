import { configureStore } from '@reduxjs/toolkit';
import uploadImageReducer from '../slices/uploadImageSlice';
import imageStatusSlice from '../slices/imageStatusSlice';
import imageSizesSlice from '../slices/imageSizesSlice';
import imageCustomSizesSlice from '../slices/imageCustomSizesSlice';
import selectFrameSlice from '../slices/selectFrameSlice';
import selectMotifBorderSlice from '../slices/selectMotifBorderSlice';
import authSlice from '../slices/authSlice';

const store = configureStore({
    reducer: {
        uploadImage: uploadImageReducer,
        imageStatus: imageStatusSlice,
        imageSizeZoom: imageSizesSlice,
        imageCustomSizeZoom: imageCustomSizesSlice,
        selectFrameCss: selectFrameSlice,
        selectMotifBorder: selectMotifBorderSlice,
        authData: authSlice
    },
});

export default store;
