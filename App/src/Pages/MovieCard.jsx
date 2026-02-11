import { useLoaderData, useOutletContext } from "react-router-dom";
import Card from "../components/Card";

const MovieCard = () => {
  const { search } = useOutletContext();
  const moviesData = useLoaderData();
  const movies = moviesData?.data || [];

  const filteredMovies = movies.filter((m) =>
    m.original_title
      ?.toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 p-10">
      {filteredMovies.map((movie) => (
        <Card key={movie.id} curMovie={movie} />
      ))}
    </ul>
  );
};

export default MovieCard;
