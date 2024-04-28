import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { setImageStatus } from "../../slices/imageStatusSlice";
import { setImageCustomSizeZoom } from "../../slices/imageCustomSizesSlice";
import { setImageBorderCss } from "../../slices/selectFrameSlice";
import { useSelector } from 'react-redux';
import { setSelectMotifBorder } from "../../slices/selectMotifBorderSlice";

export const MotifBorder = () => {
    const dispatch = useDispatch();

    const getFrameBorderBorder = useSelector(state => state.selectFrameCss.allCssBorder);

    const imageUrls = [
        'https://swap-assets.whitewall.com/v1/128/options/whiteBorder/168/thumbnail.png',
        'https://swap-assets.whitewall.com/v1/128/options/whiteBorder/158/thumbnail.png',
        'https://swap-assets.whitewall.com/v1/128/options/whiteBorder/158/thumbnail.png',
        'https://swap-assets.whitewall.com/v1/128/options/whiteBorder/159/thumbnail.png',
        'https://swap-assets.whitewall.com/v1/128/options/whiteBorder/160/thumbnail.png',
        'https://swap-assets.whitewall.com/v1/128/options/whiteBorder/994/thumbnail.png',
        'https://swap-assets.whitewall.com/v1/128/options/whiteBorder/1105/thumbnail.png',
        'https://swap-assets.whitewall.com/v1/128/options/whiteBorder/1106/thumbnail.png'
    ];

    return (
        <>
            <div className="col-lg-5">
                <div className="d-flex flex-column gap-3 mt-4">
                    <div className="uploaded-title text-center">Choose Motif Border</div>
                    <p className="text-center text-dark ">We adapt these formats to the aspect ratio of your photo always perfectly fitting.</p>
                </div>
                <div className="row">
                    <div> <button onClick={() => dispatch(setImageStatus({ imageStatus: 0 }))} className="btn btn-primary">Back</button></div>

                    {imageUrls.map((ele, index) => {
                        return <><div className="col-4" key={index}>
                            <div
                                className="card mt-3"
                                style={{
                                    height: 100,
                                    width: 180,
                                    cursor: 'pointer'
                                }}
                                onClick={() => dispatch(setSelectMotifBorder({ selectedMotifBorder: index }))}
                            >
                                <div className="card-body">
                                    <img height={'70px'} width={'100px'} src={ele} />
                                </div>
                            </div>
                        </div></>
                    })}
                    {/* <div className="col-4">
                            <div
                                className="card mt-3"
                                style={{
                                    height: 100,
                                    width: 180,
                                    cursor: 'pointer'
                                }}
                            >
                                <div className="card-body">
                                    <button className="btn btn-primary"> make Payment </button>
                                </div>
                            </div>
                        </div> */}
                </div>
                <a href="#" className="select-size-btn m-auto mt-5 mx-5 bg-dark d-block text-center p-3  rounded text-white">Next: Select Size</a>
            </div>
        </>
    );
};
