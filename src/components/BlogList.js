import React from "react";
import BlogCard from './BlogCard';
import { useLoaderData } from "react-router-dom";
function BlogList(props){
    const { data } = useLoaderData();
    return (
        <div className="row mid marge">{
            data.map((d) => (
            <BlogCard key={d.id} id={d.id} title={d.title} picture={d.picture} contain={d.contain}></BlogCard>
        ))} </div>)
}
export default BlogList;