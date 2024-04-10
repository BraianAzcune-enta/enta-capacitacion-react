import React, { ReactElement } from "react";
import { Offcanvas, Container } from "react-bootstrap";

type EntaDrawerType = {
  title: string;
  handleClose: () => void;
  showDrawer: boolean;
  children?: ReactElement;
  footer?: ReactElement;
  width?: number;
};

const EntaDrawer: React.FC<EntaDrawerType> = ({
  title,
  handleClose,
  showDrawer,
  footer,
  children,
  width,
}): React.ReactElement => {
  return (
    <Offcanvas
      show={showDrawer}
      onHide={handleClose}
      placement="end"
      enforceFocus={false}
      style={{ width: width ? `${width}%` : "30%" }}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>{title}</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="p-3 mx-0 d-flex container-fluid flex-column gap-3 justify-content-between">
        <Container
          fluid
          className="d-flex flex-fill p-0 overflow-auto justify-content-between flex-row"
        >
          {children && <>{children}</>}
        </Container>

        {footer && (
          <Container
            fluid
            className="d-flex flex-row justify-content-end mx-0 pr-3 gap-3"
          >
            {footer}
          </Container>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default EntaDrawer;
