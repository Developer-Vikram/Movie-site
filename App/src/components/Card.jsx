import { useNavigate } from "react-router-dom";

const Card = ({ curMovie }) => {
  const navigate = useNavigate();

  if (!curMovie) return null;

  const { backdrop_path, movie_id, original_title } = curMovie;

  const saveMovieToLocalStorage = () => {
    // overwrite old data with new movie
    localStorage.setItem(
      "movies",
      JSON.stringify([curMovie])
    );
  };

  const handleClick = () => {
    saveMovieToLocalStorage();
    navigate(`/movie/${movie_id}`);
  };

  return (
    <li className="max-w-6xl mx-auto mt-5">
      <div className="flex flex-col text-center items-center gap-4">
        <div className="w-56 h-64">
          <img
            src={backdrop_path}
            alt={original_title}
            className="h-full w-full rounded-lg"
          />
        </div>

        <h2 className="font-bold text-2xl">{original_title}</h2>

        <button
          onClick={handleClick}
          className="bg-red-400 px-8 py-3 rounded-xl"
        >
          Know More
        </button>
      </div>
    </li>
  );
};

export default Card;
