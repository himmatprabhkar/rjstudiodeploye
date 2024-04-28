import React from "react";
import { useDispatch } from 'react-redux';
import { setImageStatus } from "../../slices/imageStatusSlice";
import { setImageSizeZoom } from "../../slices/imageSizesSlice";

export const ImageSizes = () => {
    const dispatch = useDispatch();

    
    return (
        <>
            <div className="col-lg-5">
                <div> <button onClick={() => dispatch(setImageStatus({ imageStatus: 0 }))} className="btn btn-primary">Back</button></div>
                <div className="d-flex flex-column gap-3">
                    <div className="uploaded-title text-center">Choose your size</div>
                    <p className="text-center text-dark ">We adapt these formats to the aspect ratio of your photo always perfectly fitting.</p>
                </div>
                <div className="ratio-container d-flex flex-column gap-2">
                    <div onClick={() => dispatch(setImageSizeZoom({ imageSizeZoom: 0.4 }))} className="d-flex justify-content-between mx-4 ratio-item p-2 cursor-pointer-file">
                        <div className="ratio-img">2" * 2"</div>
                        <div className="price fw-bold">$10.95</div>
                    </div>
                    <div onClick={() => dispatch(setImageSizeZoom({ imageSizeZoom: 0.8 }))} className="d-flex justify-content-between mx-4 ratio-item p-2 cursor-pointer-file">
                        <div className="ratio-img">4" * 4"</div>
                        <div className="price fw-bold">$19.95</div>
                    </div>
                    <div onClick={() => dispatch(setImageSizeZoom({ imageSizeZoom: 1.2 }))} className="d-flex justify-content-between mx-4 ratio-item p-2 cursor-pointer-file">
                        <div className="ratio-img">8" * 8"</div>
                        <div className="price fw-bold">$59.95</div>
                    </div>
                    <div onClick={() => dispatch(setImageSizeZoom({ imageSizeZoom: 1.6 }))} className="d-flex justify-content-between mx-4 ratio-item p-2 cursor-pointer-file">
                        <div className="ratio-img">12" * 12"</div>
                        <div className="price fw-bold">$114.95</div>
                    </div>
                    <div onClick={() => dispatch(setImageSizeZoom({ imageSizeZoom: 1.8 }))} className="d-flex justify-content-between mx-4 ratio-item p-2 cursor-pointer-file">
                        <div className="ratio-img">16" * 16"</div>
                        <div className="price fw-bold">$164.95</div>
                    </div>
                    <div onClick={() => dispatch(setImageSizeZoom({ imageSizeZoom: 2 }))} className="d-flex justify-content-between mx-4 ratio-item p-2 cursor-pointer-file">
                        <div className="ratio-img">24" * 24"</div>
                        <div className="price fw-bold">$201.95</div>
                    </div>
                </div>
                
                <div className="d-flex flex-column gap-3 mt-3">
                    <a onClick={() => dispatch(setImageStatus({ imageStatus: 2 }))} className="custom-size text-black m-auto  mx-5  d-block text-center p-3  rounded">Select Custom Size</a>
                    <a onClick={() => dispatch(setImageStatus({ imageStatus: 3 }))}className="select-size-btn size-btn m-auto  mx-5 d-block text-center p-3  rounded text-white">Next: Select Frame</a>
                </div>
            </div>
        </>
    );
};
