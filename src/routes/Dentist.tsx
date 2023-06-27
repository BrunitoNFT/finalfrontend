import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

import DentistSkeleton from "../components/DentistSkeleton";
import IndividualDentist from "../components/Dentist";
import { IoIosArrowRoundBack } from "react-icons/io";

import { useNavigate } from "react-router-dom";

const Dentist: React.FC = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const { loading, dentist } = useFetch(Number(id));

  const renderDentist: () => JSX.Element | undefined = () => {
    if (dentist) {
      const { name, username, phone, email, address, website, company, id } =
        dentist;
      const { name: companyName } = company;
      const { city, street } = address;
      return (
        <IndividualDentist
          id={id}
          name={name}
          username={username}
          phone={phone}
          email={email}
          city={city}
          street={street}
          website={website}
          companyName={companyName}
        />
      );
    }
  };

  return (
    <main className="w-full h-screen flex justify-center items-center dark:bg-gray-600 transition-all duration-500 ">
      <button
        className="absolute left-2 top-2 bg-gray-300 w-18 rounded-sm cursor-pointer hover:scale-95"
        onClick={() => navigate(-1)}
      >
        <IoIosArrowRoundBack size={45} />
      </button>
      {loading && <DentistSkeleton />}
      {!loading && dentist && dentist.name && renderDentist()}
    </main>
  );
};

export default Dentist;
