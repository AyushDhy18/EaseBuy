import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
function NavBar({ cartItems }) {
  return (
    <div className="py-3 px-7 flex justify-between">
      <img
        className="w-40 h-10 ml-4 border border-yellow-700 rounded-md"
        src="https://images.unsplash.com/photo-1605053755182-5748283aa375?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      />
      <div className="flex flex-col items-center">
        <MdOutlineShoppingCart className="text-5xl text-blue-800" />
        <span className="text-red-600 font-extrabold -my-14">{cartItems}</span>
      </div>
    </div>
  );
}
export default NavBar;
