import classes from "./DialogWindow.module.css";
import animation from "../../../Animations/bodyAnimation.module.css";

const DialogWindow = (props) => {
  return (
    <div className={`${classes.dialogContainer} ${animation.runAnimation}`}>
      <div className={classes.titleContainer}>
        <div className={classes.circle1}></div>
        <label name={props.title}>{props.title}</label>
        <div className={classes.circle2}></div>
      </div>
      <div className={classes.contentContainer}>
        <label name="content">{props.children}</label>
      </div>
    </div>
  );
};

export default DialogWindow;
