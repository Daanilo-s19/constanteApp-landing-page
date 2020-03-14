import React, { useState } from "react";
import { NavBar, Menu } from "./styles.js";
import { ReactComponent as LogoConstante } from "../../assets/logoconstante.svg.svg";

const scrollActivated = {
  transition: "0.5s",
  background: "rgba(0, 154, 147, 0.85)",
  margin: "0",
  height: "60px"
};
export default function MenuBar(props) {
  const [item, setItem] = useState("");
  const [scroll, setScroll] = useState(false);

  window.addEventListener("scroll", () => {
    const windowTop = window.pageYOffset;
    // console.log(windowTop);
    setScroll(windowTop);
  });

  return (
    <NavBar data-aos="zoom-in" style={scroll > 523 ? scrollActivated : null}>
      <LogoConstante />
      <Menu>
        <a href="#">
          <li
            onClick={() => setItem("Início")}
            className={item === "Início" ? "clickMenu" : null}
          >
            Início
          </li>
        </a>
        <a href="#beneficios">
          <li
            onClick={() => setItem("Benefícios")}
            className={item === "Benefícios" ? "clickMenu" : null}
          >
            Benefícios
          </li>
        </a>
        <a href="#sobre">
          <li
            onClick={() => setItem("Sobre")}
            className={item === "Sobre" ? "clickMenu" : null}
          >
            Sobre
          </li>
        </a>
        <a href="#" title="Em breve">
          <li
            onClick={() => setItem("Blog")}
            className={item === "Blog" ? "clickMenu" : null}
          >
            Blog
          </li>
        </a>
        <a href="#contato">
          <li
            onClick={() => setItem("Contato")}
            className={item === "Contato" ? "clickMenu" : null}
          >
            Contato
          </li>
        </a>
      </Menu>
      <div style={{ width: "165px", height: "28px" }}></div>
    </NavBar>
  );
}
