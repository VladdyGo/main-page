import classes from "./Body.module.css";
import animation from "../../Animations/bodyAnimation.module.css";
import background from "../../img/CoolBackground.png";

import About from "../Sections/About";
import Projects from "../Sections/Projects";
import Contact from "../Sections/Contact";
import React from "react";
import Project from "../Dialog/ProjectDialog/ProjectWindow";
import DialogWindow from "../Dialog/BigDialogWindow/DialogWindow";

const Body = (props) => {
  if (props.bodyContent === "About") {
    return <About bodyStyle={classes.bodyStyle} />;
  }

  if (props.bodyContent === "Projects") {
    return <Projects bodyStyle={classes.bodyStyle} />;
  }

  if (props.bodyContent === "Contact me") {
    return <Contact bodyStyle={classes.bodyStyle} />;
  }

  if (props.bodyContent === "VG" || props.bodyContent === "None") {
    return (
      <React.Fragment>
        <div className={classes.bodyStyle}>
          <img src={background} alt=""></img>
        </div>

        <div className={classes.mobileBody}>
          <h1>Some of my work</h1>
          <Project
            className={classes.projectCentering}
            title="Figure skating - machine learning"
            description="using machine learning to classify videos from figure skating olympics into their type of jump category."
            link="https://github.com/VladdyGo/Figure-Skating"
            color="#679681"
          ></Project>
        </div>
      </React.Fragment>
    );
  }
};

export default Body;
