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
import icon from "./assets/Ellipse46.png";
function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <MenuBar />
      <Hero>
        <Header>
          <FormEmail title="Junte-se à versão beta" />
        </Header>
      </Hero>

      <Section>
        <Pointer />
        <Card>
          <NossoObjetivo width="100%" />
          <h2>
            É mudar a vida das pessoas
            <br /> através de bons hábitos
          </h2>
          <ImgObjetivo width="100%" />
        </Card>
        <ListItem
          item={[
            {
              title: "Hábitos constantes",
              subtitle:
                "Crie hábitos variados e recorrentes, sinta-se sempre motivado.",
              icon: icon
            },
            {
              title: "Relaxe sua mente",
              subtitle:
                "Fique com a mente tranquila durante o dia com resumos diários e lembretes antecipados.",
              icon: icon
            },
            {
              title: "Melhore todos os dia",
              subtitle:
                "Acompanhe os dias que você falhou e faça com que eles valham na próxima vez.",
              icon: icon
            }
          ]}
        />
        <Banner />
        <Card>
          <div>
            <NewsLetter width="100%" />
            <h2>
              Fique por dentro do que estamos construindo <br /> e dicas para
              viver melhor.
            </h2>
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
