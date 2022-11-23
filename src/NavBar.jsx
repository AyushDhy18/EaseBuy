import React from "react";
import { FcHome } from "react-icons/fc";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link } from "react-router-dom";
import WithUser from "./WithUser";

const NavBar = ({ cartItems, user, setUser }) => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(undefined);
  };
  return (
    <div className="py-3 px-7 flex justify-between">
      <img
        className="w-36 h-14 ml-4 border border-yellow-700 rounded-md"
        src="https://i.ibb.co/c8mNgCj/Screenshot-76.png"
      />
      <Link to={"/"}>
        <FcHome className="text-4xl mx-2" />
      </Link>

      <div className="flex items-start">
        {user && (
          <button
            className="rounded-lg border-1 bg-red-500 px-6 py-1 text-white font-bold mt-7 shadow-lg border-white"
            onClick={handleLogout}
          >
            Logout
          </button>
        )}
        {!user && (
          <>
            <Link
              className="bg-blue-300 px-3 py-1 border-2 rounded-md border-white shadow-lg"
              to="/My-Account/Login"
            >
              Login
            </Link>

            <Link
              className="bg-blue-300 px-3 py-1 mx-2  border-2 rounded-md border-white shadow-lg"
              to="/My-Account/SignUp"
            >
              SignUp
            </Link>
          </>
        )}

        <div className="flex flex-col items-center">
          <Link to="/products/cart">
            <MdOutlineShoppingBag className="text-5xl text-blue-800" />
          </Link>
          <span className="text-red-600 font-extrabold -my-8">{cartItems}</span>
        </div>
      </div>
    </div>
  );
};
export default WithUser(NavBar);
