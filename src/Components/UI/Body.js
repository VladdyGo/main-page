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
          <h1>Vladislav Goteiner</h1>
          <p>
            I’m a mathematician, a front-end web developer, a plantsman. In any
            given time working on something new and exciting for me. new
            projects, new learnings, new findings by me will be posted here.
          </p>
          <Project
            className={classes.projectCentering}
            title="Figure skating - machine learning"
            description="using machine learning to classify videos from figure skating olympics into their type of jump category."
            link="https://github.com/VladdyGo/Figure-Skating"
          ></Project>
          <p style={{marginTop: '30px'}}>you can contact me! How ? Thats how:</p>
          <ul>
            <li>Email: va.goteiner@gmail.com</li>
            <li>Phone: 054-9092278</li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
};

export default Body;
