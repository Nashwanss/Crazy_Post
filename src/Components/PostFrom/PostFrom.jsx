import { useState, useRef, useEffect } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { nanoid } from "nanoid";

import PostDisplay from "../PostDisplay/PostDisplay";

import "./PostFrom.css";

export default function Post() {
    const [posts, setPosts] = useState(
    () =>
      // al wazifeh al kasouleh
        JSON.parse(localStorage.getItem("posts")) || []
    );
  // console.log(posts[6].id)
  // console.log(posts[6].postTitle)

    function addNewPost(postTitleValue, postBodyValue) {
    const newPost = {
        id: nanoid(),
        postTitle: postTitleValue,
        postBody: postBodyValue,
        image: "",
    };
    setPosts((prevPosts) => [newPost, ...prevPosts]);
    }

    const titleInputRef = useRef();
    const bodyInputRef = useRef();

    function addPostHandler() {
    const postTitleElement = titleInputRef.current;
    const postTitleValue = titleInputRef.current.value;

    const postBodyElement = bodyInputRef.current;
    const postBodyValue = bodyInputRef.current.value;

    addNewPost(postTitleValue, postBodyValue);
    postTitleElement.value = null; // Clear the Title input field.
    postBodyElement.value = null; // Clear the Title input field.
    // console.log(`${postTitleValue} has been posted successfully`);
    // console.log(`${postBodyValue} has been posted successfully`);
    console.log(titleInputRef);
    console.log(bodyInputRef);
    console.log(postTitleValue);
    }

    useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
    }, [posts]);

    return (
    <>
        <div className="main-input-section">
        <div className="input-section">
            <input
            ref={titleInputRef}
            action="submit"
            className="post-title"
            type="text"
            name="postTitle"
            placeholder="Please insert the title here"
            />
            <input
            ref={bodyInputRef}
            className="post-body"
            type="text"
            name="postBody"
            placeholder="Please insert the post body here"
            />
        </div>
        <div className="img-and-btn-section">
            <div
            className="image-container"
            name="postImage"
            onClick={() => console.log("Upload the image")}
            >
            <AiOutlineCloudUpload size="3em" color="#4EC5D5" />
            </div>
            <button className="btn post-btn" onClick={addPostHandler}>
            POST
            </button>
        </div>
        </div>
        {posts.length > 0 ? (
        <PostDisplay
            posts={posts}
            titleInputRef={titleInputRef}
            setPosts={setPosts}
        />
        ) : (
        <div className="no-post">
            <h3>There isn't any post to display</h3>
        </div>
        )}
    </>
    );
    }
