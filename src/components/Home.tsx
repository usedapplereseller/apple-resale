import { useAuth0 } from "@auth0/auth0-react";
import React, { FC } from "react";
import Header from "./common/Header";
import SearchBar from "./common/SearchBar";
import ListingPreviewList from "./common/ListingPreviewList";
import "./App.css";
import iphoneImg from "../landing-page-images/iphone.jpeg";
import watchImg from "../landing-page-images/watch.png";
import ipadImg from "../landing-page-images/ipad.png";
import macImg from "../landing-page-images/mac.png";

const Home: FC = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <Header />
      <SearchBar />
      <div className="d-flex flex-wrap justify-content-center ">
        <div className="bg-image categoryContainer">
          <img src={macImg} className="img-fluid  categoryPhoto" />
          <div className="mask">
            <div className="d-flex justify-content-center align-items-center h-100 ">
              <p className="text-white fs-1 fw-bold pb-5">MacBook Pro</p>
            </div>
          </div>
        </div>

        <div className="bg-image categoryContainer">
          <img src={iphoneImg} className="img-fluid categoryPhoto" />
          <div className="mask ">
            <div className="d-flex justify-content-center align-items-center h-100">
              <p className="text-black fs-1 fw-bold pb-4 ">iPhone</p>
            </div>
          </div>
        </div>

        <div className="bg-image categoryContainer">
          <img src={ipadImg} className="img-fluid categoryPhoto" />
          <div className="mask mt-3" style={{ width: 130 }}>
            <div className="d-flex justify-content-center">
              <p className="text-black fs-1 fw-bold pb-4">iPad</p>
            </div>
          </div>
        </div>

        <div className="bg-image categoryContainer">
          <img src={watchImg} className="img-fluid categoryPhoto" />
          <div className="mask mt-3" style={{ width: 145 }}>
            <div className="d-flex justify-content-end align-items-end">
              <p className="text-white fs-1 fw-bold">Watch</p>
            </div>
          </div>
        </div>
      </div>

      {/* to update for Recommendations, View History, and Similar Listings */}
      <ListingPreviewList />
      <br />
      <button onClick={() => loginWithRedirect()}>Logout</button>
    </div>
  );
};

export default Home;
