import React, { useState } from "react";
import "./addMovie.css";
import axios from 'axios';
import Modal from "../modal/Modal"

function AddMovie() {

    const [formData, setFormData] = useState({
        title: "",
        releaseDate: "",
        genres: [],
        posterurl: "",
        imdbRating: "",
        duration: "",
        actors: [],
        storyline: "",
        trailerUrl:""
    });

    const { title, releaseDate, genres, posterurl, imdbRating, duration, actors, storyline, trailerUrl } = formData;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const onSubmitForm = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8080/v1/movies/addMovie",
            formData
        ).then((response) => {
            const { data } = response;
            if(data.id) {
                setIsModalOpen(true);
            }
            onReset();
        }).catch((error) => {
            console.log(error);
        });
    }

    const changehandler = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }
    const changeActorhandler = (event) => {
        setFormData({
            ...formData,
            actors: [event.target.value]
        })
    }
    const changeGenrehandler = (event) => {
        setFormData({
            ...formData,
            genres: [event.target.value]
        })
    }

    const onReset = () => {
        setFormData({
            title: "",
            releaseDate: "",
            genres: [],
            posterurl: "",
            imdbRating: "",
            duration: "",
            actors: [],
            storyline: "",
            trailerUrl:""
        })
    }

    return (
        <div className="addForm">
            <form onSubmit={onSubmitForm}>
                <input value={title} name="title" placeholder="Title" onChange={changehandler} /><br />
                <input value={releaseDate} name="releaseDate" type="date" placeholder="Release Date" onChange={changehandler} /><br />
                <select value={genres} name="genres" type="select" placeholder="genre" onChange={changeGenrehandler} >
                    <option>Comedy</option>
                    <option>Thriller</option>
                    <option>Action</option>
                </select>
                <br />
                <input value={posterurl} name="posterurl" placeholder="Poster Url" onChange={changehandler} /><br />
                <input value={trailerUrl} name="trailerUrl" placeholder="Trailer Url" onChange={changehandler} /><br />
                <input value={imdbRating} name="imdbRating" min="1" max="10" step="any" type="number" placeholder="imdbRating" onChange={changehandler} /><br />
                <input value={duration} name="duration" placeholder="Duration" onChange={changehandler} /><br />
                <input value={actors} name="actors" placeholder="Actors" onChange={changeActorhandler} /><br />
                <textarea value={storyline} name="storyline" placeholder="storyline" onChange={changehandler} /><br />
                <button>Submit</button>
                <button type="reset" onClick={onReset}>Reset</button>

            </form>
            <div>
                <Modal show={isModalOpen} closePopup={() => setIsModalOpen(false)}></Modal>
            </div>
        </div>
    );
}
export default AddMovie;