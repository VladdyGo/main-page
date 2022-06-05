import classes from "./ProjectWindow.module.css";

const ProjectWindow = (props) => {
  const reDir = () => {
    window.open(props.link,'_blank');
  };

  return (
    <div className={`${classes.projectCard} ${props.className}`} style={props.color ? {'background-color':props.color}:''}>
      <div className={classes.projectTitle} onClick={reDir}><label name={props.title}>{props.title}</label></div>
      <div className={classes.projectShortDescription}><label name={props.description}>{props.description}</label></div>
    </div>
  );
};

export default ProjectWindow;
