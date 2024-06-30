import { useState } from "react"
import logo from "../assets/Logo.svg"
import hamburgerIcon from "../assets/hamburger_icon.svg"
import { Link } from "react-router-dom"
import { IoMdCloseCircle } from "react-icons/io";


export default function Nav() {
    const [toggle, setToggle] = useState(false)

    return (
        <nav>
            <div className="nav_img">
                <img src={logo} alt="logo" />
            </div>
            <div className="menu-icon" onClick={() => setToggle(!toggle)}>
                <img src={hamburgerIcon} />
            </div>
            <div className={`close-icon ${toggle? '': 'hide'}`} onClick={() => setToggle(!toggle)}>
                <IoMdCloseCircle />
            </div>
            <ul className={`${toggle ? 'hide' : 'nav_items'}`}>
                <li><Link to="/">HOME</Link></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">MENU</a></li>
                <li><Link to="/booking">RESERVATION</Link></li>
                <li><a href="#">ORDER ONLINE</a></li>
                <li><a href="#">LOGIN</a></li>
            </ul>

            <ul className={`nav_items_md ${toggle ? ' open' : 'close'}`}>
                <li><Link to="/">HOME</Link></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">MENU</a></li>
                <li><Link to="/booking">RESERVATION</Link></li>
                <li><a href="#">ORDER ONLINE</a></li>
                <li><a href="#">LOGIN</a></li>
            </ul>
        </nav>
    )
}