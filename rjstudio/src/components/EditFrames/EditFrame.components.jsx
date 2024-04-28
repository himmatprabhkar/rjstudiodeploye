import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { setImageStatus } from "../../slices/imageStatusSlice";
import { setImageBorderCss } from "../../slices/selectFrameSlice";
import { useSelector } from 'react-redux';
import { FrameDives } from "../FrameDives/FrameDives.component";



export const EditFrame = () => {
    const [isSelected, setIsSelected] = useState(0);
    const dispatch = useDispatch();

    const getFrameBorderBorder = useSelector(state => state.selectFrameCss.allCssBorder);

    return (
        <>
            <div className="col-lg-5">
                <div className="d-flex flex-column gap-3 mt-4">
                    <div className="uploaded-title text-center">Choose your frame</div>
                    <p className="text-center text-dark ">We adapt these formats to the aspect ratio of your photo always perfectly fitting.</p>
                </div>
                <div className="row">
                    {/* <div> <button onClick={() => dispatch(setImageStatus({ imageStatus: 0 }))} className="btn btn-primary">Back</button></div> */}

                    <button onClick={() => setIsSelected(0)} className="btn btn-primary">Back</button>

                    {isSelected === 1 ? <><FrameDives /></> : <div className="col-4">
                        <div
                            className="card mt-3"
                            style={{
                                height: 100,
                                width: 180,
                                display: 'block',
                                background: '#endregion',
                                cursor: 'pointer'
                            }}
                            onClick={() => setIsSelected(1)}
                        >
                            <img
                                src="https://swap-assets.whitewall.com/v1/128/options/frame/29/thumbnail.png"
                                alt="Image"
                                style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        <span>Hamburg 0.8</span>
                    </div>}

                    {/* {isSelected === 2 ? <><FrameDives /></> : <div className="col-4">
                        <div
                            className="card mt-3"
                            style={{
                                height: 100,
                                width: 180,
                                display: 'block',
                                background: '#endregion',
                                cursor: 'pointer'
                            }}
                            onClick={() => setIsSelected(2)}
                        >
                            <img
                                src="https://swap-assets.whitewall.com/v1/128/options/frame/29/thumbnail.png"
                                alt="Image"
                                style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        <span>Hamburg 0.8</span>
                    </div>} */}
                </div>
                <a onClick={() => dispatch(setImageStatus({ imageStatus: 4 }))} className="select-size-btn m-auto mt-5 mx-5 bg-dark d-block text-center p-3  rounded text-white">Next: Select Motif Size</a>
            </div>
        </>
    );
};
