import classes from "./MessageWindow.module.css";
import animationClasses from "../../Animations/bodyAnimation.module.css";

const MessageWindow = (props) => {
  return (
    <div
      key={props.title}
      className={
        props.className
          ? `${props.className} ${classes.basicMessageStyle} ${animationClasses.runAnimation}`
          : `${classes.basicMessageStyle} ${animationClasses.runAnimation}`
      }
    >
      <h2>{props.title}</h2>
      <p>{props.children}</p>
    </div>
  );
};

export default MessageWindow;
