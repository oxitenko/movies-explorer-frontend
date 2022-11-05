const moviesFilters = (movies, value, shotrMovies) => {
  const filterShortMovies = (item) => {
    return item.duration <= 40;
  };

  const filterMoviesByName = (item) => {
    return JSON.stringify(item.nameRU)
      .toLowerCase()
      .includes(value.toLowerCase());
  };

  if (shotrMovies) {
    return movies.filter(filterShortMovies).filter(filterMoviesByName);
  } else {
    return movies.filter(filterMoviesByName);
  }
};

export default moviesFilters;
