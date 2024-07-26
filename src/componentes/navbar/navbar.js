import Logo from '../image/logo.png'
import './navbar.css'

function NavBar() {
    return (
        <>
            <header>
                <a href=""><img src={Logo} class="logo" /></a>
                <div class="toggle"></div>
                <ul class="nav">
                    <li><a href="">Home</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </header>
        </>
    )
}

export default NavBar