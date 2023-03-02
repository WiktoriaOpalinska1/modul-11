import styles from './NavBar.module.scss';


const NavBar = () => {
    return(
        <nav className={styles.navBar} >
            <a href='/'className={styles.navIcon}><i class="fa-solid fa-list" ></i></a>
            <ul className={styles.navList}>
                <li><a href='/'>Home</a></li>
                <li><a href='/favorite'>Favorite</a></li>
                <li><a href='/about'>About</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;