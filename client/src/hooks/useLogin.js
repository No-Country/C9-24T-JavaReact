import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { authLogin } from "../services/login";

import { useSelector, useDispatch } from "react-redux";

import { createUser } from "../redux/action";

export function useLogin() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [login, setLogin] = useState({ email: "", password: "" });
  const [alertLogin, setAlertLogin] = useState(false);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   setAlertLogin(true);
  // }, [alert]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newLogin = { ...login, [name]: value };
    setLogin(newLogin);
  };

  const handleSubmit = () => {
    if (login.email === "" || login.passwords === "") {
      setAlertLogin(true);

      return;
    }
    setAlertLogin(false);

    authLogin(login)
      .then((data) => {
        // ME TRAE EL TOKEN Y EL ESTUDIANTE; SI ES ESTUDIANTE ME REDIRIGUE A HOME
        if (data.profile.rol === "ESTUDIANTE") {
          dispatch(
            createUser({
              jwt: data.jwt,
              isAuthenticated: true,
              profile: data.profile,
            })
          );
          console.log(data);
          navigate("/");
          setAlertLogin(false);
        }
      })
      .catch((error) => {
        setAlertLogin(true);

        console.log(error);
      });
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };

  return {
    login,
    alertLogin,
    showPassword,
    handleClickShowPassword,
    handleInputChange,
    handleSubmit,
  };
}
