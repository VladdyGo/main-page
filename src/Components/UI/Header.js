import classes from "./Header.module.css";
import presonalImg from "../../img/personalPic.png";
import plantLogo from "../../img/plantLogo.png";
import animation from "../../Animations/bodyAnimation.module.css";
import font from '../../Fonts/fonts.module.css';

const Header = (props) => {
  return (
    <header>
      <div name="desktop_header" className={classes.mainNav}>
        <div className={`${classes.logo} ${font.fontJuliusSansOne}`} onClick={props.bodyContentHandler}>
          <label name="Vladislav Goteienr Logo">VG</label>
        </div>
        <nav>
          <li className={animation.navigationAnimation} onClick={props.bodyContentHandler}>About</li>
          <li className={animation.navigationAnimation}  onClick={props.bodyContentHandler}>Projects</li>
          <li className={animation.navigationAnimation}  onClick={props.bodyContentHandler}>Contact me</li>
        </nav>
      </div>

      <div name="mobile_header" className={classes.mobileHeader}>
        <div className={classes.plantLogo}>
          <img src={plantLogo} alt="plantLOGO"></img>
        </div>
        <div className={classes.logo} onClick={props.bodyContentHandler}>
          <label name="Vladislav Goteienr Logo">VG</label>
        </div>
      </div>
    </header>
  );
};

export default Header;
