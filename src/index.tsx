import React, { FC } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./components/App";
import Home from "./components/Home";
import { Auth0Provider } from "@auth0/auth0-react";
import reportWebVitals from "./reportWebVitals";
import ListingProducts from "./components/ListingProducts";
import ListingBuy from "./components/ListingBuy";
import NewListingForm from "./components/NewListingForm";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_DOMAIN!}
      clientId={process.env.REACT_APP_CLIENTID!}
      redirectUri={window.location.origin}
      audience={process.env.REACT_APP_AUDIENCE}
      scope={process.env.REACT_APP_SCOPE}
    >
      <BrowserRouter>
        <Routes>
          {/* Route that provides base app UI */}
          <Route path="/" element={<App />}>
            {/* Route that renders home content */}
            <Route index element={<Home />} />
            {/* Route that renders new listing form */}
            <Route path="listings/new" element={<NewListingForm />} />
            {/* Route that renders individual listings */}
            {/* <Route path="listings/:listingId" element={<Listing />} /> */}
            {/* Route that matches all other paths */}
            <Route path="listings/:productId" element={<ListingProducts />} />
            <Route
              path="listings/:productId/:listingId"
              element={<ListingBuy />}
            />
            <Route path="*" element={"Nothing here!"} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

console.log(window.location.origin);
