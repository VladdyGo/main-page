import classes from './Footer.module.css';
import linkImg from '../../img/link-img.svg';

const Footer = () => {
    return <footer>
        <h1 className={classes.title}>Contact Info</h1>
        <ul className={classes.contactList}>
            <li>Phone: 054-9092278</li>
            <li>Email: va.goteiner@gmail.com</li>
            <li><a href='https://www.linkedin.com/in/vladislavgoteiner/'>LinkedIn <img src={linkImg} alt=""></img></a></li>
            <li><a href='https://github.com/VladdyGo'>Github <img src={linkImg} alt=""></img></a></li>
        </ul>
    </footer>
}

export default Footer;