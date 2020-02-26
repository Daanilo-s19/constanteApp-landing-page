import React from "react";
import { Container } from "./styles";
// import { Container } from "semantic-ui-react";

export default function Hero(props) {
  const { children } = props;
  return <Container>{children}</Container>;
}
