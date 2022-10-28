import "./header.scss";
import profileImg from "../../assets/profile__img.png";
import ShareButton from "../../assets/share-btn.svg";
import MenuButton from "../../assets/menu-btn.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__img--container">
        <img alt="profile_img" src={profileImg} className="header__img" />
      </div>
      <h1 className="header__name">Agoro Akorede</h1>
      <div className="share_button">
        <img src={ShareButton} alt="share button" />
      </div>
      <div className="menu_button">
        <img src={MenuButton} alt="menu button" />
      </div>
    </header>
  );
};

export default Header;
