import React from "react";
import celulares from "../../assets/Celulares.png";
import { ReactComponent as MudeDeVida } from "../../assets/mudeVida.svg";
import ios from "../../assets/ios.png";
import android from "../../assets/android.png";
import { Content } from "./styles";

export default function Banner(props) {
  return (
    <Content
      data-aos="fade-in"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <img src={celulares} alt="celulares" />
      <MudeDeVida />
      <h2 data-aos="fade-in">Baixe agora nosso app</h2>
      <span data-aos="fade-in">
        Viva melhor, transfome seus hábitos e faça seus dias mais agrádaveis e
        produtivos. Não somos apenas um aplicativo, e sim um estilo de vida.
      </span>
      <div className="plataforms" data-aos="fade-up">
        <img src={android} alt="android" /> <img src={ios} alt="ios" />
      </div>
    </Content>
  );
}
