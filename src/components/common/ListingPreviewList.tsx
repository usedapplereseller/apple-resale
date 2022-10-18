import React from "react";
import ListingPreview from "./ListingPreview";
import { MDBContainer, MDBTypography, MDBBtn } from "mdb-react-ui-kit";

const ListingPreviewList: React.FC = () => {
  return (
    <>
      <MDBContainer>
        <MDBTypography tag="h6" className="mt-4">
          ~ Recommendations ~{" "}
        </MDBTypography>
        <MDBContainer className="d-flex flex-wrap justify-content-center">
          <ListingPreview />
          <ListingPreview />
          <ListingPreview />
          <ListingPreview />
          <ListingPreview />
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
      {/* <div>{listingPreviews}</div> */}
    </>
  );
};

export default ListingPreviewList;
