import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <label className={classes.title}>Contact Info</label>
      <ul className={classes.contactList}>
        <li>Tel: 054 - 9092278</li>
        <li>Email: va.goteiner@gmail.com</li>
        <li>
          <label>Find me on linkedIn: </label>
          <a href="https://www.linkedin.com/in/vladislavgoteiner">
            linkedin.com/in/vladislavgoteiner
          </a>
        </li>
        <li>
          <label>Check me out on github: </label>
          <a href="https://www.github.com/VladdyGo">github.com/VladdyGo</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
