import { useState } from "react"
import logo from "../assets/Logo.svg"
import hamburgerIcon from "../assets/🦆 icon _hamburger menu.svg"

export default function Nav() {

    return (
        <nav>
            <div className="nav_img">
                <img src={logo} alt="logo" />
            </div>

            <div className="menu-icon">
                <img src={hamburgerIcon} />
            </div>
            <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">MENU</a></li>
                <li><a href="#">RESERVATION</a></li>
                <li><a href="#">ORDER ONLINE</a></li>
                <li><a href="#">LOGIN</a></li>
            </ul>
        </nav>
    )
}