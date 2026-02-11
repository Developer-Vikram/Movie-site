// "import Header from "../components/Header";
// import { useLoaderData, useParams } from "react-router-dom";

// const AnimeDetails = () => {
//   const params = useParams();
//   const animeData = useLoaderData();

//   const { backdrop_path, original_title, overview } = animeData;

//   return (
//     <>
//       <Header />

//       <div className="flex gap-10 p-10">
//         <div className="h-64 w-56">
//           <img
//             src={backdrop_path}
//             alt={original_title}
//             className="h-full w-full rounded-lg"
//           />
//         </div>

//         <div>
//           <h1 className="text-3xl font-bold">{original_title}</h1>
//           <p className="mt-4">{overview}</p>
//           <p className="mt-4 text-gray-500">
//             Anime ID: {params.animeID}
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AnimeDetails;
// " 
// "import React from 'react'
// import Header from '../components/Header'
// import { useLoaderData } from 'react-router-dom'
// import Card from '../components/Card';

// const MovieCard = () => {
//   const moviesData = useLoaderData();

//   return (
//     <>
//       <Header />

//       <ul className="grid grid-cols-4 gap-10">
//         {moviesData?.data?.map((curMovie) => (
//           <Card
//             key={curMovie.id}
//             curMovie={curMovie}
//           />
//         ))}
//       </ul>
//     </>
//   );
// };

// export default MovieCard;
// " 
// "import { NavLink } from "react-router-dom";

// const Card = ({ curMovie }) => {
//   if (!curMovie) return null;

//   const { backdrop_path, id, original_title } = curMovie;

//   return (
//     <li>
//       <div>
//         <div className="w-56 h-64">
//           <img
//             src={backdrop_path}
//             alt="movie poster"
//             className="h-full w-full rounded-lg"
//           />
//         </div>

//         <h2>{original_title}</h2>

//         <NavLink to={`/movie/${id}`}>
//           <button className="bg-red-400 px-8 py-3 rounded-xl">
//             Know More
//           </button>
//         </NavLink>
//       </div>
//     </li>
//   );
// };

// export default Card;
// "
// "import React from 'react'

// const GetMovieData = async () => {
//     try {
//         const response = await fetch(
//             " https://jsonfakery.com/movies/paginated"
//         );
//         const data = await response.json();
//         // console.log(data);
        
//         return data;
//     } catch (error) {
//         console.log(error);
//     }
// };

// export const getSingleAnime = async ({ params }) => {
//   const res = await fetch(
//     `https://jsonfakery.com/movies/paginated/${params.animeID}`
//   );
//   return res.json();
// };

// export default GetMovieData" 