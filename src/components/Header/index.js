import React from "react";
import { ReactComponent as IphoneX } from "../../assets/iPhoneX1.svg";
import { ReactComponent as VivaMelhor } from "../../assets/Vivamelhor.svg";
import { Container } from "./styles";

export default function Header(props) {
  const { children } = props;
  return (
    <Container>
      <div>
        <VivaMelhor />
        <h1>
          Chega de altos <br /> e baixos, seja constante.
        </h1>
        <label>estamos em fase de testes</label>
        {children}
        {/* <div className="be-constante">
          <span>seja Constante</span>
          <img src={SejaConstante} alt="seja constante" />
        </div> */}
      </div>
      <IphoneX className="image-iphone" />
    </Container>
  );
}
