import animation from "../../../Animations/bodyAnimation.module.css";
import classes from "./NavigationTopRightLinks.module.css";

const NavigationTopRightLinks = (props) => {
  const navigationBorderCss = "solid black 3px";
  const navigationRaiseBy = "3px";

  const projectsClickHandler = (event) => {
    event.currentTarget.nextSibling.style.top = navigationRaiseBy;
    event.currentTarget.nextSibling.style.borderBottom = navigationBorderCss;

    event.currentTarget.style.top = "-" + navigationRaiseBy;
    event.currentTarget.style.borderBottom = "0px";

    event.currentTarget.previousSibling.style.top = navigationRaiseBy;
    event.currentTarget.previousSibling.style.borderBottom =
      navigationBorderCss;

      props.bodyContentHandler(event);
      props.activeMobileMenuStatus[1](false);
  };

  const aboutClickHandler = (event) => {
    event.currentTarget.style.top = "-" + navigationRaiseBy;
    event.currentTarget.style.borderBottom = "0px";

    event.currentTarget.nextSibling.style.top = navigationRaiseBy;
    event.currentTarget.nextSibling.style.borderBottom = navigationBorderCss;

    event.currentTarget.nextSibling.nextSibling.style.top = navigationRaiseBy;
    event.currentTarget.nextSibling.nextSibling.style.borderBottom =
      navigationBorderCss;

    props.bodyContentHandler(event);
    console.log(props.activeMobileMenuStatus);
    props.activeMobileMenuStatus[1](false);
  };

  const contactClickHandler = (event) => {
    event.currentTarget.style.top = "-5px";
    event.currentTarget.style.borderBottom = "0px";

    event.currentTarget.previousSibling.style.top = "5px";
    event.currentTarget.previousSibling.style.borderBottom =
      navigationBorderCss;

    event.currentTarget.previousSibling.previousSibling.style.top = "5px";
    event.currentTarget.previousSibling.previousSibling.style.borderBottom =
      navigationBorderCss;

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
        className={animation.navigationAnimation}
        onClick={contactClickHandler}
      >
        Contact me
      </li>
    </nav>
  );
};
export default NavigationTopRightLinks;
