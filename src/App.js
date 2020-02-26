import React from "react";
import MenuBar from "./components/Menu";
import Hero from "./components/Hero";
import Header from "./components/Header";
import FormEmail from "./components/FormEmail";
import Section from "./components/Section";
import Card from "./components/Card";
import Banner from "./components/Banner";
import ListItem from "./components/ListItem";
import Footer from "./components/Footer";
import { ReactComponent as NossoObjetivo } from "../src/assets/NossoObjetivo.svg";
import { ReactComponent as ImgObjetivo } from "./assets/banner1.svg";
import { ReactComponent as NewsLetter } from "../src/assets/newsletter.svg";
import { ReactComponent as ImgNewsLetter } from "../src/assets/ImgNewsLetter.svg";
import icon from "./assets/Ellipse46.png";
function App() {
  return (
    <>
      <Hero>
        <MenuBar />
        <Header>
          <FormEmail />
        </Header>
      </Hero>
      <Section>
        <Card>
          <NossoObjetivo />
          <h2>
            É mudar a vida das pessoas
            <br /> através de bons hábitos
          </h2>
          <ImgObjetivo />
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
              title: "Hábitos constantes",
              subtitle:
                "Crie hábitos variados e recorrentes, sinta-se sempre motivado.",
              icon: icon
            },
            {
              title: "Hábitos constantes",
              subtitle:
                "Crie hábitos variados e recorrentes, sinta-se sempre motivado.",
              icon: icon
            }
          ]}
        />
        <Banner />
        <Card>
          <div>
            <NewsLetter />
            <h2>
              Fique por dentro do que estamos construindo <br /> e dicas para
              viver melhor.
            </h2>
            <FormEmail />
          </div>
          <ImgNewsLetter />
        </Card>
      </Section>
      <Footer />
    </>
  );
}

export default App;
