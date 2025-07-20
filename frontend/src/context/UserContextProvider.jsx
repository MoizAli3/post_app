import { Children, useState } from "react";
import UserContext from "./UserContext";
import Cookies from "js-cookie";
import axios from "axios";
import { baseURL } from "../costant/constant";
import { toast } from "react-toastify";

const UserContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(Cookies.get("token"));

  const handleLogoutUser = async () => {
    await axios
      .post(
        `${baseURL}v1/users/logout`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then(() => {
        toast.success("Successfully Logout");
        setIsLoggedIn(false);
      })
      .catch(function (error) {
        toast.error("Server Error");
        console.log(error.message);
      });
  };


  return (
    <UserContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, token, setToken, handleLogoutUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
