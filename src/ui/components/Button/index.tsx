import React from "react";
import { Container } from "./styled";

interface Props {
  label: string;
  onClick?: () => void;
}

const Button = (props: Props) => {
  const { label, onClick } = props;
  return <Container onClick={onClick}>{label}</Container>;
};

export default Button;
