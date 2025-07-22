import "./App.css";
import Layout from "./Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgetPass from "./pages/ForgetPass";
import VerifyForgetPass from "./pages/VerifyForgetPass";
import { useContext, useEffect } from "react";
import UserContext from "./context/UserContext";
import axios from "axios";
import { baseURL } from "./costant/constant";

function App() {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  useEffect(() => {
    axios
      .post(`${baseURL}v1/users/stay-login`, {}, { withCredentials: true })
      .then((response) => {
        if (response.status === 200) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      })
      .catch((error) => {
        console.error("Error during stay login:", error);
        setIsLoggedIn(false);
      });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Layout /> : <Login />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/login" element={isLoggedIn ? <Layout /> : <Login />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/signup" element={isLoggedIn ? <Layout /> : <SignUp />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/forget-pass" element={<ForgetPass />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/verify-forget-pass" element={<VerifyForgetPass />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
