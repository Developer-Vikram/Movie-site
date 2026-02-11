import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const Layout = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black text-gray-900 dark:text-white transition-colors">
      <Header onSearch={setSearch} />
      <Outlet context={{ search }} />
    </div>
  );
};

export default Layout;
