import React from "react";
import { Container } from "./styles";

export default function Section(props) {
  const { children } = props;
  return (
    <Container
    //  data-aos="fade-up"
    >
      {children}
    </Container>
  );
}
