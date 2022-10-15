import React from "react";
import { MDBCard, MDBCardText, MDBContainer, MDBIcon } from "mdb-react-ui-kit";
import { Avatar, Box } from "@mui/material";
import "../App.css";

const ListingPreview: React.FC = () => {
  return (
    <>
      <Box>
        <MDBCard alignment="center" href="#" className="listingCard me-4 my-2">
          <MDBCardText className="d-flex flex-row mt-2 mb-2 ms-3 align-items-center">
            <Avatar
              alt="Cindy Baker"
              src="https://picsum.photos/200"
              sx={{ width: 30, height: 30 }}
            />
            <MDBContainer className="d-flex flex-column align-items-start">
              <Box sx={{ fontSize: 14, fontWeight: "bold" }}>username</Box>
              <Box sx={{ fontSize: 10, fontStyle: "italicize" }}>
                2 days ago
              </Box>
            </MDBContainer>
          </MDBCardText>

          <img
            src="https://picsum.photos/200"
            className="img-fluid px-3 listingCardPhoto"
            alt="..."
          />

          <MDBContainer className="d-flex flex-column align-items-start mx-1">
            <Box sx={{ fontSize: 14, textAlign: "left", mt: 1 }}>
              Macbook Air 13" M1 Chip
            </Box>
            <Box sx={{ fontSize: 12, fontWeight: "bold", textAlign: "left" }}>
              $1000
            </Box>

            <Box sx={{ fontSize: 10, fontStyle: "italic", textAlign: "left" }}>
              Brand New
            </Box>

            <MDBIcon far icon="heart" className="my-2" />
          </MDBContainer>
        </MDBCard>
      </Box>
    </>
  );
};

export default ListingPreview;
