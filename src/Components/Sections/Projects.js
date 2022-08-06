import ProjectDialogWindow from "../Dialog/ProjectDialog/ProjectWindow";
import classes from "./Projects.module.css";
import animation from "../../Animations/bodyAnimation.module.css";
import BigDialogWindow from "../Dialog/BigDialogWindow/DialogWindow";
import { Fragment } from "react";
import React from "react";

const Projects = (props) => {
  return (
    <div className={props.bodyStyle}>
      <BigDialogWindow title={"Some of my work"}>
        <p>Take a good look down below. You might find something worthwhile!</p>
      </BigDialogWindow>
      <div
        className={`${animation.runAnimation} ${classes.projectOrg}`}
      >
        <ProjectDialogWindow
          title="Figure skating - machine learning"
          description="using machine learning to classify videos from figure skating olympics into their type of jump category."
          link="https://github.com/VladdyGo/Figure-Skating"
          color="#3F2F22"
        ></ProjectDialogWindow>
      </div>
    </div>
  );
};
export default Projects;
