import { NavLink } from "react-router-dom";

export default function NavBar(){

    return (
        <>
            <div className="nav-bar-container">
                <nav className="nav-bar">
                    <div className="logo">
                        <img src="https://recordrr.com/wp-content/uploads/2024/02/logo-01.png" alt="recordrr logo"/>
                    </div>
                    <div className="nav-links">
                        <ul className="nav-ul">
                            <li className="nav-bar-links">    
                                <NavLink to="/"> Home</NavLink>
                            </li>
                            <li className="nav-bar-links">    
                                <NavLink to="/about"> About</NavLink>
                            </li>
                            <li className="nav-bar-links">    
                                <NavLink to="/pricing"> Pricing</NavLink>
                            </li>
                            <li className="nav-bar-links">    
                                <NavLink to="/faqs"> FAQS</NavLink>
                            </li>
                            <li className="nav-bar-links">    
                                <NavLink to="/blog">Blog</NavLink>
                            </li>
                            <li className="nav-bar-links">    
                                <NavLink to="/contactus">Contact Us</NavLink>
                            </li>
                            <li className="nav-bar-button">
                                <NavLink to={"tel:+9193989494451"}>
                                    <b>
                                        +91 93989494451
                                    </b>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}
