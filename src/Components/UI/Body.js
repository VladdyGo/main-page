import classes from "./Body.module.css";

import About from "../Sections/About";
import Projects from "../Sections/Projects";
import Contact from "../Sections/Contact";
import React from "react";

import font from "../../Fonts/fonts.module.css";

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
      <div className={`${classes.mainBody} ${font.fontQuantico}`}>
          <h1>Vladislav Goteienr</h1>
      </div>
    );
  }
};

export default Body;
