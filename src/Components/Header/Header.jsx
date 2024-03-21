import { Container } from "react-bootstrap";
import logo from "../../imges/download.png"
import user from "../../imges/1660002772504.jpg"
import "./Header.css"
const Header = () => {
    return (
        <>
            <div className="overlay_hearder">
                <Container>
                    <div className="content_header">
                        <div className="left">
                            <img src={logo} alt="" className="logo_imge" />
                            <i class="fa-solid fa-magnifying-glass glass"></i>
                            <input placeholder="Search" className="input_header" />
                        </div>
                        <div className="right">
                            <ul className="list_nav">
                                <li><i class="fa-solid fa-house"></i><p>Home</p></li>
                                <li><i class="fa-solid fa-bag-shopping"></i><p>Jops</p></li>
                                <li><i class="fa-solid fa-bell bell"></i><p>Notification</p></li>
                                <li><i class="fa-solid fa-comment-dots"></i><p>Messiging</p></li>
                                <li><i class="fa-regular fa-calendar-days"></i><p>For Business</p></li>
                                <li><img className="user_imge" src={user} alt="" />
                                    <div>
                                        <span>Me</span>
                                        <i class="fa-solid fa-caret-down down"></i>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>

            </div>
        </>
    )
}


export default Header;