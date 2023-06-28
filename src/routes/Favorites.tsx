import React, { useContext } from "react";

import { favoriteContext } from "../context/favorites";

import useFetch from "../hooks/useFetch";
import { dentists } from "../utils/types";

import DentistsSkeleton from "../components/DentistsSkeleton";
import DentistsCard from "../components/DentistsCard";

import { useNavigate } from "react-router-dom";

const fakeArr: string[] = new Array(30).fill("");

const Favorites: React.FC = () => {
  const navigate = useNavigate();

  const { dentists, loading } = useFetch();

  const { state, dispatch } = useContext(favoriteContext);
  const { favorites } = state;

  const handleButtonClick = (id: string) => {
    dispatch({ type: "toggleFav", payload: id });
  };
  return (
    <main className="text-black w-full h-full flex flex-wrap gap-4 p-2  transition-all duration-500 justify-center items-center ">
      {loading && fakeArr.map((_, index) => <DentistsSkeleton id={index} />)}
      {!loading &&
        dentists &&
        dentists.length > 0 &&
        dentists
          .filter((dentist: dentists) => {
            return favorites.includes(String(dentist.id));
          })
          .map((dentist: dentists) => (
            <DentistsCard
              key={dentist.id}
              dentist={dentist}
              handleButtonClick={handleButtonClick}
              favorites={favorites}
            />
          ))}
      {!loading && Array.isArray(dentists) && favorites.length === 0 && (
        <div className="flex flex-col items-center justify-center bg-white p-4 rounded-md shadow-xl dark:text-white">
          <h1 className="text-2xl font-bold text-gray-500 dark:text-black ">
            No favorite dentist :(
          </h1>
          <button
            className="bg-blue-300 text-white p-2 rounded-md mt-4 font-thin dark:bg-white dark:text-black hover:scale-95 shadow-inner border"
            onClick={() => navigate("/dentists")}
          >
            Add some dentists
          </button>
        </div>
      )}
    </main>
  );
};

export default Favorites;
