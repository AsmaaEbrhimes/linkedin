import {ADD_POST,DELETE_POST} from "../actions/actionTypes"


export const addPost = (postData) => ({
    type: ADD_POST,
    payload: postData,
  });



  export const RemovePost =(id) =>({
    type: DELETE_POST,
   id:id
  })