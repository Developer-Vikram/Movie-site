import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-black dark:text-white transition-colors duration-300">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
