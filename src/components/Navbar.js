import './../App.css';
import './../input.css';
import facebook from "../assets/icons/facebook.png";
import github from "../assets/icons/github.png";
import instagram from "../assets/icons/instagram.png";
import logo from "../assets/icons/user.png";
const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <img src={logo} alt="logo" width={30} className="cursor-pointer"></img>
            <ul className="hidden md:flex">
                <li className="px-2">
                    <a href="https://www.facebook.com/profile.php?id=100008008211267" target="_blank">
                        <img src={facebook} alt="facebook" width={30}></img>
                    </a>
                </li>
                <li className="px-2">
                    <a href="https://www.instagram.com/palm_ntws" target="_blank">
                        <img src={instagram} alt="instagram" width={30}></img>
                    </a>
                </li>
                <li className="px-2">
                    <a href="https://www.github.com/teetyk" target="_blank">
                        <img src={github} alt="github" width={30}>
                        </img>
                    </a>
                </li>
            </ul>
            {/* <img src={facebook} alt="facebook"></img>
            <img src={github} alt="github"></img>
            <img src={instagram} alt="instagram"></img> */}
        </div>
    )
}

export default Navbar;