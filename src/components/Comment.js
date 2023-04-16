
function Comment(props){
    if(props.idpub === props.iddem)
    {
        return (
            <div className='d-flex flex-start mt-4'>
                <a className='me-3' href='#'> 
                    <img className='rounded-circle shadow-1-strong' src='/picture/ingAccount.png' alt='avatar' width='65' height='65' /> 
                </a>
                <div className='flex-grow-1 flex-shrink-1'> 
                <br></br>
                    <p className='small mb-0'>{props.body}</p> 
                </div>
            </div>
    
        )
    }
    return;
} export default Comment;