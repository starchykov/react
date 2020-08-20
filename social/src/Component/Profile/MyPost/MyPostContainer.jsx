import React from 'react'
import {addPostActionCreator, onPostChangeActionCreator} from "../../redux/profileReducer";
import MyPost from "./MyPost";
import StoreContext from "../../../StoreContext";

const MyPostContainer = (props) => {

    return <StoreContext.Consumer>

        {(store) => {

            let state = store.getState();
            let newPostText = React.createRef();
            let addPost = () => {
                store.dispatch(addPostActionCreator())
            };
            let onPostChange = () => {
                let text = newPostText.current.value;
                store.dispatch(onPostChangeActionCreator(text))
            };

            return <MyPost onPostChange={onPostChange}
                           addPost={addPost}
                           newPostText={newPostText}
                           posts={state.profilePage}/>
        }}

    </StoreContext.Consumer>

};

export default MyPostContainer;
