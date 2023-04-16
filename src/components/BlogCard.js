function BlogCard(props){
    return (
        <div className='card mid marge' style={{width: '23rem', height: '30rem'}}>
            <div style={{width: '18rem', height: '18rem'}}>
                <img className='card-img-top' src={props.picture} alt={props.title} title={props.title}/>
            </div>
            <div className='card-body'>
                <a href={`Details/${props.id}`}>
                <button type='button' className='btn btn-dark btn-block'>{props.title}</button>
                </a>
                <p className='card-text'>{props.contain}</p>
            </div>
        </div>
    )
}
export default BlogCard;