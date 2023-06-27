import React, { useContext } from "react";

import { favoriteContext } from "../context/favorites";

import useFetch from "../hooks/useFetch";
import { dentists } from "../types";

import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const fakeArr: string[] = new Array(30).fill("");

const Favorites: React.FC = () => {
  const { dentists, loading } = useFetch();

  const { state, dispatch } = useContext(favoriteContext);

  console.log("FAV STATE: ", state);
  const { favorites } = state;

  const handleButtonClick = (id: string) => {
    console.log("handleButtonClick");
    dispatch({ type: "toggleFav", payload: id });
  };

  return (
    <main className="text-black w-full   flex flex-wrap gap-4 p-2  transition-all duration-500 justify-center   ">
      {loading &&
        fakeArr.map((_, index) => (
          <div
            key={index}
            className="w-52 h-96 bg-blue-100 rounded-md shadow-md animate-pulse p-4 dark:bg-blue-200  "
          >
            <div className="flex flex-col gap-2 bg-blue-200 w-full h-6 dark:bg-slate-400"></div>
            <div className="flex flex-col gap-2 bg-blue-200 w-1/2 h-2 mt-4 dark:bg-slate-400"></div>
            <div className="flex flex-col w-full h-3/4 justify-end  ">
              <div className="flex flex-col gap-2 bg-blue-200 w-full h-40 mt-4 dark:bg-slate-400"></div>
              <div className="flex flex-col gap-2 bg-blue-200 w-full h-10 mt-4 dark:bg-slate-400"></div>
            </div>
          </div>
        ))}
      {!loading &&
        dentists &&
        dentists.length > 0 &&
        dentists
          .filter((dentist: dentists) => {
            console.log("Dentist", dentists, "FAV:", favorites);
            return favorites.includes(String(dentist.id));
          })
          .map((dentist: dentists) => (
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
                <AiFillHeart />
              </button>
            </div>
          ))}
    </main>
  );
};

export default Favorites;
