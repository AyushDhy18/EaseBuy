import React from "react";
import { RiLoader3Line } from "react-icons/ri";
const Loading = () => {
  return (
    <div className="h-full text-6xl text-green-400 flex items-center justify-center">
      <RiLoader3Line className="animate-spin" />
    </div>
  );
};
export default Loading;
