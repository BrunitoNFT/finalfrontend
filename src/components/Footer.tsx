import React from "react";

const Footer: React.FC = () => {
  return (
    <>
      <div className="w-full h-10"></div>
      <footer className="w-full h-10 bg-gray-300 fixed bottom-0 opacity-50 flex justify-center items-center dark:bg-gray-100">
        <img src="../../public/images/DH.png" alt="DH" className="w-80" />
      </footer>
    </>
  );
};

export default Footer;
