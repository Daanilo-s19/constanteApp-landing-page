import React from "react";
import { Content } from "./styles";
export default function Card(props) {
  const { children } = props;
  return (
    <Content
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="0"
      data-aos-offset="0"
    >
      {children}
    </Content>
  );
}
