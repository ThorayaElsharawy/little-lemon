import { useState } from "react"
import logo from "../assets/Logo.svg"
import hamburgerIcon from "../assets/🦆 icon _hamburger menu.svg"
import { Link } from "react-router-dom"

export default function Nav() {

    return (
        <nav>
            <div className="nav_img">
                <img src={logo} alt="logo" />
            </div>

            <div className="menu-icon">
                <img src={hamburgerIcon} />
            </div>
            <ul className="nav_items">
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