import React from "react";
import { useParams } from "react-router-dom";
import BlogDetails from "./BlogDetails";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

function Blog(props){
    const {id} = useParams();
    const [itemPost, setElement]  = React.useState({})
    
    React.useEffect(() => {
        fetch(`http://localhost:3000/posts/${id}`)
        .then(response => response.json())
        .then(data => {
            setElement(data);
        })
        .catch(error => console.error(error));
    }, [id]);
    
    return (
        <div>
            <BlogDetails key={itemPost.id} title={itemPost.title} picture={itemPost.picture} contain={itemPost.contain} date={itemPost.date} author={itemPost.author}></BlogDetails>
            <AddComment postId={itemPost.id}/>
            <CommentList  postId={itemPost.id}/>
        </div>
        )
}

export default Blog;
