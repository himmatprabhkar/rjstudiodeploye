import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { setImageStatus } from "../../slices/imageStatusSlice";
import { setImageCustomSizeZoom } from "../../slices/imageCustomSizesSlice";

export const CustomSize = () => {
    const [widthHeight, setErrorHeight] = useState(false);
    const [widthError, setErrorWidth] = useState(false);

    const dispatch = useDispatch();

    const setImageSize = (e) => {
        const { name, value } = e.target;

        if (validateSize(name, value)) {
            dispatch(setImageCustomSizeZoom({ [name]: value }))
        }

    }


    const validateSize = (name, value) => {

        if (name === 'imageCustomWidth' && value > 94.4) {
            setErrorHeight(true);
            return false
        } else {
            setErrorHeight(false);

        }

        if (name === 'imageCustomHeight' && value > 48) {
            setErrorWidth(true);
            return false
        } else {
            setErrorWidth(false);
        }

        return true
    }


    return (
        <>
            <div className="col-lg-5">
                <div> <button onClick={() => dispatch(setImageStatus({ imageStatus: 0 }))} className="btn btn-primary">Back</button></div>

                <div className="d-flex flex-column gap-3">
                    <div className="uploaded-title text-center">Choose your custom size</div>
                    <p className="text-center text-dark ">We adapt these formats to the aspect ratio of your photo always perfectly fitting.</p>
                </div>
                <div className="d-flex justify-content-around mt-4">
                    <div className="orientation-btn d-flex flex-column gap-2 align-items-center">

                        <div className="row g-3 align-items-center">
                            <div className="col-auto">
                                <label for="text" className="col-form-label">Width</label>
                            </div>
                            <div className="col-auto">
                                <input className={`form-control ${widthHeight ? 'is-invalid' : ''}`} name="imageCustomWidth" onChange={(e) => setImageSize(e)} type="number" placeholder=" Enter width in inch" id=""  aria-describedby="passwordHelpInline" />
                            </div>
                            {/* <div className="col-auto">
                                <span id="passwordHelpInline" className="form-text">
                                    Must be 8-20 characters long.
                                </span>
                            </div> */}
                        </div>
                    </div>
                    <div className="rotate-btn d-flex flex-column gap-2 align-items-center">

                        <div className="row g-3 align-items-center">
                            <div className="col-auto">
                                <label for="text" className="col-form-label">Height</label>
                            </div>
                            <div className="col-auto">
                                <input className={`form-control ${widthError ? 'is-invalid' : ''}`} name="imageCustomHeight" onChange={(e) => setImageSize(e)} type="number" placeholder=" Enter hright in inch" id="" aria-describedby="passwordHelpInline" />
                            </div>

                        </div>
                    </div>
                    {/* <div className="brighten-btn d-flex flex-column gap-2 align-items-center">
                        <span><svg height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z" /></svg></span>
                        <span className="fs-14">Brighten</span>
                    </div>
                    <div className="black-white-btn d-flex flex-column gap-2 align-items-center">
                        <span><svg height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z" /></svg></span>
                        <span className="fs-14">Black & White</span>
                    </div> */}
                </div>
                <a onClick={() => dispatch(setImageStatus({ imageStatus: 3 }))} className="select-size-btn m-auto mt-5 mx-5 bg-dark d-block text-center p-3  rounded text-white">Next: Select Size</a>
            </div>
        </>
    );
};
