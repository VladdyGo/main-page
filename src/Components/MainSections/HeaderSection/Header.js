import classes from "./Header.module.css";
import plantLogo from "../../../img/plantLogo.png";
import animation from "../../../Animations/bodyAnimation.module.css";
import font from "../../../Fonts/fonts.module.css";
import menuIcon from "../../../Icons/Menu.svg";
import NavigationTopRightLinks from "./NavigationTopRightLinks";

const Header = (props) => {
  const navigationBorderCss = "solid black 3px";

  const logoClickHandler = (event) => {
    const childNodes = event.currentTarget.nextSibling.childNodes;
    for (const x of childNodes) {
      x.style.top = "3px";
      x.style.borderBottom = navigationBorderCss;
    }
    props.bodyContentHandler(event);
  };

  const menuIconClickHandler = (event) => {
    //[0] === activeMobile
    //[1] === setActiveMobile
    if (props.activeMobileMenuStatus[0] === false) {
      props.activeMobileMenuStatus[1](true);
    }
    event.stopPropagation();
  };

  return (
    <header>
      <div name="desktop_header" className={classes.mainNav}>
        <div
          className={`${classes.logo} ${font.fontJuliusSansOne}`}
          onClick={logoClickHandler}
        >
          <label name="Vladislav Goteienr Logo">VG</label>
        </div>
        <NavigationTopRightLinks
          bodyContentHandler={props.bodyContentHandler}
        />
      </div>

      <div name="mobile_header" className={classes.mobileHeader}>
        <div className={classes.plantLogo}>
          <img src={plantLogo} alt="plantLOGO"></img>
        </div>
        <div className={classes.logo} onClick={props.bodyContentHandler}>
          <label name="Vladislav Goteienr Logo">VG</label>
        </div>
        <div className={classes.menuIcon} onClick={menuIconClickHandler}>
          <img src={menuIcon} alt="Menu" />
        </div>
      </div>

      <div
        className={`${
          props.activeMobileMenuStatus[0] ? classes.show : classes.hide
        } ${classes.mobileMenuNavigationWindow} ${animation.runAnimation}`}
        onClick={menuIconClickHandler}
      >
        <NavigationTopRightLinks
          bodyContentHandler={props.bodyContentHandler}
          activeMobileMenuStatus = {props.activeMobileMenuStatus}
        />
      </div>
    </header>
  );
};

export default Header;
