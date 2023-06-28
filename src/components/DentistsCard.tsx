import React from "react";

import { dentists } from "../utils/types";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

interface Props {
  dentist: dentists;
  favorites: string[];
  handleButtonClick: (id: string) => void;
}

const DentistsCard: React.FC<Props> = ({
  dentist,
  favorites,
  handleButtonClick,
}) => {
  return (
    <div
      key={dentist.id}
      className="w-52 h-96 hover:scale-95 rounded-md p-4 flex flex-col  shadow-md justify-between dark:outline dark:outline-gray-800 bg-blue-100 dark:bg-blue-300 transition-all duration-500"
    >
      <Link
        to={"/dentists/" + String(dentist.id)}
        className="w-full h-full flex flex-col justify-between "
      >
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-2xl text-start text-gray-600  dark:text-black">
            {dentist.name}
          </h2>
          <p className="">{dentist.username}</p>
        </div>
        <div>
          <img
            src="/doctor.jpg"
            alt=""
            className="w-full h-40 object-cover mb-2 rounded-md dark:outline dark:outline-gray-800"
          />
        </div>
      </Link>
      <button
        onClick={() => handleButtonClick(String(dentist.id))}
        className="w-full h-10 hover:scale-105  bg-blue-300 text-white rounded-md flex items-center justify-center dark:bg-blue-800 transition-all duration-500 "
      >
        {favorites.includes(String(dentist.id)) ? (
          <AiFillHeart />
        ) : (
          <AiOutlineHeart />
        )}
      </button>
    </div>
  );
};

export default DentistsCard;
