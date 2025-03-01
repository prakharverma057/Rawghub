import React from "react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genre } = useGenres();
  return genre.map((genre) => {
    return <div key={genre.id}>{genre.name}</div>;
  });
};

export default GenreList;
