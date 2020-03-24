import React, { useState } from "react";
import { Dropdown } from "semantic-ui-react";
import { Large } from "../../utils/styles";
import Media from "react-media";
import { NavBar, Menu } from "./styles.js";
import { ReactComponent as LogoConstante } from "../../assets/logoconstante.svg.svg";
import { ReactComponent as MenuNavigation } from "../../assets/menu.svg";

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
      <div>
        <LogoConstante href="#" />
        <Media queries={{ large: { maxWidth: Large } }}>
          {matches =>
            matches.large ? (
              <Dropdown
                item
                floating
                labeled
                button
                icon={null}
                text={<MenuNavigation />}
                className="dropdown-style"
              >
                <Dropdown.Menu direction="right">
                  <Dropdown.Item href="#" className="dropdown-item-style">
                    <span>Objetivo</span>
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#beneficios"
                    className="dropdown-item-style"
                  >
                    <span>Benefícios</span>
                  </Dropdown.Item>
                  <Dropdown.Item href="#sobre" className="dropdown-item-style">
                    <span> Baixar app</span>
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#"
                    title="Em breve"
                    className="dropdown-item-style"
                  >
                    <span>Acessar Blog</span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <Menu>
                <a href="#">
                  <li
                    onClick={() => setItem("Objetivo")}
                    className={item === "Objetivo" ? "clickMenu" : null}
                  >
                    Objetivo
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
                    onClick={() => setItem("Baixar app")}
                    className={item === "Baixar app" ? "clickMenu" : null}
                  >
                    Baixar app
                  </li>
                </a>
                <a href="#" title="Em breve" className="blog">
                  <li
                    onClick={() => setItem("Acessar Blog")}
                    className={item === "Acessar Blog" ? "clickMenu" : null}
                  >
                    Acessar Blog
                  </li>
                </a>
              </Menu>
            )
          }
        </Media>
      </div>
    </NavBar>
  );
}
