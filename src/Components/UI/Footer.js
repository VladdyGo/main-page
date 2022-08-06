import classes from "./Footer.module.css";
import linkImg from "../../img/link-img.svg";

const Footer = () => {
  return (
    <footer>
      <label className={classes.title}>Contact Info</label>
      <ul className={classes.contactList}>
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
    </footer>
  );
};

export default Footer;
