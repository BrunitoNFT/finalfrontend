import React, { useState } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { toast } from "sonner";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleBlurName = () => {
    if (name.length < 5) {
      setNameError("El nombre debe tener al menos 5 caracteres");
    } else {
      setNameError("");
    }
  };

  const handleBlurEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Ingrese un email válido");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name.length < 5) {
      setNameError("El nombre debe tener al menos 5 caracteres");
      toast.error(
        "Error, rellena los campos correctamente. Nombre incorrecto."
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Ingrese un email válido");
      toast.error("Error, rellena los campos correctamente. Email incorrecto.");
    }

    if (name.length >= 5 && emailRegex.test(email)) {
      const formData = {
        name: name,
        email: email,
      };

      // Aquí puedes hacer lo que necesites con los datos, como enviarlos al servidor o mostrarlos por localhost
      console.log(formData);

      toast.success(
        "Gracias por confiar en nosotros, nos pondremos en contacto con usted."
      );
      setName("");
      setEmail("");
    }
  };

  return (
    <div className="w-full h-full  flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        style={{minWidth:"350px"}}
        className="w-1/3 h-96 shadow-xl border-gray-100 border rounded-md flex flex-col items-center justify-around p-4 hover:scale-95 transition-all duration-300 bg-white dark:bg-gray-300"
      >
        <h2 className="font-bold text-gray-400 text-2xl my-6 underline dark:text-black">
          Contactenos
        </h2>
        <TextField
          id="outlined-basic"
          label="Ingrese su nombre"
          variant="outlined"
          value={name}
          onChange={handleNameChange}
          onBlur={handleBlurName}
          error={nameError ? true : false}
          helperText={nameError}
        />
        <TextField
          id="outlined-basic"
          label="Ingrese su email"
          variant="outlined"
          value={email}
          onChange={handleEmailChange}
          onBlur={handleBlurEmail}
          error={emailError ? true : false}
          helperText={emailError}
        />
        <Button
          variant="outlined"
          type="submit"
          sx={{
            mt: 2,
            borderColor: "gray",
            color: "gray",
          }}
        >
          Outlined
        </Button>
      </form>
    </div>
  );
};

export default Contact;
