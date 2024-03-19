import { Link } from 'react-router-dom';
import './navbar.css'

function NavigationBar() {
    return(
        <div class="p-4 d-flex nav">
            HELLO NAVBAR
            <Link to={'/'} class="text-success me-auto navElement">Products App</Link>
            <Link to={'/'} class="me-4 navElement text-black">Register</Link>
            <Link to={'/'} class="navElement text-black me-4">Login</Link>
            <Link to={'/'} class="navElement" ><i class="fas fa-shopping-cart"></i></Link>
        </div>
    )
}

export default NavigationBar;