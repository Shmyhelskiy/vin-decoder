import { Header } from "../pages/Header/Header";
import styles from "./RootLayout.module.css";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
    return (
        <div className={styles.wrapper}>
            <Header />
            <main className={styles.main}>
                <Outlet />
            </main>
        </div>
    );
}