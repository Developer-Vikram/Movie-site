import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import Card from "../components/Card";

const MovieCard = () => {
  
  const moviesData = useLoaderData();

  
  const movies = moviesData?.data || [];

  const [search, setSearch] = useState("");


  const filteredMovies = movies.filter((m) =>
    m.original_title
      ?.toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
      <Header onSearch={setSearch} />

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 p-10">
        {filteredMovies.map((curMovie) => (
          <Card key={curMovie.id} curMovie={curMovie} />
        ))}
      </ul>
    </>
  );
};

export default MovieCard;
