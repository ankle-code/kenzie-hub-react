import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import axios from "axios";

import { Button, TextField } from "@material-ui/core";

const Form = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caracter especial!"
      )
      .required("Campo obrigatório"),
  });

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    console.log(data);
    axios
      .post("https://kenziehub.me/sessions", data)
      .then((response) => {
        localStorage.clear();
        localStorage.setItem("token", JSON.stringify(response.data.token));
        reset();
        history.push("/home");
      })
      .catch((e) => console.log(e));
  };

  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <div>
        <TextField
          margin="normal"
          variant="outlined"
          label="Email"
          name="email"
          size="small"
          color="primary"
          inputRef={register}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
      </div>

      <div>
        <TextField
          type="password"
          margin="normal"
          variant="outlined"
          label="Senha"
          name="password"
          size="small"
          color="primary"
          inputRef={register}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
      </div>
      <div>
        <Button type="submit" variant="contained" color="primary">
          Enviar
        </Button>
      </div>
    </form>
  );
};

export default Form;
