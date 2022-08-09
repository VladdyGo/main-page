import classes from "./ProjectWindow.module.css";

const ProjectWindow = (props) => {
  const reDir = () => {
    window.open(props.link,'_blank');
  };

  return (
    <div className={`${classes.projectCard} ${props.className}`} style={props.color ? {backgroundColor:props.color}:{}}>
      <div className={classes.projectTitle} onClick={reDir}><h3 name={props.title}>{props.title}</h3></div>
      <div className={classes.projectShortDescription}><p name={props.description}>{props.description}</p></div>
    </div>
  );
};

export default ProjectWindow;
