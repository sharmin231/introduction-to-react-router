import { Link, useNavigate  } from "react-router-dom";


const Post = ({post}) => {
    const {id,title,body} = post;

    const navigate = useNavigate();

    const handleShowDetails = ()=>{
        navigate(`/post/${id}`);
    }
    
   
    return (
        <div>
            <p>user Id: {id}</p>
            <h4>title: {title}</h4>
            <p>{body}</p>
            <Link to={`/post/${id}`}>Show details</Link>
            <Link to={`/post/${id}`}><button>Show more</button></Link>
            <button onClick={handleShowDetails}>Click for post details</button>
       
            
        </div>
    );
};

export default Post;