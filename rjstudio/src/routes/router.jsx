import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage/Landing.Page"
import { SingInPage } from "../pages/SingInPage/SignIn.Page";
import { EditFrame } from "../components/EditFrames/EditFrame.components";
import { EditlPhoto } from "../pages/EditPhoto/EditPhoto.page";
import { SwiperImages } from "../components/swiperImages/Swiper.component";
import { SwiperImages1 } from "../components/swiperImages/Swiper.component1";
import { useSelector } from 'react-redux';
import { SignUp } from "../pages/Auth/SignUp.page";
import { Login } from "../pages/Auth/Login.page";
import { Checkout } from "../pages/Checkout/Checkout.page";
import { AddToCart } from "../pages/AddToCart/AddToCart.page";

const MainRouter = () => {
  const url = useSelector(state => state.uploadImage.url);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/abc-kkk" element={<SingInPage />} />
        <Route path="/edit-frame" element={<EditFrame />} />
        <Route path="/swiper" element={<SwiperImages />} />
        <Route path="/swipe1" element={<SwiperImages1 />} />

        <Route path="/edit-photo" element={<EditlPhoto />}>
            {/* Child component */}
        </Route>

        <Route path="/signup" element={<Login />} />
        <Route path="/sign-in" element={<SignUp />} />

        <Route path="/checkout" element={<Checkout />} />
        <Route path="/addtocart" element={<AddToCart />} />


      </Routes>
    </Router>
  );
};

export default MainRouter;
