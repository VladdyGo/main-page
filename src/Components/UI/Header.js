import classes from "./Header.module.css";
import presonalImg from "../../img/personalPic.png";

const Header = (props) => {
  return (
    <header>
      <div name="desktop_header" className={classes.mainNav}>
        <div className={classes.logo} onClick={props.bodyContentHandler}>
          <label name="Vladislav Goteienr Logo">VG</label>
        </div>
        <nav>
          <li onClick={props.bodyContentHandler}>About</li>
          <li onClick={props.bodyContentHandler}>Projects</li>
          <li onClick={props.bodyContentHandler}>Contact me</li>
        </nav>
      </div>

      <div name="mobile_header" className={classes.mobileHeader}>
        <div className={classes.pictureFrame}>
          <img src={presonalImg} alt=""></img>
        </div>
        <h1>Vladislav Goteiner</h1>
        <p>
          I’m a mathematician, a front-end web developer, a plantsman. In any
          given time working on something new and exciting for me. new projects,
          new learnings, new findings by me will be posted here.
        </p>
      </div>
    </header>
  );
};

export default Header;
