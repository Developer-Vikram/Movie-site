import React from 'react'
import Header from '../components/Header'
import { useLoaderData } from 'react-router-dom'
import Card from '../components/Card';

const MovieCard = () => {
  const moviesData = useLoaderData();
  {console.log(moviesData)}

  return (
    <>
    

      <ul className="grid grid-cols-4 gap-4 mt-20">
        {moviesData?.data?.map((curMovie) => (
          <Card
            key={curMovie.id}
            curMovie={curMovie}
          />
        ))}
      </ul>
    </>
  );
};

export default MovieCard;