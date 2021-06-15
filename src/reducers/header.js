import axios from "axios";

const searchReducer = (state = { movies: [] }, action) => {
    switch (action.type) {
        case "GET_MOVIE":
            return {
                ...state,
                movies: action.value
            };
        default:
            return state;
    }
}

export default searchReducer;