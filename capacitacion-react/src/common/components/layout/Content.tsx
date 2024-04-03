import React from "react";
import { Route, Routes } from "react-router-dom";

const Content: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Bienvenido!!</h1>} />
    </Routes>
  );
};

export default Content;
