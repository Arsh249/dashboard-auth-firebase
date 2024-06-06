import React from "react";
import { auth } from "./firebase";
import home from "../img/home.png";
import notifications from "../img/notification.png";
import heart from "../img/heart.png";
import message from "../img/message.png";
import profile from "../img/profile.png";
import setting from "../img/setting.png";
import subscription from "../img/favorite.png";
import logout from "../img/logout.png";
import "./Menu.scss";
import Main from "./Main.js";
import Artist from './Artist.js';
import image1 from "../img/image1.png";
import image1Logo from "../img/image1-logo.png";
import image2 from "../img/image2.png";
import image2Logo from "../img/image2-logo.png";
import image3 from "../img/image3.png";
import image3Logo from "../img/image3-logo.png";
import image4 from "../img/image4.png";
import image4Logo from "../img/image4-logo.png";

const card = [
  {
    image1: image1,
    img: image1Logo,
    name: "Tom Edward",
    email: "@thewildwithyou",
  },
  {
    image1: image2,
    img: image2Logo,
    name: "Chris Doe",
    email: "@thewildwithyou",
  },
  {
    image1: image3,
    img: image3Logo,
    name: "Emilie Jones",
    email: "@thewildwithyou",
  },
  {
    image1: image4,
    img: image4Logo,
    name: "Jess William",
    email: "@thewildwithyou",
  },
];

const Menu = () => {
  async function handleLogout(){
    try {
      await auth.signOut();
      window.location.href = "login";
      console.log("User logged out");
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
    
    <div className="menu">
      <div className="logo">
        <h1>LOGO</h1>
      </div>
      <div className="menu-items">
      <div className="bar"></div>
        <nav>
          <ul>
            <li>
              <img src={home} alt="home" />
              <a href="#"><span className="home">Home</span></a>
            </li>
            <li>
              <img src={notifications} alt="notifications" />
              <a href="#">Notifications</a>
            </li>
            <li>
              <img src={heart} alt="heart" />
              <a href="#">Shop</a>
            </li>
            <li>
              <img src={message} alt="message" />
              <a href="#">Conversation</a>
            </li>
            <li>
              <img src={message} alt="wallet" />
              <a href="#">Wallet</a>
            </li>
            <li>
              <img src={subscription} alt="subscription" />
              <a href="#">Subscription</a>
            </li>
            <li>
              <img src={profile} alt="profile" />
              <a href="#"><span className="profile">My Profile</span></a>
            </li>
            <li>
              <img src={setting} alt="setting" />
              <a href="#">Settings</a>
            </li>
          </ul>
        </nav>
        <div className="logout">
        <nav>
          <ul>
            <li>
              <img src={logout} alt="logout" />
              <button type="submit" className="btnl" onClick={handleLogout}>Logout</button>
            </li> 
          </ul>
        </nav>
      </div>
      </div>
      <div className="copyright">
      <p>2024©Arsh</p> <p>Developed by Arsh Ilahi</p>
      </div>
      
    </div>
    
    <Main/>
    <Artist card ={card}/>
    </>
  );
};

export default Menu;

