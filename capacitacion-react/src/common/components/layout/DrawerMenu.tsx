import React, { useState } from "react";
import { Accordion, Button, Card, Image } from "react-bootstrap";
import image from "assets/logo-enta(192x192).png";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DrawerMenuData, MODULES_DRAWER_DATA } from "common/constants";
import { useNavigate } from "react-router-dom";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

type Drawer = {
  show: boolean;
  handleClose: () => void;
};

const DrawerMenu: React.FC<Drawer> = ({ show, handleClose }) => {
  const navigate = useNavigate();

  let menuData = MODULES_DRAWER_DATA;
  const principalModules = ["modulo"];

  const [keyState, setKeyState] = useState<string[]>([]);

  const handleItemClick = (path: string, name: string) => {
    let mainMenu = principalModules.slice(0, 5);
    if (principalModules.includes(name)) {
      if (mainMenu.includes(name) && keyState.includes(name)) {
        setKeyState(keyState.filter((value) => value !== name));
      } else if (mainMenu.includes(name) && !keyState.includes(name)) {
        setKeyState([
          ...keyState.filter((value) => !mainMenu.includes(value)),
          name,
        ]);
      } else if (keyState.includes(name)) {
        setKeyState(keyState.filter((value) => value !== name));
      } else {
        setKeyState([...keyState, name]);
      }
    } else {
      navigate(path);
      handleClose();
    }
  };
  const handleItemClickDown = (path: string) => {
    if (path.length > 1) {
      //funcion que se implemento para navegar en nueva pestana si se presiona con la rueda del mouse
      // window.open(`${DEFAULT_API_URL}${path}`);
    }
  };
  const ItemMenu = ({
    text,
    to,
    name,
    isMain,
    children,
    index,
    icon,
    marginLeft = 0,
  }: {
    text: string;
    to: string;
    name: string;
    isMain: boolean;
    children: DrawerMenuData[];
    index: number;
    icon?: IconDefinition;
    marginLeft: number;
  }) => {
    return (
      <Card
        color="textDark"
        className="py-0 my-0"
        style={{
          marginLeft: marginLeft,
          fontWeight: "bold",
          borderWidth: isMain ? "1px" : "0px",
          cursor: "pointer",
          paddingTop: "5px",
          paddingBottom: "5px",
        }}
        key={index}
      >
        <Card.Header className="py-0" style={{ border: isMain ? "" : "none" }}>
          <Button
            className="btn bg-transparent text-dark w-100 px-0 text-start d-flex flex-row"
            variant="transparent"
            aria-controls="example-collapse-text"
            aria-expanded={keyState.includes(name)}
            onClick={() => handleItemClick(to, name)}
            onMouseDown={(event) => {
              if (event.button === 1) handleItemClickDown(to);
            }}
          >
            {icon ? (
              <FontAwesomeIcon
                icon={icon}
                style={{
                  marginRight: "20px",
                  alignSelf: "center",
                  width: "18px",
                }}
              />
            ) : (
              ""
            )}
            {isMain ? (
              <h4 className="d-flex mb-0" style={{ fontSize: "18px" }}>
                {text}
              </h4>
            ) : (
              <h5 className="d-flex mb-0" style={{ fontSize: "15px" }}>
                {text}
              </h5>
            )}
          </Button>
        </Card.Header>
        <Accordion.Collapse
          eventKey={name}
          className="p-0"
          id="example-collapse-text"
          timeout={250}
        >
          <div id="example-collapse-text">
            <Card.Body
              className="d-flex p-0 m-0 container flex-column"
              style={{ backgroundColor: "#f8f9fa" }}
            >
              {children &&
                children.length > 0 &&
                children.map((item: DrawerMenuData, indexChildren: number) => {
                  return item.children && item.children.length ? (
                    <ItemMenu
                      text={item.text}
                      name={item.name}
                      isMain={false}
                      children={item.children}
                      index={indexChildren}
                      to={item.to}
                      marginLeft={39 + marginLeft}
                    />
                  ) : (
                    <Button
                      className="btn bg-transparent collapsed text-dark w-100 py-0"
                      variant="transparent"
                      onClick={() => handleItemClick(item.to, item.name)}
                      onMouseDown={(event) => {
                        if (event.button === 1) handleItemClickDown(item.to);
                      }}
                    >
                      <p
                        className="d-flex py-0 my-0"
                        style={{
                          paddingLeft: `calc(1rem + 1rem + 18.35px)`,
                          fontSize: "12px",
                        }}
                      >
                        {item.text}
                      </p>
                    </Button>
                  );
                })}
            </Card.Body>
          </div>
        </Accordion.Collapse>
      </Card>
    );
  };

  return (
    <Offcanvas show={show} onHide={handleClose} style={{ width: "300px" }}>
      <Offcanvas.Header className="justify-content-center align-items-center">
        <Offcanvas.Title className="d-flex gap-3">
          <Image
            src={image}
            fluid
            style={{
              borderStyle: "none",
              alignSelf: "center",
              maxHeight: "28px",
              maxWidth: "28px",
            }}
          />
          Enta React
        </Offcanvas.Title>
      </Offcanvas.Header>
      <div className="bg-secondary" style={{ height: "1px" }} />
      <Offcanvas.Body className="d-flex flex-column p-0 m-0 justify-content-between">
        <Accordion
          className="h-100 overflow-auto py-0"
          flush
          activeKey={keyState}
        >
          {menuData.map(({ text, to, name, children, icon }, index) => {
            return (
              <ItemMenu
                key={index}
                text={text}
                to={to}
                name={name}
                icon={icon}
                isMain={true}
                children={children}
                index={index}
                marginLeft={0}
              />
            );
          })}
        </Accordion>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default DrawerMenu;
