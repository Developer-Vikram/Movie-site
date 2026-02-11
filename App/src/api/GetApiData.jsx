const GetMovieData = async () => {
  const res = await fetch(
    "https://jsonfakery.com/movies/paginated"
  );
  return res.json();
};

export default GetMovieData;
