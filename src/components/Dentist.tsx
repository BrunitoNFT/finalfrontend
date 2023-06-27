import React from "react";

import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";
import { TbWorldWww } from "react-icons/tb";
import { MdOutlineWorkOutline } from "react-icons/md";

interface Props {
  name: string;
  username: string;
  phone: string;
  email: string;
  website: string;
  city: string;
  street: string;
  companyName: string;
}

const DentistIndividual: React.FC<Props> = ({
  name,
  username,
  phone,
  email,
  city,
  street,
  website,
  companyName,
}) => {
  return (
    <div className="flex flex-col bg-white dark:bg-gray-300 hover:scale-95 transition-all duration-500 rounded-xl overflow-hidden border-2">
      <div className="  flex gap-2 justify-center shadow-xl p-4 ">
        <img
          src="/images/doctor.jpg"
          alt=""
          className="w-60 h-60  mb-2 rounded-md"
        />
        <div>
          <h2 className="font-bold text-2xl text-gray-500 dark:text-black">
            {name}
          </h2>
          <p className="text-gray-400 dark:font-bold dark:text-black">
            {username}
          </p>
          <p className="flex items-center mt-4 dark:font-bold">
            <AiOutlinePhone className="mr-2 " size={25} color="gray" />
            {phone}
          </p>
          <p className="flex items-center mt-2 dark:font-bold">
            <AiOutlineMail className="mr-2" size={25} color="gray" />
            {email}
          </p>
          <p className="flex items-center mt-2 dark:font-bold">
            <SlLocationPin className="mr-2" size={25} color="gray" />
            {city}, {street}
          </p>
          <p className="flex items-center mt-2 dark:font-bold">
            <TbWorldWww className="mr-2" size={25} color="gray" />
            {website}
          </p>
          <p className="flex items-center mt-2 dark:font-bold">
            <MdOutlineWorkOutline className="mr-2" size={25} color="gray" />
            {companyName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DentistIndividual;
