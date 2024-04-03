import React, { ErrorInfo } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";

export class ErrorHandler extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("SGP unexpected error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container fluid={true} className={"h-100 d-flex"}>
          <Row className={"align-self-center w-100"}>
            <Col>
              <Alert variant={"danger"} dismissible>
                <Alert.Heading>Oops!, Algo salio mal!</Alert.Heading>
              </Alert>
            </Col>
          </Row>
        </Container>
      );
    }

    return this.props.children;
  }
}
