
import {  NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h2>Nav Bar</h2>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/post'>Posts</NavLink>
               <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='/users'>Users</NavLink>
            </nav>
        </div>
    );
};

export default Header;