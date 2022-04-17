import classes from './Header.module.css';

const Header = () => {
    return (<header className={classes.mainNav}>
        <div className={classes.logo}>VG</div>
        <nav>
            <li>About</li>
            <li>Projects</li>
            <li>Contact me</li>
        </nav>
    </header>)
};

export default Header;