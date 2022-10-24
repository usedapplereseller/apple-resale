import React, { FC, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "./common/Header";
import SearchBar from "./common/SearchBar";
import ListingPreview2 from "./common/ListingPreview2";
import "./App.css";
import { MDBContainer, MDBTypography, MDBBtn } from "mdb-react-ui-kit";
import axios from "axios";
import { BACKEND_URL } from "../constants";

const ListingProducts: FC = () => {
  const [productId, setProductId] = useState<string>();
  const [listings, setListings] = useState<any[]>();

  useEffect(() => {
    if (productId) {
      axios.get(`${BACKEND_URL}/listings/${productId}`).then((response) => {
        setListings(response.data);
      });
    }
    console.log(listings);
  }, [productId]);

  const params = useParams();
  if (productId !== params.productId) {
    setProductId(params.productId);
  }

  return (
    <div>
      <Header />
      {/* to create breadcrumbs */}
      <MDBContainer>
        <MDBTypography tag="h6" className="mt-4">
          ~ Recommendations ~{" "}
        </MDBTypography>
        <MDBContainer className="d-flex flex-wrap justify-content-center">
          {listings?.map((listing) => (
            <ListingPreview2
              id={listing.id}
              title={listing.title}
              price={listing.price}
              description={listing.description}
              product_id={listing.product_id}
              condition_id={listing.condition_id}
              seller_id={listing.seller_id}
              buyer_id={listing.buyer_id}
              createdAt={listing.createdAt}
            />
          ))}
        </MDBContainer>
        <MDBBtn
          className="mt-3 btn-sm"
          style={{ maxWidth: 100 }}
          outline
          color="dark"
        >
          View More
        </MDBBtn>
      </MDBContainer>
      <br />
    </div>
  );
};

export default ListingProducts;
