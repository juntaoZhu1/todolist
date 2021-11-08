import React from "react";
import { Card } from "antd";

import styles from "./styles.less";

const MovieItem = ({movie}) => {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt={movie.Title} src={movie.Poster} />}
    >
      <Meta title={movie.Title}/>
    </Card>,
  );
};

export default MovieItem;
