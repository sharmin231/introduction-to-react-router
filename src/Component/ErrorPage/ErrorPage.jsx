import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <h2>Oops!!!! SomeThing went Wrong</h2>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <p>An unexpected problem has occured</p>
                    <Link to='/'><button>Home</button></Link>
                </div>
            }
            
        </div>
    );
};

export default ErrorPage;