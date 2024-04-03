import React from "react";
import { Container } from "react-bootstrap";
import { ErrorHandler } from "../errorHandler/ErrorHandler";
import Content from "./Content";
import Appbar from "common/components/layout/AppBar";

const MainContainer: React.FC = () => {
  return (
    <ErrorHandler>
      <Container
        fluid={true}
        className="d-flex flex-column vh-100 px-0 "
        style={{ backgroundColor: "#F2F3F4" }}
      >
        <Appbar />
        <Content />
      </Container>
    </ErrorHandler>
  );
};
export default MainContainer;
