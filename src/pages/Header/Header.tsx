import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <NavLink 
                    to="/" 
                    className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}
                >
                    Home
                </NavLink>
                <NavLink 
                    to="/variables" 
                    className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}
                >
                    Variables
                </NavLink>
            </nav>
        </header>
    );
}
