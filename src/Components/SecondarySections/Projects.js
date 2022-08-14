import ProjectDialogWindow from "../Dialog/ProjectDialog/ProjectWindow";
import classes from "./Projects.module.css";
import animation from "../../Animations/bodyAnimation.module.css";
import BigDialogWindow from "../Dialog/BigDialogWindow/DialogWindow";
import React from "react";
import CommonStyles from "./CommonStyles/CommonStyles.module.css";

const Projects = (props) => {
  return (
    <div
      className={`${props.bodyStyle} ${CommonStyles.SecondaryComponentWindow}`}
    >
      <BigDialogWindow title={"Some of my work"}>
        <p>Take a good look down below. You might find something worthwhile!</p>
      </BigDialogWindow>
      <div className={`${animation.runAnimation} ${classes.projectOrg}`}>
        <ProjectDialogWindow
          title="Figure skating"
          description="using machine learning to classify videos from figure skating olympics into their type of jump category."
          link="https://github.com/VladdyGo/Figure-Skating"
          color=""
        ></ProjectDialogWindow>

        <ProjectDialogWindow
          title="Doggo"
          description="An internet and mobile app that connects between people and their doggos."
          link=""
          color=""
        ></ProjectDialogWindow>
      </div>
    </div>
  );
};
export default Projects;
