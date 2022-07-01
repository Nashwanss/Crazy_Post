import {useRef} from "react";


import MyPost from '../PostDisplay/MyPost/MyPost';


export default function PostSection ({posts , setPosts , titleInputRef }) {

function deletePostHandler () {
  setPosts(prevPosts => {
    return prevPosts.filter(selectedPost => selectedPost.id !== posts[0].id
      )
  })
  console.log(posts[0].id)
}


const updatedTitleInputRef = useRef();  
const updatedBodyInputRef = useRef();

  function editPostHandler () {
    const updatedTitleValue = updatedTitleInputRef.current.value;

    const updatedBodyValue = updatedBodyInputRef.current.value;

    const editedpost = {
      id: posts.id,
      postTitle: updatedTitleValue,
      postBody: updatedBodyValue,
      image: "",
    };
    setPosts((prevPosts) => {
      return [editedpost , ...prevPosts];
      });
    console.log(updatedTitleValue)
    console.log(updatedBodyValue)
    }
  


  return (
    <>
    {posts.map((post) => (
      <MyPost 
      key={post.id} 
      post={post} 
      deletePostHandler={deletePostHandler}
      editPostHandler={editPostHandler}
      updatedTitleInputRef={updatedTitleInputRef}
      updatedBodyInputRef={updatedBodyInputRef}
      />
    ))}
    </>   
  )
}

