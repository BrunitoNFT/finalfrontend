import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="dark:bg-gray-600 h-screen overflow-scroll w-full  ">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
