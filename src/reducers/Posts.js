import {

    FETCH_POSTS_START,
    FETCH_POSTS,
    FETCH_POSTS_ERROR

} from "../actions";


const initialState = {
    fetching: false,
    fetched: false,
    posts: [],
    error: null
}

export default function (state = initialState, action) {

    switch (action.type) {
        case FETCH_POSTS_START :
            return {
                ...state,
                fetching: true
            }
        case FETCH_POSTS :
            console.log(Object.keys(action.payload))
            console.log(action.payload)
            return {
                ...state,
                fetched: true,
                fetching: false,
                posts: action.payload
            }
        case FETCH_POSTS_ERROR :
            return {
                ...state,
                fetched: false,
                fetching: false,
                error: action.payload
            }
        default :
            return state;
    }
}
