import animation from "../../../Animations/bodyAnimation.module.css";
import classes from "./NavigationTopRightLinks.module.css";

const NavigationTopRightLinks = (props) => {

  const projectsClickHandler = (event) => {
    props.bodyContentHandler(event);
    props.activeMobileMenuStatus[1](false);
    console.log(props.activeMobileMenuStatus[0]);
  };

  const aboutClickHandler = (event) => {
    props.bodyContentHandler(event);
    console.log(props.activeMobileMenuStatus);
    props.activeMobileMenuStatus[1](false);
  };

  const contactClickHandler = (event) => {
    props.bodyContentHandler(event);
    props.activeMobileMenuStatus[1](false);
  };

  return (
    <nav>
      <li className={animation.navigationAnimation} onClick={aboutClickHandler}>
        About
      </li>
      <li
        className={animation.navigationAnimation}
        onClick={projectsClickHandler}
      >
        Projects
      </li>
      <li
        className={`${animation.navigationAnimation} ${classes.invisible}`}
        onClick={contactClickHandler}
      >
        Contact me
      </li>
    </nav>
  );
};
export default NavigationTopRightLinks;
