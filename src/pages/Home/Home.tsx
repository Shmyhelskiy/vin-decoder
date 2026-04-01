import VinForm from '../../features/vin-decoder/VinForm/VinForm';
import VinHistory from '../../features/vin-decoder/VinHistory/VinHistory';
import styles from './Home.module.css';

export default function Home() {
    return (
        <main className={styles.mainContent}>
            <VinForm />
            <VinHistory />
        </main>
    );
}