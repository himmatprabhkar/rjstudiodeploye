import { createSlice } from "@reduxjs/toolkit";

const selectFrameSlice = createSlice({
    name: "uploadImage",
    initialState: {
        imageBorderCss: 0,
        allCssBorder: [
            {
                display: 'block',
                boxSizing: 'border-box',
                background: `url('https://swap-assets-stag.whitewall.com/v1/32/component/frame/29/57/thumbnail.jpg')`,
                backgroundSize: 'cover', // Adding background-size property
                padding: '15px'

            },
            {
                display: 'block',
                background: `url("https://swap-assets-stag.whitewall.com/v1/32/component/frame/29/52/thumbnail.jpg")`,
                backgroundSize: 'cover', // Adding background-size property
                padding: '15px'
            },
            {
                display: 'block',
                background: `url("https://swap-assets-stag.whitewall.com/v1/32/component/frame/29/53/thumbnail.jpg")`,
                backgroundSize: 'cover', // Adding background-size property
                padding: '15px'
            },
            {
                display: 'block',
                background: `url("https://swap-assets-stag.whitewall.com/v1/32/component/frame/29/55/thumbnail.jpg")`,
                backgroundSize: 'cover', // Adding background-size property
                padding: '15px'
            },
            {
                display: 'block',
                background: `url("https://swap-assets-stag.whitewall.com/v1/32/component/frame/29/74/thumbnail.jpg")`,
                backgroundSize: 'cover', // Adding background-size property
                padding: '15px'
            },
            {
                display: 'block',
                background: `url("https://swap-assets-stag.whitewall.com/v1/32/component/frame/29/1218/thumbnail.jpg")`,
                backgroundSize: 'cover', // Adding background-size property
                padding: '15px'
            },
            {

                display: 'block',
                background: `url("https://swap-assets-stag.whitewall.com/v1/32/component/frame/29/1219/thumbnail.jpg")`,
                backgroundSize: 'cover', // Adding background-size property
                padding: '15px'
            },
            {

                display: 'block',
                background: `url("https://swap-assets-stag.whitewall.com/v1/32/component/frame/29/61/thumbnail.jpg")`,
                backgroundSize: 'cover', // Adding background-size property
                padding: '15px'
            },
        ]
    },
    reducers: {
        setImageBorderCss(state, action) {
            state.imageBorderCss = action.payload.imageBorderCss
        }
    },
});

export const { setImageBorderCss } = selectFrameSlice.actions;
export default selectFrameSlice.reducer;
