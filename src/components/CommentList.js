import React from "react";
import Comment from "./Comment";
function CommentList(props) {
  const [comments, setContent] = React.useState([]);
  React.useEffect(() => {
      fetch("http://localhost:3000/comments")
          .then((response) => response.json())
          .then((data) =>
          setContent(data)
          );
  }, []);
    return (
    <section>
      <div className="container my-5 py-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-12 col-lg-10 col-xl-8">    
            <div className="row">
              <div className="col"></div>
        <div>{
            comments.map((d) => (
            <Comment idpub={props.postId} iddem={d.postId}  key={d.id} body={d.body}></Comment>
        ))} </div>
            </div>
          </div>
        </div>
      </div>
  </section>)
}
export default CommentList;