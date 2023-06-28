import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

import { useLocation } from "react-router-dom";

const App: React.FC = () => {
  const location = useLocation();

  // Renderiza algo solo si estás en la ruta principal ("/")
  const renderOnlyOnHome = location.pathname === "/";

  return (
    <div className="dark:bg-gray-600 h-screen overflow-scroll w-full  ">
      <Header />
      {renderOnlyOnHome && (
        <div
          className="w-full h-full flex justify-center items-center  relative select-none  bg-cover bg-center "
          style={{
            backgroundImage: `url('/odontologos2.png')`,
          }}
        >
          <h2 className="text-center text-7xl  text-gray-800  mt-12 absolute font-extralight">
            Welcome to the final project | Frontend |||{" "}
          </h2>
        </div>
      )}
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
