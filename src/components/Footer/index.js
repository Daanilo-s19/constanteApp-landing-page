import React from "react";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import { Container } from "./styles";
export default function Footer(props) {
  return (
    <Container id="contato">
      <Instagram data-aos="zoom-in-down" width="100%" />
      <span>Nosso contato</span>
      <a href="www.google.com">contato@constante.app</a>
      <div className="line-border"></div>
      <div>
        <span>© 2020 Constante. Todos os direitos reservados. </span>
      </div>
    </Container>
  );
}
