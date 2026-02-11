import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MovieCard from "./Pages/MovieCard";
import AnimeDetails from "./Pages/AnimeDetails";
import GetMovieData from "./api/GetApiData";
import HomePage from "./Pages/HomePage";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "movie",
        element: <MovieCard />,
        loader: GetMovieData,
      },
      {
        path: "movie/:movie_ID",
        element: <AnimeDetails />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
