import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import ListingPreviewList from "./ListingPreviewList";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Link to="/listings/new">Sell</Link>
      <br />
      <br />
      <ListingPreviewList />
    </div>
  );
};

export default Home;
