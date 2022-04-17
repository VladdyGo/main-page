import classes from "./MessageWindow.module.css";

const MessageWindow = (props) => {
  return (
    <div className={classes.basicMessageStyle}>
      <h2>{props.title}</h2>
      <p>{props.children}</p>
    </div>
  );
};

export default MessageWindow;
