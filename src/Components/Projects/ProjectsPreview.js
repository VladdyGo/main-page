import classes from "./ProjectsPreview.module.css";
import Project from "./Project";
import animationClasses from '../../Animations/bodyAnimation.module.css';

const ProjectsPreview = () => {
  return (
    <ul className={`${classes.projectsPreview} ${animationClasses.runAnimation}`}>
      <li><Project title="This is a title" description="This is a description"/></li>
      <li><Project title="This is a title" description="This is a description"/></li>
      <li><Project title="This is a title" description="This is a description"/></li>
      <li><Project title="This is a title" description="This is a description"/></li>
      <li><Project title="This is a title" description="This is a description"/></li>
      <li><Project title="This is a title" description="This is a description"/></li>
      <li><Project title="This is a title" description="This is a description"/></li>
      <li><Project title="This is a title" description="This is a description"/></li>
    </ul>
  );
};

export default ProjectsPreview;
