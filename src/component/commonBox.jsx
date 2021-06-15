import React from 'react';
import { FiStar, FiPlay } from 'react-icons/fi'
import styled from 'styled-components';

const MovieBlock = styled.div`
   background-color: #312f2fc9;
   display:inline-block;
   color:white;
   
   margin: 25px 30px;
   img {
    width: 200px;
    height:300px;
   }
   img:hover {
       cursor:pointer;
   }
   .block-text span{
        height:20px;
        display: block;
        margin: 10px 10px;
        padding: 2px 0px;
}
    }
   .block-text span:hover{
        cursor:pointer;
        background-color: black;
        
   }
`;
function CommonBox(props) {
    const { movie } = props;

    function onMovieBoxClickHandler(item){
        console.log("box",item)
        const {onMovieBoxClickHandler} = props;
        onMovieBoxClickHandler(item);
    }

    return (
        <MovieBlock>
            <div>
                <img style={{ width: "200px", height: "300px" }} src={movie.posterurl}  onClick = {() =>onMovieBoxClickHandler(movie)}></img>
                <div className='block-text'>
                    <span><FiStar style={{ color: "gold", fill: "gold" }}/>{movie.imdbRating}</span>
                    <span>{movie.title}</span>
                    <span><FiPlay />Trailer</span>
                </div>
            </div>
        </MovieBlock>
    );
}

export default CommonBox;