import React from "react";

import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";
import { TbWorldWww } from "react-icons/tb";
import { MdOutlineWorkOutline } from "react-icons/md";

const DentistSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col bg-white dark:bg-gray-300 hover:scale-95 transition-all duration-500 rounded-xl overflow-hidden border-2">
      <div className="  flex gap-2 justify-center shadow-xl p-4 max-sm:flex-col">
        <img
          src="/doctor.jpg"
          alt=""
          className="w-60 h-60  mb-2 rounded-md"
        />
        <div>
          <div className="font-bold text-2xl w-32 h-6 bg-slate-400  rounded-sm"></div>
          <div className="font-bold text-2xl w-26 h-3 bg-slate-400 rounded-sm mt-2"></div>

          <p className="flex items-center mt-4 ">
            <AiOutlinePhone className="mr-2" size={25} color="gray" />
            <div className="font-bold text-2xl w-20 h-4 bg-slate-400 rounded-sm"></div>
          </p>
          <p className="flex items-center mt-2">
            <AiOutlineMail className="mr-2" size={25} color="gray" />
            <div className="font-bold text-2xl w-20 h-4 bg-slate-400 rounded-sm"></div>
          </p>
          <p className="flex items-center mt-2">
            <SlLocationPin className="mr-2" size={25} color="gray" />
            <div className="font-bold text-2xl w-20 h-4 bg-slate-400 rounded-sm"></div>
          </p>
          <p className="flex items-center mt-2">
            <TbWorldWww className="mr-2" size={25} color="gray" />
            <div className="font-bold text-2xl w-20 h-4 bg-slate-400 rounded-sm"></div>
          </p>
          <p className="flex items-center mt-2 ">
            <MdOutlineWorkOutline className="mr-2" size={25} color="gray" />
            <div className="font-bold text-2xl w-20 h-4 bg-slate-400 rounded-sm"></div>
          </p>
        </div>
      </div>
      <button className="w-full h-10 bg-blue-500 text-white flex justify-center items-center"></button>
    </div>
  );
};

export default DentistSkeleton;
