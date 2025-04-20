import { useState } from "react"
import menuIcon from '../../assets/menu.svg';
import styles from "./styles/navbar.module.css"

let Navbar = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <nav className={`${styles.navbar} ${expanded ? styles.expanded : ""}`}>
            <img
                src={menuIcon}
                onClick={() => setExpanded((prev) => !prev)}
                alt="Toggle menu"
            >
                {/* &#9776; Unicode for hamburger menu */}
            </img>
            <div className={styles.navContent}>
                {/* Place your nav links or content here */}
                <a href="/dashboard">Dashboard</a>
                <a href="#">Calendar</a>
                <a href="#">Assignments</a>
                <a href="#">Account</a>
                <a href="#">Log Out</a>
            </div>
        </nav>
    );
}

export default Navbar;