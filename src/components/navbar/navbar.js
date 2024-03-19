import { Link } from 'react-router-dom';
import './navbar.css'

function NavigationBar() {
    return(
        <div className="p-4 d-flex nav">
            <Link to={'/'} className="text-success me-auto navElement">Products App</Link>
            <Link to={'/register'} className="me-4 navElement text-black">Register</Link>
            <Link to={'/'} className="navElement text-black me-4">Login</Link>
            <Link to={'/'} className="navElement" ><i className="fas fa-shopping-cart"></i></Link>
        </div>
    )
}

export default NavigationBar;