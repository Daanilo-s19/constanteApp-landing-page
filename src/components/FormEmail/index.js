import React from "react";
import { Form } from "./styles";

export default function FormEmail(props) {
  const { backgroundInput, title } = props;
  return (
    <Form background={backgroundInput}>
      <input type="email" placeholder="Digite seu e-mail" />
      <button>{title}</button>
    </Form>
  );
}
