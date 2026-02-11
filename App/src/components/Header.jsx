import React, { useEffect, useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { MdDarkMode, MdLightMode, MdOutlineKeyboardArrowDown } from "react-icons/md";

const Header = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGenresOpen, setIsGenresOpen] = useState(false);

  const genres = [
    "Action",
    "Comedy",
    "Drama",
    "Thriller",
    "Horror",
    "Sci-Fi",
    "Romance",
    "Animation",
  ];

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Movies", to: "/movie" },
    { name: "TV Shows", to: "/tv-shows" },
    { name: "Trending", to: "/trending" },
    { name: "New Releases", to: "/new-releases" },
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme === "dark";
    setIsDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch?.(searchQuery);
  };

  return (
    <header className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-lg sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent"
          >
            CineHub
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="hover:text-red-500 transition font-medium"
              >
                {link.name}
              </Link>
            ))}

            {/* Genres */}
            <div className="relative">
              <button
                onClick={() => setIsGenresOpen(!isGenresOpen)}
                className="flex items-center gap-1 hover:text-red-500 font-medium"
              >
                Genres <MdOutlineKeyboardArrowDown />
              </button>

              {isGenresOpen && (
                <div className="absolute mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2">
                  {genres.map((g) => (
                    <Link
                      key={g}
                      to={`/genres/${g.toLowerCase()}`}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      {g}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Search */}
          <form
            onSubmit={handleSearch}
            className="hidden md:flex items-center bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg"
          >
            <input
              className="bg-transparent outline-none text-gray-900 dark:text-white"
              placeholder="Search movies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="ml-2" />
          </form>

          {/* Right */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
            >
              {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
            </button>

            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
