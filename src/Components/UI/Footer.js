import classes from './Footer.module.css';

const Footer = () => {
    return <footer>
        <ul className={classes.contactList}>
            <li>Email: va.goteiner@gmail.com</li>
            <li>LinkedIn: <a href='https://www.linkedin.com/in/vladislavgoteiner/'>Here</a></li>
            <li>Github: <a href='https://github.com/VladdyGo'>Here</a></li>
        </ul>
    </footer>
}

export default Footer;