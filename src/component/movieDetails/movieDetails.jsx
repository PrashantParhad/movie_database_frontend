import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import "./movieDetails.css"
import { FiStar } from 'react-icons/fi';
import { BiBookmarkPlus } from 'react-icons/bi';
import axios from 'axios';

const MovieDetails = (props) => {

    const [movieDetails, setMovieDetails] = useState("");
    const [trendingMoviesList, setTrendingMoviesList] = useState([]);

    const id = props.match.params.id;

    useEffect(() => {
        const url = "http://localhost:8080/v1/movies/getMovieList/" + id;
        axios.get(url).then((response) => {
            const { data } = response;
            setMovieDetails(data)
        }).catch((error) => console.log(error));

        const urlTrending = "http://localhost:8080/v1/search/trending";
        axios.get(urlTrending).then((response) => {
            const { data } = response;
            setTrendingMoviesList(data);
        }).catch((error) => console.log(error));
    }, []);

    if (!movieDetails) return null;
    return (
        <div className="detailsMain">
            <div className="block title">
                <span className="bookMark"><span><BiBookmarkPlus /></span>{movieDetails.title} <span>({movieDetails.year})</span></span>
                <span style={{ textAlign: "right" }}><span>< FiStar style={{ color: "gold", fill: "gold" }} /></span>{movieDetails.imdbRating}/10</span>
            </div>
            <div className="block duration">
                <span style={{ padding: "0px 8px", borderRight: "2px solid gray" }}>{movieDetails.duration}</span>
                <span>({movieDetails.year})</span>

                <span style={{ padding: "0px 8px" }}>{movieDetails.releaseDate}</span>
            </div>

            <div className="block" style={{ marginTop: "20px" }}>
                <img src={movieDetails.posterurl}></img>
                <ReactPlayer url={movieDetails.trailerUrl}
                    width="800px" height="360px"
                ></ReactPlayer>
            </div>
            <div className="block genres" >
                {movieDetails.genres.map(item => {
                    return <span >{item}</span>
                })
                }
            </div>
            <div className="summary">
                <div className="summary-sub"><span style={{ fontWeight: "bold" }}>Summary :</span>{movieDetails.storyline}</div>

                <div className="block summary-sub">
                    <span style={{ fontWeight: "bold" }}>Stars :</span>
                    <div style={{ display: "flex", padding: "0px 8px" }}>
                        {movieDetails.actors.map(item => {
                            return <span style={{ paddingRight: "5px" }}>{item}</span>
                        })
                        }
                    </div>
                </div>
            </div>
            <span style={{ textAlign: "left" }}>Trending</span>
            <div className="trending">
                {
                    trendingMoviesList.map(item => {
                        return <div className="box">
                            <img style={{ width: "170px", height: "250px" }} src={item.posterurl}></img>
                            <div><span>{item.title}</span></div>
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default MovieDetails;