import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import axios from "axios";

import { Button, TextField } from "@material-ui/core";

const RegisterPerson = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    name: yup.string().required("Campo obrigatório"),
    bio: yup.string().required("Campo obrigatório"),
    course_module: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
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
      .post("https://kenziehub.me/users", data)
      .then((response) => {
        reset();
        history.push("/");
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
          error={!!errors.email} //Isso não é a negação da negação. Isso é um ternário simplificado.
          helperText={errors.email?.message}
        />
      </div>
      <div>
        <TextField
          margin="normal"
          variant="outlined"
          label="Nome"
          name="name"
          size="small"
          color="primary"
          inputRef={register}
          error={!!errors.name} //Isso não é a negação da negação. Isso é um ternário simplificado.
          helperText={errors.name?.message}
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
          error={!!errors.password} //Isso não é a negação da negação. Isso é um ternário simplificado.
          helperText={errors.password?.message}
        />
      </div>
      <div>
        <TextField
          margin="normal"
          variant="outlined"
          label="Bio"
          name="bio"
          size="small"
          color="primary"
          inputRef={register}
          error={!!errors.bio} //Isso não é a negação da negação. Isso é um ternário simplificado.
          helperText={errors.bio?.message}
        />
      </div>
      <div>
        <TextField
          margin="normal"
          variant="outlined"
          label="Contato"
          name="contact"
          size="small"
          color="primary"
          inputRef={register}
          error={!!errors.contact} //Isso não é a negação da negação. Isso é um ternário simplificado.
          helperText={errors.contact?.message}
        />
      </div>
      <div>
        <TextField
          margin="normal"
          variant="outlined"
          label="Módulo do curso"
          name="course_module"
          size="small"
          color="primary"
          inputRef={register}
          error={!!errors.course_module} //Isso não é a negação da negação. Isso é um ternário simplificado.
          helperText={errors.course_module?.message}
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
export default RegisterPerson;
