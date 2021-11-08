import React from 'react';

import { List } from "antd";

import MovieItem from "./MovieItem";

const MovieList = ({ movies}) => (
  <List
    locale={{
      emptyText: "Empty"
    }}
    dataSource={movies}
    renderItem={movies => (
      <MovieItem
        movie={movie}
      />
    )}
    pagination={10}
  />
);

export default MovieList;

