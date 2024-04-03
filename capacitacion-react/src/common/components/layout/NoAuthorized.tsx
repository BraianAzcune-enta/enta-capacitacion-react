import React, { ReactElement } from "react";
import { Alert, Container } from "react-bootstrap";

const NoAuthorized: React.FC = (): ReactElement => {
  return (
    <Container
      fluid
      className={
        "flex-fill d-flex gap-2 flex-column align-items-center justify-content-start"
      }
    >
      <Alert variant="danger">No Autorizado</Alert>
    </Container>
  );
};

export default NoAuthorized;
