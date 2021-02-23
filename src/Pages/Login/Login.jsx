import Form from "../../Components/Form/Form";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();

  const goToRegister = () => {
    history.push("/Register");
  };

  return (
    <div>
      <h1>Faça seu Login</h1>
      <Form />
      <p>
        ou{" "}
        <Button onClick={goToRegister} color="primary">
          Registre-se
        </Button>
      </p>
    </div>
  );
};

export default Login;
