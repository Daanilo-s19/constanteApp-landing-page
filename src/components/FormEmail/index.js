import React from "react";
import { Form } from "./styles";

export default function FormEmail(props) {
  return (
    <Form>
      <input type="email" placeholder="Digite seu e-mail" />
      <button>Junte-se à versão beta</button>
    </Form>
  );
}
