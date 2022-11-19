import styled from "styled-components";
import { typography } from "@theme";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.h1`
  ${typography("header1")}
`;
