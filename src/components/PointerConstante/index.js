import React from "react";
import { Container } from "./styles";
import SejaConstante from "../../assets/sejaConstante.png";
// import { Container } from "semantic-ui-react";

export default function Pointer(props) {
  return (
    <Container>
      <span>seja Constante</span>
      <img src={SejaConstante} alt="seja constante" />
    </Container>
  );
}
