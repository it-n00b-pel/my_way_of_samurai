import React from "react";
import p from "./MyPosts.module.css"
import Post from "./Posts/Post";

import {PostsType} from "../../../App";




type MyPostsType = {
   post : Array<PostsType>
    addPost: (somePost: string) => void
}

function MyPosts( props : MyPostsType) {

    let postsElement = props.post.map( props =>    <Post message={props.message} likeCount = {props.likesCount}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        const text = newPostElement.current!.value
      props.addPost(text)
        newPostElement.current!.value = ""
    }

    return (
        <div className={p.post_block}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea  ref={newPostElement} > </textarea></div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={p.posts}>
                {postsElement}
               {/* <Post message={posts[0].message } likeCount = {posts[0].likesCount}/>
                <Post message={posts[1].message } likeCount = {posts[1].likesCount}/>*/}

            </div>
        </div>
    )
}

export default MyPosts