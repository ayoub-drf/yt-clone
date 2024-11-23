import "./Navbar.css"

import menu_icon from "../../assets/menu.png"
import logo from "../../assets/logo.png"
import search_icon from "../../assets/search.png"
import upload_icon from "../../assets/upload.png"
import more_icon from "../../assets/more.png"
import notification_icon from "../../assets/notification.png"
import profile_icon from "../../assets/jack.png"

const Navbar = ({ sidebar, setSidebar }) => {

  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img onClick={() => setSidebar(!sidebar)} src={menu_icon} alt="" className="menu-icon" />
        <a href="/">
          <img src={logo} alt="" className="logo" />
        </a>
      </div>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <img src={search_icon} alt="" />
        </div>
      </div>
      <div className="nav-right flex-div">
        <img src={upload_icon} alt="" />
        <img src={more_icon} alt="" />
        <img src={notification_icon} alt="" />
        <img src={profile_icon} alt="" className="user-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
