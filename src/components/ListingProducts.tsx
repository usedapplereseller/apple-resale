import React, { FC, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "./common/Header";
import ListingPreview2 from "./common/ListingPreview2";
import "./App.css";
import { MDBContainer, MDBTypography, MDBBtn } from "mdb-react-ui-kit";
import axios from "axios";
import { BACKEND_URL, TYPE_OF_PRODUCT } from "../constants";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { styled } from "@material-ui/styles";

const ListingProducts: FC = () => {
  const [productId, setProductId] = useState<string>();
  const [listings, setListings] = useState<any[]>();
  const [productName, setProductName] = useState<string>();
  const [urlProduct, setUrlProduct] = useState<string>("");

  useEffect(() => {
    if (productId) {
      axios.get(`${BACKEND_URL}/listings/${productId}`).then((response) => {
        setListings(response.data);
      });
      setProductName(TYPE_OF_PRODUCT[productId]);
      setUrlProduct(`/listings/${productId}`);
    }
  }, [productId]);

  const params = useParams();
  if (productId !== params.productId) {
    setProductId(params.productId);
  }

  const StyledLink = styled(Link)({
    underline: "hover",
    color: "inherit",
  }) as typeof Link;

  return (
    <div>
      <Header />
      <Breadcrumbs aria-label="breadcrumb">
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to={urlProduct}>{productName}</StyledLink>
      </Breadcrumbs>
      <MDBContainer>
        <MDBTypography tag="h6" className="mt-4">
          {productName}
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
