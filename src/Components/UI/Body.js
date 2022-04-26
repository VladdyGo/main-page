import classes from "./Body.module.css";
import MessageWindow from "../Message/MessageWindow";
import ProjectsPreview from "../Projects/ProjectsPreview";

const dataBase = [
  {
    title: "Vladislav Goteiner",
    message:
      "Hello, i'm an applied mathematicians and a full stack web developer. Constantly growing and expanding my knowlage and abilities.",
  },
  {
    title: "No projects to show.",
    message:
      "I'm currently working on my portfolio. as soon as ill have something to show ill post it here.",
  },
];

const Body = (props) => {
  if (props.bodyContent === "About") {
    return (
      <div className={`${classes.bodyStyle}`}>
        <MessageWindow title="Vladislav Goteiner">
          Hello, i'm an applied mathematicians and a full stack web developer.
          Constantly growing and expanding my knowlage and abilities.
        </MessageWindow>
      </div>
    );
  }

  if (props.bodyContent === "Projects") {
    return (
      <div className={`${classes.bodyStyle}`}>
        <MessageWindow title="No projects to show.">
          I'm currently working on my portfolio. as soon as ill have something
          to show ill post it here.
        </MessageWindow>
        <ProjectsPreview />
      </div>
    );
  }

  if (props.bodyContent === "Contact me") {
    return (
      <div className={classes.bodyStyle}>
      <MessageWindow title="Contact Info">
        <ul>
          <li>Phone: 054-9092278</li>
          <li>Email: va.goteiner@gmail.com</li>
        </ul>
      </MessageWindow>
      </div>
    );
  }
  if (props.bodyContent === "VG" || props.bodyContent === "None") {
    return (
      <div className={classes.bodyStyle}>
        <MessageWindow title="Main section">Vladislav Goteiner</MessageWindow>
      </div>
    );
  }
};

export default Body;
