import React from "react";
import { Container } from "./styles";

export default function Hero(props) {
  const { children } = props;
  return <Container>{children}</Container>;
}
