import classes from './DialogWindow.module.css';
import animation from '../../../Animations/bodyAnimation.module.css';

const DialogWindow = (props) => {
    return(
        <div className={`${classes.dialogContainer} ${animation.runAnimation}`}>
            <div className={classes.titleContainer}><label name={props.title}>{props.title}</label></div>
            <div className={classes.contentContainer}><label name="content">{props.children}</label></div>
        </div>
    );
};

export default DialogWindow;