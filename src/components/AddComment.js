import React, { useState } from 'react';

function AddComment(props) {
  const [commentBody, setCommentBody] = useState('');

  const commentChange = (e) => {
    setCommentBody(e.target.value);
  };

  const commentSubmit = (e) => {
    e.preventDefault();

    if (commentBody.trim() !== '') {
      fetch('http://localhost:3000/comments', {
        method: 'POST',
        body: JSON.stringify({
          postId: props.postId,
          body: commentBody,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));

      setCommentBody('');
      window.location.reload();
    }
  };

  return (
    <div className="container">
      <h4>Commentaire</h4>
      <form onSubmit={commentSubmit}>
        <div className="form-group">
          <textarea
            className="form-control"
            id="comment-body"
            rows="7"
            value={commentBody}
            onChange={commentChange}
          ></textarea>
        </div>
        <div className="position-relative">
          <button className="btn btn-dark my-2 my-sm-0 position-absolute end-0" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddComment;
