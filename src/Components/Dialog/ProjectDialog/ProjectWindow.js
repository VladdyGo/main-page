import classes from "./ProjectWindow.module.css";

const ProjectWindow = (props) => {
  return (
    <div className={`${classes.projectCard} ${props.className}`}>
      <div className={classes.projectTitle}><label name={props.title}>{props.title}</label></div>
      <div className={classes.projectShortDescription}><label name={props.description}>{props.description}</label></div>
    </div>
  );
};

export default ProjectWindow;
