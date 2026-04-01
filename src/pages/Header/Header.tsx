import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export function Header() {
    return (
        <header className={styles.header}>
            <NavLink to="/" className={styles.logo}>
                <img src="/logo.png" alt="Logo" />
            </NavLink>
            <nav className={styles.nav}>
                <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ""}>Home</NavLink>
                <NavLink to="/variables" className={({ isActive }) => isActive ? styles.active : ""}>Variables</NavLink>
            </nav>
        </header>
    );
}