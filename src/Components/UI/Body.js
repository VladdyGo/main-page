import classes from "./Body.module.css";
import animation from "../../Animations/bodyAnimation.module.css";

import About from "../Sections/About";
import Projects from "../Sections/Projects";
import Contact from "../Sections/Contact";
import React from "react";
import Project from "../Dialog/ProjectDialog/ProjectWindow";

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
        <div className={`${classes.mainBody} ${animation.runAnimation}`}>
          <label>Finally you're here!</label>
          <label style={{ left: "-1.875rem" }}>I was waiting for you.</label>
          <label style={{ left: "-15.652rem" }}>
            Feel free, click some buttons.
          </label>
          <label style={{ left: "-13.75rem", color: "red" }}>
            I'm looking for a job,
          </label>
          <label style={{ left: "-11.875rem" }}>Contact me, Yo!</label>
        </div>

        <div className={classes.mobileBody}>
          <h1>Some of my work</h1>
          <Project
            className={classes.projectCentering}
            title="Figure skating - machine learning"
            description="using machine learning to classify videos from figure skating olympics into their type of jump category."
            link="https://github.com/VladdyGo/Figure-Skating"
            color='#679681'
          ></Project>
        </div>
      </React.Fragment>
    );
  }
};

export default Body;
