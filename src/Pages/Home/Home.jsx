import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../Components/Card/Card";

const Home = () => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState(() => {
    const localToken = localStorage.getItem("token") || "";
    return JSON.parse(localToken);
  });

  useEffect(() => {
    axios
      .get("https://kenziehub.me/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setUser(response.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      <h1>Olá, {user.name}!</h1>
      <Card user={user} />
    </div>
  );
};

export default Home;
