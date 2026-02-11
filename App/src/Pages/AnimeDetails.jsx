import Header from "../components/Header";
import { useParams } from "react-router-dom";

const AnimeDetails = () => {
  const { movie_ID } = useParams();

  // get saved movies from localStorage
  const savedMovies =
    JSON.parse(localStorage.getItem("movies")) || [];
    console.log(savedMovies);
    

  const movie = savedMovies.find(
    (item) => item.movie_id === Number(movie_ID)
  );

  if (!movie) {
    return <p className="p-10">Movie not found</p>;
  }

  const {
    backdrop_path,
    original_title,
    overview,
    vote_count,
    release_date,
  } = movie;

  return (
    <>
      
<div className="min-h-screen flex items-center justify-center 
  bg-gradient-to-br from-gray-100 via-white to-gray-200 
  dark:from-black dark:via-gray-900 dark:to-black p-6">

  <div className="group w-[420px] rounded-3xl overflow-hidden
    bg-white dark:bg-gray-900
    shadow-xl dark:shadow-2xl
    hover:scale-105 transition-all duration-300">

    {/* Poster */}
    <div className="relative h-[320px] overflow-hidden">
      <img
        src={backdrop_path}
        alt={original_title}
        className="h-full w-full object-cover overflow-hidden group-hover:scale-110 transition duration-500"
      />

      {/* Overlay */}
      <div className="absolute inset-0 
        bg-gradient-to-t 
        from-white/80 via-white/20 to-transparent
        dark:from-black/80 dark:via-black/40" />

      {/* Vote Badge */}
      <span className="absolute top-4 right-4 
        bg-red-500 text-white text-sm px-4 py-1 rounded-full shadow-lg">
        ⭐ {vote_count}
      </span>
    </div>

    {/* Content */}
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-extrabold 
        text-gray-900 dark:text-white">
        {original_title}
      </h1>

      <p className="text-gray-700 dark:text-gray-300 
        text-base leading-relaxed line-clamp-4">
        {overview}
      </p>

      <div className="flex justify-between 
        text-gray-500 dark:text-gray-400 text-sm pt-2">
        <span>📅 {release_date}</span>
        <span>ID: {movie_ID}</span>
      </div>

      <button className="w-full mt-5 py-3 rounded-2xl 
        font-semibold text-lg
        bg-red-500 hover:bg-red-600
        text-white transition">
        Watch Details
      </button>
    </div>
  </div>
</div>
    </>
  );
};

export default AnimeDetails;
