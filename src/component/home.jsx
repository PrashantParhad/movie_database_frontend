import React, { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CommonBox from './commonBox';
import { connect } from "react-redux";

const Search = styled.div`
text-align: center;
color:white;
}`;

function Home(props) {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/v1/movies/getMovieList').then((response) => {
      const { data } = response;
      setMovieList(data);
    }).catch((error) => console.log(error));
  }, []);

  const onMovieBoxClickHandler = (movie) => {
    props.history.push(`/details/${movie.id}`)
  }

  if (movieList == null) return;
  return (
    <Fragment>
    <Search>
      <div>
        {
          movieList.map(item => {
            return <CommonBox movie={item} key={item.id} onMovieBoxClickHandler={onMovieBoxClickHandler}></CommonBox>
          })
        }
      </div>
    </Search></Fragment>
  );
}

const mapStateToProps = ({ search }) => {
  if (search) {
    return {
      moviesList: search.movies
    }
  }
}

export default connect(mapStateToProps)(Home);