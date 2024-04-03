import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SGPBreadcrumb from "common/breadcrums/components";
import React, { useState } from "react";
import { Button, Container, NavDropdown, Navbar, Col } from "react-bootstrap";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import DrawerMenu from "common/components/layout/DrawerMenu";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const Appbar: React.FC = () => {
  const [showMenu, setMenu] = useState<boolean>(false);

  let color: string = "";
  let userInitials: string = "";

  return (
    <>
      <DrawerMenu show={showMenu} handleClose={() => setMenu(!showMenu)} />
      <Navbar
        expand="lg"
        variant="light"
        bg="light"
        className="d-flex shadow p-3 mb-3 bg-body rounded"
        style={{ height: "65px" }}
      >
        <Container fluid className="d-flex flex-row align-items-center px-2">
          <Navbar.Brand className="d-flex flex-column">
            <Button variant="outline" onClick={() => setMenu(!showMenu)}>
              <FontAwesomeIcon icon={faBars} />
            </Button>
          </Navbar.Brand>
          <SGPBreadcrumb />
          <NavDropdown
            className="d-flex flex-row-reverse gap-2 align-items-center"
            title={
              <Container
                fluid
                className="d-flex flex-row px-0 align-items-center"
              >
                <Col
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: `#${color}`,
                    borderRadius: "50%",
                    height: "30px",
                    width: "30px",
                    zIndex: 5,
                  }}
                >
                  <h6
                    style={{
                      color: "white",
                      marginBottom: "0px",
                    }}
                  >
                    {userInitials.toUpperCase()}
                  </h6>
                </Col>
                <div className="d-flex bg-secondary vr mx-2" />
                Capacitacion
              </Container>
            }
            id="UserOpcion"
            align="end"
            style={{ maxHeight: "65px" }}
          >
            <NavDropdown.Header
              style={{ cursor: "default" }}
              className="d-flex justify-content-center align-items-center"
            >
              Usuario
            </NavDropdown.Header>
            <NavDropdown.Divider />
            <NavDropdown.Item href="" />
            <NavDropdown.Divider />
            <NavDropdown.Item href="">
              <FontAwesomeIcon
                icon={faArrowRightFromBracket}
                style={{ marginRight: "5px" }}
              />
              Cerrar sesión
            </NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>
    </>
  );
};

export default Appbar;
