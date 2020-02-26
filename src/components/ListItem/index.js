import React from "react";
import { Container, Item } from "./styles";

export default function ListItem(props) {
  const { item } = props;

  return (
    <Container>
      {item.map((information, index) => (
        <Item key={index}>
          <img src={information.icon} alt="icone" />
          <strong>{information.title}</strong>
          <span>{information.subtitle}</span>
        </Item>
      ))}
    </Container>
  );
}
