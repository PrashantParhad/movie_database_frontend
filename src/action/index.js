import axios from "axios";

export const getMovies = (keyword) => {
    return (dispatch) => {
        const url = "http://localhost:8080/v1/search/title/" + keyword;
        axios.get(url).then((response) => {
            const { data } = response;
            dispatch(storeData(data));
        }).catch((error) => console.log(error));
    }
}

function storeData(response) {
    return { type: "GET_MOVIE", value: response };
}