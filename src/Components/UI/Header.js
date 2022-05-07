import classes from './Header.module.css';

const Header = (props) => {
    return (<header className={classes.mainNav}>
        <div className={classes.logo} onClick={props.bodyContentHandler}><label name="Vladislav Goteienr Logo">VG</label></div>
        <nav>
            <li onClick={props.bodyContentHandler}>About</li>
            <li onClick={props.bodyContentHandler}>Projects</li>
            <li onClick={props.bodyContentHandler}>Contact me</li>
        </nav>
    </header>)
};

export default Header;