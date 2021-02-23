import RegisterPerson from "../../Components/RegisterPerson/RegisterPerson";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();

  const goToLogin = () => {
    history.push("/");
  };
  return (
    <div>
      <h2>Registre-se</h2>
      <RegisterPerson />
      <p>
        ou{" "}
        <Button onClick={goToLogin} color="primary">
          Faça Login
        </Button>
      </p>
    </div>
  );
};

export default Register;
