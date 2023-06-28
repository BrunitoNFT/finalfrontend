import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

import DentistSkeleton from "../components/DentistSkeleton";
import { IoIosArrowRoundBack } from "react-icons/io";

import { useNavigate } from "react-router-dom";

import { renderDentist } from "../utils/models";

const Dentist: React.FC = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const { loading, dentist } = useFetch(Number(id));

  return (
    <main className="w-full h-screen flex justify-center items-center dark:bg-gray-600 transition-all duration-500 ">
      <button
        className="absolute left-2 top-2 bg-gray-300 w-18 rounded-sm cursor-pointer hover:scale-95"
        onClick={() => navigate(-1)}
      >
        <IoIosArrowRoundBack size={45} />
      </button>
      {loading && <DentistSkeleton />}
      {!loading && dentist && dentist.name && renderDentist(dentist)}
    </main>
  );
};

export default Dentist;
