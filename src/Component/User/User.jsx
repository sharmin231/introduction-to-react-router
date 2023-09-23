import { Link } from "react-router-dom";


const User = ({user}) => {
    const {name,id,username,address,email,phone} = user;
    console.log(user);
    const userStyle = {
        border: '2px solid green',
        padding: '10px',
        borderRadius: '10px'

    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            
        </div>
    );
};

export default User;