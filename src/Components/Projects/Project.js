import classes from './Project.module.css';

const Project = (props) => {
    return (<div className={classes.project}>
        <div>{props.title}</div>
        <p>{props.description}</p>
    </div>)
};

export default Project;