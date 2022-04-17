import classes from './Footer.module.css'
const Footer = () => {
    return <footer>
        <ul className={classes.contactList}>
            <li>Facebook</li>
            <li>LinkedIn</li>
            <li>Instagram</li>
        </ul>
    </footer>
}

export default Footer;