import React from "react";
import celulares from "../../assets/Celulares.png";
import { ReactComponent as MudeDeVida } from "../../assets/mudeVida.svg";
import plataform from "../../assets/plataform.png";
import ios from "../../assets/ios.png";
import android from "../../assets/android.png";
import { Content } from "./styles";

export default function Banner(props) {
  const { children } = props;
  return (
    <Content>
      <img src={celulares} alt="celulares" />
      <MudeDeVida />
      <h2>Baixe agora nosso app</h2>
      <span>
        Viva melhor, transfome seus hábitos e faça seus dias mais
        <br />
        agrádaveis e produtivos. Não somos apenas um <br />
        aplicativo, e sim um estilo de vida.
      </span>
      <div className="plataforms">
        <img src={android} alt="android" /> <img src={ios} alt="ios" />
      </div>
    </Content>
  );
}
