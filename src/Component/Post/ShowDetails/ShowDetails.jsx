import { useLoaderData, useNavigate } from "react-router-dom";


const ShowDetails = () => {
    const details = useLoaderData()
    const show ={
        border: '2px solid orange',
        padding: '10px'
    }
    const navigate = useNavigate();
    const handleGoBack = () =>{
        navigate(-1)
    }
    return (
        <div style={show}>
            <h2>Title: {details.title}</h2>
            <p>{details.body}</p>
            <button onClick={handleGoBack}>Go Back</button>
            
        </div>
    );
};

export default ShowDetails;