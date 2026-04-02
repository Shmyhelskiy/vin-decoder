import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { useVehicleVariables } from '../../hooks/useVehicleVariables';
import styles from './VariableDetails.module.css';

export default function VariableDetails() {
  const { variableId } = useParams<{ variableId: string }>();
  const { data: variables, isLoading, isError } = useVehicleVariables();

  const variable = variables?.find((v) => v.ID === Number(variableId));

  if (isLoading) {
    return (
      <div className={styles.loaderWrapper}>
        <div className={styles.loader} />
        <p>Loading detailed information...</p>
      </div>
    );
  }

  if (isError || !variable) {
    return (
      <div className={styles.detailContainer}>
        <div className={styles.errorState}>
          <h2>An error occurred</h2>
          <p>Failed to find information for this variable.</p>
          <Link to="/variables" className={styles.backBtn}>
            <ArrowLeft size={16} />
            Back to list
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.detailContainer}>
      <Link to="/variables" className={styles.backBtn}>
        <ArrowLeft size={16} />
        Back to list
      </Link>

      <div className={styles.detailCard}>
        <header className={styles.detailHeader}>
          <div className={styles.detailGroup}>
            <BookOpen size={16} style={{ display: 'inline', marginRight: '0.5rem', marginBottom: '-0.1rem' }} />
            {variable.GroupName || 'General category'}
          </div>
          <h1 className={styles.detailName}>{variable.Name}</h1>
        </header>

        <section className={styles.detailContent}>
          <div dangerouslySetInnerHTML={{ __html: variable.Description || '<p>Description not available.</p>' }} />
        </section>

        <footer>
          <p style={{ marginTop: '3rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>
            Variable ID: {variable.ID} | Data Type: {variable.DataType}
          </p>
        </footer>
      </div>
    </div>
  );
}