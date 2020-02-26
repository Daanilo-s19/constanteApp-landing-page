import React from "react";
import { Content } from "./styles";
export default function Card(props) {
  const { children } = props;
  return <Content>{children}</Content>;
}
