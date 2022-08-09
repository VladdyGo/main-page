import BasicDialogWindow from "../Dialog/BasicDialogWindow/DialogWindow";
import classes from "./Contact.module.css";
import CommonStyles from './CommonStyles/CommonStyles.module.css';

const Contact = (props) => {
  return (
    <div className={`${props.bodyStyle} ${CommonStyles.SecondaryComponentWindow}`}>
      <BasicDialogWindow
        title="Contact Info"
        shortDescription="You can reach out to me or find my work here"
      >
        <ul className={classes.list}>
          <li>Tel: 054 - 9092278</li>
          <li>Email: va.goteiner@gmail.com</li>
          <li>
            Find me on linkedIn:{" "}
            <a href="https://www.linkedin.com/in/vladislavgoteiner">
              linkedin.com/in/vladislavgoteiner
            </a>
          </li>
          <li>
            Check me out on github:{" "}
            <a href="https://www.github.com/VladdyGo">github.com/VladdyGo</a>
          </li>
        </ul>
      </BasicDialogWindow>
    </div>
  );
};
export default Contact;
