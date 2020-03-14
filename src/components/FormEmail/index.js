import React, { useState } from "react";
import { toast, Zoom } from "react-toastify";
import { Form } from "./styles";

export default function FormEmail(props) {
  const { backgroundInput, title } = props;

  toast.configure({ transition: Zoom, closeButton: false });
  const [email, setEmail] = useState("");

  const handleEmail = e => {
    e.preventDefault();

    if (email) {
      toast("Parabéns! \n\nVocê será um dos primeiros a testar o constante!", {
        position: "top-center"
      });
    } else {
      toast.error("Ops! \n\nOcorreu um erro...", {
        position: "top-center"
      });
    }
  };
  return (
    <Form background={backgroundInput} onSubmit={handleEmail}>
      <input
        type="email"
        placeholder="Digite seu e-mail"
        onChange={email => setEmail(email.target.value)}
      />
      <button>{title}</button>
    </Form>
  );
}
