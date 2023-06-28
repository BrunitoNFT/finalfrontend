import React, { useContext } from "react";

import { favoriteContext } from "../context/favorites";

import useFetch from "../hooks/useFetch";
import { dentists } from "../utils/types";

import DentistsSkeleton from "../components/DentistsSkeleton";
import DentistsCard from "../components/DentistsCard";

const fakeArr: string[] = new Array(30).fill("");

const Favorites: React.FC = () => {
  const { dentists, loading } = useFetch();

  const { state, dispatch } = useContext(favoriteContext);
  const { favorites } = state;

  const handleButtonClick = (id: string) => {
    dispatch({ type: "toggleFav", payload: id });
  };

  return (
    <main className="text-black w-full   flex flex-wrap gap-4 p-2  transition-all duration-500 justify-center   ">
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
    </main>
  );
};

export default Favorites;
