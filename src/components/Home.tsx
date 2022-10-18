import { useAuth0 } from "@auth0/auth0-react";
import React, { FC } from "react";
import { Link } from "react-router-dom";

import ListingPreviewList from "./ListingPreviewList";

const Home: FC = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <Link to="/listings/new">Sell</Link>
      <br />
      <br />
      <ListingPreviewList />
      <br />
      <button onClick={() => loginWithRedirect()}>Logout</button>
    </div>
  );
};

export default Home;
