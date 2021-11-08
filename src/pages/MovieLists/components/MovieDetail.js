import React from "react";
import { Descriptions, Badge, useState } from 'antd';
@connect(({ movies }) => ({
  movielist: movies.movieList,
}))

const MovieDetail = ({movie}) => {
	const { match, movieDetails } = this.props;
	console.log("details:", movieDetails);
    const { Title, Paragraph } = Typography;
    const movie = movieDetails[match.params.id];
    return (
    	<Descriptions title="Movie Detail" bordered>
    		<Descriptions.Item label="Title">{movie.Title}</Descriptions.Item>
    		<Descriptions.Item label="Year">{movie.Year}</Descriptions.Item>
    		<Descriptions.Item label="Actors">{movie.Actors}</Descriptions.Item>
    		<Descriptions.Item label="Plot">{movie.Plot}</Descriptions.Item>
    	</Descriptions>
    );

};
