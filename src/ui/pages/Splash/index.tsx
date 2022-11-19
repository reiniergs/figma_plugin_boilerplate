import React from "react";
import { Link } from "react-router-dom";
import useScreenSize from "hooks/useScreenSize";
import Button from "components/Button";
import { Container, Header } from "./styled";

const Splash = () => {
  useScreenSize({ width: 300, height: 400 });
  return (
    <Container>
      <Header>Hello!</Header>
      <Link to={`/another`}>navigate to another page</Link>
    </Container>
  );
};

export default Splash;
