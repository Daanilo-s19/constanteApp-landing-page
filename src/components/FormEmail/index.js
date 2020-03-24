import React, { useState } from "react";
import api from "../../services/api";
import { toast, Zoom } from "react-toastify";
import { Form } from "./styles";

export default function FormEmail(props) {
  const { backgroundInput, title } = props;
  const [email, setEmail] = useState("");
  const [statusEmail, setStatusEmail] = useState(false);
  toast.configure({ transition: Zoom, closeButton: false });

  const handleEmail = async e => {
    e.preventDefault();

    if (email) {
      try {
        const response = await api.post("/emails", { email: email });
        console.log("deu bom", response);
        setStatusEmail(true);
      } catch (error) {
        toast.info("Ops! \n\nOcorreu um erro...", {
          position: "top-center"
        });
        console.error("deu merda", error);
      }
    }
  };
  return (
    <Form background={backgroundInput} onSubmit={handleEmail}>
      {statusEmail ? (
        <span>Inscrição feita com sucesso!</span>
      ) : (
        <>
          <input
            type="email"
            placeholder="Digite seu e-mail"
            onChange={email => setEmail(email.target.value)}
          />
          <button>{title}</button>
        </>
      )}
    </Form>
  );
}
