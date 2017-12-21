import {
    FETCH_POSTS, FETCH_POSTS_ERROR
} from "../actions";


 const initialState = {
    fetched: false,
    posts: [],
    error: null
}

export default function blogPosts (state = initialState, action) {

    switch (action.type) {
        case FETCH_POSTS :
            console.log(Object.keys(action.payload))
            console.log(action.payload)
            return {
                ...state,
                fetched: true,
                posts: action.payload
            }
        case FETCH_POSTS_ERROR :
            return {
                ...state,
                fetched: false,
                error: action.payload
            }
        default :
            return state;
    }
}

