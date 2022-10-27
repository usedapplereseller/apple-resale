import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./common/Header";
import ListingPhoto from "./common/ListingPhoto";
import "./App.css";
import { MDBContainer, MDBTypography, MDBBtn } from "mdb-react-ui-kit";
import axios from "axios";
import { BACKEND_URL } from "../constants";
import iphoneImg from "../landing-page-images/iphone.jpeg";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import ListingPreviewList from "./common/ListingPreviewList";

const ListingBuy: FC = () => {
  const [productId, setProductId] = useState<string>();
  const [listingId, setListingId] = useState<string>();
  const [title, setTitle] = useState<string>();
  const [price, setPrice] = useState<number>();
  const [description, setDescription] = useState<string>();
  const [condition, setCondition] = useState<string>();
  const [sellerId, setSellerId] = useState<number>();
  const [buyerId, setBuyerId] = useState<number>();
  const [photoUrl, setPhotoUrl] = useState<any[]>([
    iphoneImg,
    iphoneImg,
    iphoneImg,
  ]);

  useEffect(() => {
    if (productId && listingId) {
      axios
        .get(`${BACKEND_URL}/listings/${productId}/${listingId}`)
        .then((response) => {
          setTitle(response.data.title);
          setPrice(response.data.price);
          setDescription(response.data.description);
          setCondition(response.data.condition_id);
          setSellerId(response.data.seller_id);
          setBuyerId(response.data.buyer_id);
        });
    }
  }, [listingId, productId]);

  // to update after wiring with photos
  // useEffect(() => {
  //   if (listingId) {
  //     axios.get(`${BACKEND_URL}/photos/${listingId}`).then((response) => {
  //       setPhotoUrl(response.data);
  //     });
  //   }
  // }, [listingId]);

  // to delete following placeholder after updating wiring with photos

  const params = useParams();
  if (listingId !== params.listingId) {
    setListingId(params.listingId);
  }
  if (productId !== params.productId) {
    setProductId(params.productId);
  }

  const cardBasicInfo = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5" component="div">
          ${price}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {condition}
        </Typography>
      </CardContent>
    </React.Fragment>
  );

  const cardDescription = (
    <React.Fragment>
      <CardContent>
        <Typography variant="body2">
          Description: <br></br>
          {description}
        </Typography>
      </CardContent>
    </React.Fragment>
  );

  const cardInteraction = (
    <React.Fragment>
      <CardContent>
        <Typography variant="body2">Seller</Typography>
        <MDBBtn
          className="mt-3 btn-sm"
          style={{ maxWidth: 100 }}
          outline
          color="dark"
        >
          Buy
        </MDBBtn>{" "}
        <br></br>
        <MDBBtn
          className="mt-3 btn-sm"
          style={{ maxWidth: 100 }}
          outline
          color="dark"
        >
          Chat
        </MDBBtn>{" "}
        <br></br>
      </CardContent>
    </React.Fragment>
  );

  return (
    <div>
      <Header />
      {/* to create breadcrumbs */}
      <MDBContainer>
        <MDBTypography tag="h6" className="mt-4">
          {/* To add breadcrumb */}
        </MDBTypography>
        <MDBContainer className="d-flex flex-wrap justify-content-center">
          {/* To update after wiring with photos
          {photoUrl?.map((eachPhotoUrl) => (
            <ListingPhoto photoUrl={eachPhotoUrl.photos_link} />
          ))} */}

          {photoUrl?.map((eachPhotoUrl) => (
            <ListingPhoto photoUrl={eachPhotoUrl} />
          ))}
        </MDBContainer>
        <MDBContainer className="d-flex flex-wrap justify-content-center">
          <div>
            <Box sx={{ Width: 0.75, Margin: 5 }}>
              <Card variant="outlined">{cardBasicInfo}</Card>
            </Box>
            <Box sx={{ Width: 0.75, Margin: 5 }}>
              <Card variant="outlined">{cardDescription}</Card>
            </Box>
          </div>
          <Box sx={{ Width: 0.2, Margin: 5 }}>
            <Card variant="outlined">{cardInteraction}</Card>
          </Box>
        </MDBContainer>
        <br />
        <br />
        <br />
        {/* to update for Recommendations, View History, and Similar Listings */}
        <ListingPreviewList />
      </MDBContainer>
      <br />
    </div>
  );
};

export default ListingBuy;
