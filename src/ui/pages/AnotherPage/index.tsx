import React from "react";
import { useNavigate } from "react-router-dom";
import useScreenSize from "hooks/useScreenSize";
import { Container, Header } from "./styled";
import Button from "components/Button";

const AnotherPage = () => {
  useScreenSize({ width: 400, height: 600 });
  const navigate = useNavigate();
  return (
    <Container>
      <Header>Another Page</Header>
      <Button label="Navigate back" onClick={() => navigate(-1)}></Button>
    </Container>
  );
};

export default AnotherPage;
