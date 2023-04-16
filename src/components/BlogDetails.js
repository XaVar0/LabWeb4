function BlogDetails(props) {
    return (
        <div id="elementBlog">
        <p className="mid">Titre : {props.title}</p>

        <div className="mid container">
            <img className="caption" src={props.picture} alt="Blog element" />
        </div>
        <p className="mid">Auteur : {props.author}</p>
        <p className="mid">Date : {props.date}</p>
        <p className="mid">Information : {props.contain}</p>
        </div>
    );
}
export default BlogDetails;