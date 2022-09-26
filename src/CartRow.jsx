import React from "react";

function CartRow() {
  return (
    <>
      <div className="p-6 grid grid-flow-col items-center justify-between bg-blue-200 md:mx-52 border-2 shadow-lg shadow-blue-300 space-x-6">
        <img
          src="https://images.unsplash.com/photo-1577895202579-7280306572c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGklMjBwaG9uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="i phone"
          className="w-24 h-24"
        ></img>
        <h1 className="text-center font-bold">I-Phone 14 Pro Max</h1>
        <h2 className="text-center font-bold">$15</h2>
        <h2 className="text-center font-bold">2</h2>
        <h2 className="text-center font-bold">30</h2>
      </div>
    </>
  );
}

export default CartRow;