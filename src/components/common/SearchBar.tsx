import React from "react";
import { MDBBtn, MDBIcon, MDBContainer } from "mdb-react-ui-kit";

const SearchBar: React.FC = () => {
  return (
    <MDBContainer
      className="d-flex input-group justify-content-center my-5"
      style={{ maxWidth: 480 }}
    >
      <form className="input-group">
        <input
          type="search"
          className="form-control"
          placeholder="Search for item"
          aria-label="Search"
        />
        <MDBBtn color="primary">
          <MDBIcon fas icon="search" />
        </MDBBtn>
      </form>
    </MDBContainer>
  );
};

export default SearchBar;
