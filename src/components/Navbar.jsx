import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const { Logout, user } = useAuthContext();
  const navigate = useNavigate();

  const logoutHandler = () => {
    Logout();
    setTimeout(() => {
      navigate("/");
    }, 2000);
    toast.success("Logged Out!");
  };
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      {!user && (
        <div>
          <Link to="/login">
            <button className="text-white pr-4">Login</button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 text-white px-2 py-[2px] cursor-pointer rounded-sm">
              Signup
            </button>
          </Link>
        </div>
      )}
      {user && (
        <div>
          <Link to="/account">
            <button>Account</button>
          </Link>
          <button
            onClick={logoutHandler}
            className="bg-red-600 text-white px-4 py-1 ml-4 cursor-pointer rounded-sm"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
