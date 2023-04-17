import React from "react";
import BlogDetails from "./BlogDetails";
import AddComment from "./AddComment";
import CommentList from "./CommentList";
import { useLoaderData } from "react-router-dom";
function Blog(props){
    const { data } = useLoaderData();
    return (
        <div>
            <BlogDetails key={data.id} title={data.title} picture={data.picture} contain={data.contain} date={data.date} author={data.author}></BlogDetails>
            <AddComment postId={data.id}/>
            <CommentList  postId={data.id}/>
        </div>
        )
}

export default Blog;
