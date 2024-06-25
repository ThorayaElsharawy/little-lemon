import logo from "../assets/Logo.svg"

export default function Nav() {
    return (
        <nav>
            <img src={logo} alt="logo" />
            <ul>
                <li>
                    <a href="#">HOME</a>
                </li>
                <li>
                    <a href="#">ABOUT</a>
                </li>
                <li>
                    <a href="#">MENU</a>
                </li>
                <li>
                    <a href="#">RESERVATION</a>
                </li>
                <li>
                    <a href="#">ORDER ONLINE</a>
                </li>
                <li>
                    <a href="#">LOGIN</a>
                </li>
            </ul>
        </nav>
    )
}