import fetch from 'node-fetch';

export const getMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getMovie = id => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_KEY}`
    ).then(res => res.json());
  };

  export const getGenres = () => {
    return fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.TMDB_KEY}&language=en-US`
    ).then(res => res.json())
    .then(json => json.genres);
  };

  export const getMovieReviews = id => {
    return fetch(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.TMDB_KEY}`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getActors = () => {
    return fetch(
      ` https://api.themoviedb.org/3/person/popular?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getnowplaying = () => {
    return fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getActor = person_id => {
    return fetch(
      `https://api.themoviedb.org/3/person/${person_id}?api_key=${process.env.TMDB_KEY}&language=en-US`
  
    )
      .then(res => res.json())
  
  };


  export const getUpcomingMovies=()=>{
    return fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
    )
    .then(res=>res.json())
    .then(json=>json.results);
  }


  export const getsimilarmovies = movie_id => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=${process.env.TMDB_KEY}`
    ).then(res => res.json());
  };