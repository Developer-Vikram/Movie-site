import { useNavigate } from "react-router-dom";

const Card = ({ curMovie }) => {
  const navigate = useNavigate();
  if (!curMovie) return null;

  const { backdrop_path, movie_id, original_title } = curMovie;

  const handleClick = () => {
    localStorage.setItem("movies", JSON.stringify([curMovie]));
    navigate(`/movie/${movie_id}`);
  };

  return (
    <li className="group max-w-sm mx-auto ">
      <div className="rounded-2xl overflow-hidden bg-white dark:bg-gray-900 
  shadow-lg hover:shadow-2xl hover:shadow-red-500/40
  transition-all duration-300 hover:-translate-y-2">


        {/* Image */}
        <div className="relative h-72 overflow-hidden">
          <img
            src={backdrop_path}
            alt={original_title}
            className="h-full w-full object-cover 
              group-hover:scale-110 transition duration-500"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 
            bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-5 text-center space-y-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white 
            line-clamp-2">
            {original_title}
          </h2>

          <button
            onClick={handleClick}
            className="w-full bg-red-500 hover:bg-red-600 
              text-white py-3 rounded-xl font-semibold 
              transition duration-300"
          >
            Know More
          </button>
        </div>
      </div>
    </li>
  );
};

export default Card;
