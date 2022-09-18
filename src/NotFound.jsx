import React from "react";
import { Link } from "react-router-dom";
import NotFoundImage from "./not_found_image.jpg";

function NotFound() {
  return (
    <div className="flex items-center justify-center flex-col">
      <img className="w-1/2 h-1/2" src={NotFoundImage} />
      <h1 className="text-3xl text-indigo-500">Page Not Found</h1>
      <h2 className=" text-gray-400">
        Probably error occured due to wrong url
      </h2>
      <Link
        className="bg-indigo-700 text-white border rounded-xl py-1 px-3"
        to={"/"}
      >
        GO HOME
      </Link>
    </div>
  );
}
export default NotFound;
