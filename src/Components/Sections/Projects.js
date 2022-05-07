import BasicDialogWindow from "../Dialog/BasicDialogWindow/DialogWindow";
import ProjectDialogWindow from "../Dialog/ProjectDialog/ProjectWindow";
import classes from "./Projects.module.css";
import animation from '../../Animations/bodyAnimation.module.css';

const Projects = (props) => {
  return (
    <div className={`${props.bodyStyle} ${animation.runAnimation}`}>
      <ul className={`${classes.projectList} ${classes.projectListContainer}`}>
        <li className={classes.project}>
          <ProjectDialogWindow title="Project 1" description="Fill" />
        </li>
         <li className={classes.project}>
          <ProjectDialogWindow title="Project 2" description="This" />
        </li>
        <li className={classes.project}>
          <ProjectDialogWindow title="Project 3" description="Up" />
        </li>
      </ul>

      <ul className={`${classes.projectList} ${classes.projectListContainer}`}>
        <li className={classes.project}>
          <ProjectDialogWindow title="Project 4" description="With" />
        </li>
        <li className={classes.project}>
          <ProjectDialogWindow title="Project 5" description="Description" />
        </li>
        <li className={classes.project}>
          <ProjectDialogWindow title="project 6" description="!" />
        </li>
      </ul>
    </div>
  );
};
export default Projects;
