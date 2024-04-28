import React from "react";
import '../../assets/css/header.css'
import darkLogo from '../../assets/images/RJstudio-dark-logo.svg'

export const HeaderEditUpload = () => {
  return (
    <>
      <header className="header-light border-bottom sticky-top">
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container">
            <a className="navbar-brand" href="#"><img src={darkLogo} alt="" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav m-auto">
                <li><a href="/">Home</a></li>
                <li><a href="/about">Framed Print</a></li>
                <li><a href="/services">Wall art</a></li>
                <li><a href="/contact">Categories</a></li>
                <li><a href="/contact">All products</a></li>
              </ul>
            </div>
            <div className="d-flex align-items-center gap-3">
              <div className="cart">
                <svg fill="000" height="22" width="22" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" /></svg>
              </div>
              <div className="username fw-bold d-flex justify-content-center align-items-center rounded-circle">B</div>
              <ul className="mb-0 ps-0 dropdowns-container list-unstyled">
                <li className="dropdowns">
                  <a href="#">Bruce Lee</a>
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 448 512">
                    <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z">
                    </path>
                  </svg>
                  <ul>
                    <li>
                      <a href="#">Instagram</a>
                    </li>
                    <li>
                      <a href="#">Instagram</a>
                    </li>
                    <li>
                      <a href="#">Instagram</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* <AddImageModal isShow={enablePop} closeModal={() => setEnablePop(false)} toastCallBack={(image) => toastCallBack(image)} /> */}

      {/* <ShowImageModal isShow={enablePopShowImage} closeModal={() => setEnablePopShowImage(false)} getImage={image} /> */}
    </>
  )
}