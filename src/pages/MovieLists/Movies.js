import React, { PureComponent } from 'react';
import { Row, Col, Card, Radio, message } from "antd";
import { connect } from 'dva';

import AddMovieForm from "./components/AddMovieForm";
import MovieList from "./components/movieList";


@connect(({ movies }) => ({
  movielist: movies.movieList,
}))
class Movies extends PureComponent {

  componentDidMount() {
    this.fetchMovieItems();
  }

  fetchMovieItems = (filter = null) => {
    const { dispatch } = this.props;

    var payload = {};
    dispatch({
      type: 'movies/fetchMovieItems',
      payload: payload,
    });
  };

  handleformSubmit = (params) => {
    const { dispatch } = this.props;
    
    console.log("Title:", Title);
    // create the new item payload to be passed through dispatch action
    const payload = {
      // id: Math.round(Math.random() * 36 ** 12).toString(36),
      Title: params.Title,
      Poster: params.Poster,
    };

    console.log("payload:", payload);

    // dispatch actions to todos model
    dispatch({
      type: 'movies/addMovieItem',
      payload,
      callback: (result) => {
        this.fetchMovieItems();
        console.log("addMovieItem result:", result);
        message.success(`New Movie Item added: ${Title}`);
      },
    });
  };


  render() {
    const { movieList } = this.props;

    console.log("movielist", movielist);

    return (
      <Row type="flex" justify="center" align="middle">
        <Col
          xs={{ span: 23 }}
          sm={{ span: 23 }}
          md={{ span: 21 }}
          lg={{ span: 20 }}
          xl={{ span: 18 }}
        >
          <AddMovieForm onFormSubmit={this.handleformSubmit} />

          <Card title="Movie List" extra={ cardExtra }>
            <TodoList
              movies={movielist}
            />
          </Card>
        </Col>
      </Row>
    );
  }
};

export default ToDos;
