import React from "react";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import { Container } from "./styles";
export default function Footer(props) {
  return (
    <Container data-aos="zoom-in-down">
      <Instagram />
      <span>Nosso contato</span>
      <a>contato@constante.app</a>
      <div>
        <span>© 2020 Constante. Todos os direitos reservados. </span>
      </div>
    </Container>
  );
}
