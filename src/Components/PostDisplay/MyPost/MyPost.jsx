import {AiOutlineCloudUpload} from 'react-icons/ai'

import './MyPost.css'


export default function MyPost({post , deletePostHandler , editPostHandler , updatedTitleInputRef , updatedBodyInputRef}) {
    return (
    <>
    <div className="post-display-container">
        <div className="post-display-section">
            <input
            ref={updatedTitleInputRef}
            className="post-title-display"
            type="text"
            name="postTitle"
            value={post.postTitle}
            />
            <input 
            ref={updatedBodyInputRef}
            className="post-body-display"
            type="text"
            name="postBody"
            value={post.postBody}
            />
        </div>
        <div className="image-btn-display">
            <div className="image-container">
            {post.image ?
            (<img src = { post.image } alt = 'upload'/> ):
            <AiOutlineCloudUpload size="3em" color="#4EC5D5"/>}
            </div>
            <button
            className="btn post-btn"
            onClick={editPostHandler}
            >
            EDIT
            </button>
            <button
            className="btn post-btn"
            onClick={deletePostHandler}
            >
            DELETE
            </button>
        </div>
        </div>
    
    </>
    )
}
