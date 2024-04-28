import React from "react";
import { useDispatch } from 'react-redux';
import { setImageStatus } from "../../slices/imageStatusSlice";
import { setImageBorderCss } from "../../slices/selectFrameSlice";
import { useSelector } from 'react-redux';



export const FrameDives = () => {
    const dispatch = useDispatch();

    const getFrameBorderBorder = useSelector(state => state.selectFrameCss.allCssBorder);

    return (
        <>
            {getFrameBorderBorder.slice().map((frame, index) => (
                <div className="col-4" key={index}>
                    <div
                        className="card mt-3"
                        style={{
                            height: 100,
                            width: 180,
                            display: 'block',
                            background: frame.background,
                            border: frame.border,
                            boxShadow: frame.boxShadow,
                            padding: frame.padding,
                            boxSizing: frame.boxSizing,
                            cursor: 'pointer'
                        }}
                        onClick={() => dispatch(setImageBorderCss({ imageBorderCss: index }))}
                    >
                    </div>
                </div>
            ))}
        </>
    );
};
