import React from "react";
import { ImSpinner } from "react-icons/im";
function Loading() {
  return (
    <div className="text-6xl text-green-400 flex items-center justify-center">
      <ImSpinner className="animate-spin" />
    </div>
  );
}
export default Loading;
