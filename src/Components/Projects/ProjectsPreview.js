import classes from "./ProjectsPreview.module.css";
import Project from "./Project";

const ProjectsPreview = () => {
  return (
    <ul className={classes.projectsPreview}>
      <li><Project description="" img=""/></li>
      <li><Project description="" img=""/></li>
      <li><Project description="" img=""/></li>
      <li><Project description="" img=""/></li>
      <li><Project description="" img=""/></li>
      <li><Project description="" img=""/></li>
      <li><Project description="" img=""/></li>
      <li><Project description="" img=""/></li>
      <li><Project description="" img=""/></li>
      <li><Project description="" img=""/></li>
      <li><Project description="" img=""/></li>
      <li><Project description="" img=""/></li>
    </ul>
  );
};

export default ProjectsPreview;
