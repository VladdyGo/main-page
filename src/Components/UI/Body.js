import classes from "./Body.module.css";
import MessageWindow from "../Message/MessageWindow";
import ProjectsPreview from "../Projects/ProjectsPreview";

const Body = (props) => {
  if (props.bodyContent === "About") {
    return (
      <div className={classes.bodyStyle}>
        <MessageWindow title='Vladislav Goteiner'>
          Hello, i'm an applied mathematicians and a full stack web developer.
          Constantly growing and expanding my knowlage and abilities.
        </MessageWindow>
      </div>
    );
  }

  if (props.bodyContent === "Projects") {
    return (
      <div className={classes.bodyStyle}>
        <MessageWindow title='No projects to show.'>
          I'm currently working on my portfolio. as soon as ill have something to show ill post it here.
        </MessageWindow>
        <ProjectsPreview />
      </div>
    );
  }

  if (props.bodyContent === "Contact me") {
    return (
      <div className={classes.bodyStyle}>
          <ul>
            <li>Phone: 054-9092278</li>
            <li>Email: va.goteiner@gmail.com</li>
          </ul>
      </div>
    );
  }
};

export default Body;
