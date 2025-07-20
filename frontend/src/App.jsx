import "./App.css";
import Layout from "./Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgetPass from "./pages/ForgetPass";
import VerifyForgetPass from "./pages/VerifyForgetPass";
import { useContext } from "react";
import UserContext from "./context/UserContext";
import Cookies from "js-cookie";
import { useEffect } from "react";
// import { baseURL } from "../costant/constant";
// import axios from "axios";

function App() {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const token = Cookies.get("token");

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [token, setIsLoggedIn]);

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
