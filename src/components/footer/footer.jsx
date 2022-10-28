import "./footer.scss";
import zuri from "../../assets/Zuri.Internship_Logo.svg";
import ingressive from "../../assets/ingressive.svg";

const Footer = () => {
  return (
    <footer className='footer'>
      <img src={zuri} alt="zuri_logo" />
      <span>HNG Internship 9 Frontend Task</span>
      <img src={ingressive} alt="ingressive" />

    </footer>
  )
}

export default Footer;