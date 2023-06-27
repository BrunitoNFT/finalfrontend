import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

import DentistSkeleton from "../components/DentistSkeleton";
import IndividualDentist from "../components/Dentist";

const Dentist: React.FC = () => {
  const { id } = useParams();
  const { loading, dentist } = useFetch(Number(id));

  const renderDentist: () => JSX.Element | undefined = () => {
    if (dentist) {
      const { name, username, phone, email, address, website, company } =
        dentist;
      const { name: companyName } = company;
      const { city, street } = address;
      return (
        <IndividualDentist
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
    <main className="w-full h-screen flex justify-center items-center dark:bg-gray-600 transition-all duration-500">
      {loading && <DentistSkeleton />}
      {!loading && dentist && dentist.name && renderDentist()}
    </main>
  );
};

export default Dentist;
