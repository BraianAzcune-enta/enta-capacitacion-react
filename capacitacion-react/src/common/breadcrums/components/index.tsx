import { useAppSelector } from "store/hooks";
import { Link } from "react-router-dom";
import { Breadcrumb, Nav } from "react-bootstrap";

const SGPBreadcrumb = () => {
  const { nodes } = useAppSelector((state) => {
    return state.common.breadcrumb;
  });

  return (
    <Breadcrumb className="d-flex flex-grow-1 breadscrumb pt-3">
      <Nav.Link
        className="breadcrumb-item"
        href="/"
        color="textPrimary"
        style={{ fontWeight: "bold", fontSize: "14px" }}
      >
        Enta
      </Nav.Link>
      {nodes.map(({ text, url }, key) => {
        if (nodes.length === key + 1 || !url) {
          return (
            <Nav.Link
              key={key}
              className="breadcrumb-item"
              active
              color="textPrimary"
              style={{
                fontSize: "14px",
                cursor: "default",
                fontWeight: "bold",
              }}
            >
              {text}
            </Nav.Link>
          );
        } else {
          return (
            <Nav.Link
              key={key}
              as={Link}
              to={url ? url : ""}
              className="breadcrumb-item"
              style={{
                fontSize: "14px",
                cursor: url ? "pointer" : "default",
                textDecoration: url ? "underline blue" : "none",
                fontWeight: "bold",
                color: url ? "blue" : "textPrimary",
              }}
            >
              {text}
            </Nav.Link>
          );
        }
      })}
    </Breadcrumb>
  );
};

export default SGPBreadcrumb;
