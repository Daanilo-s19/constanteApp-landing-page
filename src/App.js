import React, { useEffect } from "react";
import MenuBar from "./components/Menu";
import Hero from "./components/Hero";
import Header from "./components/Header";
import FormEmail from "./components/FormEmail";
import Section from "./components/Section";
import Card from "./components/Card";
import Banner from "./components/Banner";
import ListItem from "./components/ListItem";
import Footer from "./components/Footer";
import Pointer from "./components/PointerConstante";
import AOS from "aos";
import { ReactComponent as NossoObjetivo } from "../src/assets/NossoObjetivo.svg";
import { ReactComponent as ImgObjetivo } from "./assets/banner1.svg";
import { ReactComponent as NewsLetter } from "../src/assets/newsletter.svg";
import { ReactComponent as ImgNewsLetter } from "../src/assets/ImgNewsLetter.svg";
import habitoAssets from "./assets/habito.png";
import menteAssets from "./assets/mente.png";
import melhoreAssets from "./assets/melhore.png";
function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <MenuBar />
      <Hero>
        <Header id="header">
          <FormEmail title="Junte-se à versão beta" />
        </Header>
      </Hero>

      <Section>
        <Pointer />
        <Card>
          <NossoObjetivo width="100%" id="beneficios" />
          <p>É mudar a vida das pessoas através de bons hábitos</p>
          <ImgObjetivo width="100%" />
        </Card>
        <ListItem
          item={[
            {
              title: "Hábitos constantes",
              subtitle:
                "Crie hábitos variados e recorrentes, sinta-se sempre motivado.",
              icon: habitoAssets
            },
            {
              title: "Relaxe sua mente",
              subtitle:
                "Fique com a mente tranquila durante o dia com resumos diários e lembretes antecipados.",
              icon: menteAssets
            },
            {
              title: "Melhore todos os dia",
              subtitle:
                "Acompanhe os dias que você falhou e faça com que eles valham na próxima vez.",
              icon: melhoreAssets
            }
          ]}
        />
        <Banner />
        <Card>
          <div>
            <NewsLetter
              width="auto"
              style={{ marginBottom: "30px" }}
              preserveAspectRatio="xMinYMin meet"
            />
            <p>
              Fique por dentro do que estamos construindo <br /> e dicas para
              viver melhor.
            </p>
            <FormEmail backgroundInput={true} title="Inscreva-se" />
          </div>
          <ImgNewsLetter width="100%" />
        </Card>
      </Section>
      <Footer />
    </>
  );
}

export default App;
