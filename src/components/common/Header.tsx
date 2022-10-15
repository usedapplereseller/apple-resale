import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
  MDBBadge,
} from "mdb-react-ui-kit";

const Header: React.FC = () => {
  const [showBasic, setShowBasic] = useState(false);
  const productHeaders = ["Mac", "iPad", "iPhone", "Watch", "Airpods"];

  return (
    <>
      <MDBNavbar expand="md" light bgColor="light">
        <MDBContainer className="d-flex align-items-center justify-content-between">
          <>
            <MDBNavbarToggler
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShowBasic(!showBasic)}
            >
              <MDBIcon icon="bars" fas />
            </MDBNavbarToggler>
          </>

          <div>
            <MDBNavbarBrand href="#" className="collapse navbar-collapse m">
              <MDBIcon fas icon="apple-alt" />
              <MDBContainer>Apple Resale</MDBContainer>
            </MDBNavbarBrand>
          </div>

          <div>
            <MDBCollapse navbar show={showBasic}>
              <MDBNavbarNav className="mr-auto mb-2 mb-lg-0 me-2">
                {productHeaders.map((product) => {
                  return (
                    <MDBNavbarItem key={product} className="me-4">
                      <MDBNavbarLink href="#">{product}</MDBNavbarLink>
                    </MDBNavbarItem>
                  );
                })}
              </MDBNavbarNav>
            </MDBCollapse>
          </div>

          <div className="d-inline-flex align-items-center">
            <MDBDropdown>
              <MDBDropdownToggle tag="a" className="nav-link">
                <MDBIcon fas icon="user" />
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem link>
                  <MDBContainer className="d-flex justify-content-start align-items-center">
                    <MDBIcon far icon="user-circle" className="me-2" />
                    <div>Profile</div>
                  </MDBContainer>
                </MDBDropdownItem>
                <MDBDropdownItem link>
                  <MDBContainer className="d-flex justify-content-start align-items-center">
                    <MDBIcon fas icon="cog" className="me-2" />
                    <div>Settings</div>
                  </MDBContainer>
                </MDBDropdownItem>
                <MDBDropdownItem link>
                  <MDBContainer className="d-flex justify-content-start align-items-center">
                    <MDBIcon fas icon="shopping-bag" className="me-2" />
                    <div>My purchases</div>
                  </MDBContainer>
                </MDBDropdownItem>
                <MDBDropdownItem link>
                  <MDBContainer className="d-flex justify-content-start align-items-center">
                    <MDBIcon fas icon="align-left" className="me-2" />
                    <div>My sales</div>
                  </MDBContainer>
                </MDBDropdownItem>
                <MDBDropdownItem link>
                  <MDBContainer className="d-flex justify-content-start align-items-center">
                    <MDBIcon fas icon="sign-out-alt" className="me-2" />
                    <div>Log out</div>
                  </MDBContainer>
                </MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
            <a className="me-4" href="#!">
              <MDBIcon far icon="comment" size="lg" />
              <MDBBadge color="danger" notification pill>
                1
              </MDBBadge>
            </a>
            <MDBBtn className="d-flex justify-content-center">Sell</MDBBtn>
          </div>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
};

export default Header;
