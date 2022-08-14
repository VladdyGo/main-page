import classes from "./DialogWindow.module.css";
import animationClasses from "../../../Animations/bodyAnimation.module.css";

const DialogWindow = (props) => {
  return (
    // <div
    //   key={props.title}
    //   className={
    //     props.className
    //       ? `${props.className} ${classes.basicMessageStyle} ${animationClasses.runAnimation}`
    //       : `${classes.basicMessageStyle} ${animationClasses.runAnimation}`
    //   }
    // >
    //   <h2>{props.title}</h2>
    //   <p>{props.children}</p>
    // </div>
    <div className={`${classes.dialogContainer} ${animationClasses.runAnimation} ${props.bodyStyle} ${classes.gradientBorder}`}>
      <div className={classes.titleContainer}><label name={props.title}>{props.title}</label></div>
      <div className={classes.shortDescriptionContainer}><label name={props.shortDescription}>{props.shortDescription}</label></div>
      <div className={classes.mainContentContainer}>{props.children}</div>
    </div>
  );
};

export default DialogWindow;
