import { ADD_POST,DELETE_POST } from '../actions/actionTypes';

const initialState = {
    posts: [],
};



const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload],
            };
            case DELETE_POST:
                const updatedPosts = state.posts.filter((post) => post.id !== action.id);
                return {
                    ...state,
                    posts: updatedPosts
                };
        default:
            return state;
    }
};

export default postReducer;
