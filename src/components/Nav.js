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
            <div className={`close-icon ${toggle? 'open': 'hide'}`} onClick={() => setToggle(!toggle)}>
                <IoMdCloseCircle />
            </div>
            <ul className={`${toggle ? 'nav_items_md open' : 'nav_items nav_items_show'}`}>
                <li onClick={() => setToggle(!toggle)}><Link to="/">HOME</Link></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">MENU</a></li>
                <li  onClick={() => setToggle(!toggle)}><Link to="/booking">RESERVATION</Link></li>
                <li><a href="#">ORDER ONLINE</a></li>
                <li><a href="#">LOGIN</a></li>
            </ul>
        </nav>
    )
}