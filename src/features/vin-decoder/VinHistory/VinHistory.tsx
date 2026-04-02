import React, { useState, useEffect } from 'react';
import { useVinHistoryStore } from '../../../store/vin-history-store';
import styles from './VinHistory.module.css';
import { Link } from 'react-router-dom';

const VinHistory: React.FC = () => {
  const history = useVinHistoryStore((state) => state.history);
  const [selectedVin, setSelectedVin] = useState<string | null>(null);

  const latestVin = history[0]?.vin;

  useEffect(() => {
    if (latestVin) {
      setSelectedVin(latestVin);
    }
  }, [latestVin]);

  const activeItem = history.find((item) => item.vin === selectedVin);

  if (history.length === 0) return null;
  console.log( activeItem)

  return (
    <div className={styles.resultsContainer}>
      <div className={styles.historyNav}>
        {history.map((item) => (
          <button
            key={item.vin}
            className={`${styles.navItem} ${selectedVin === item.vin ? styles.navItemActive : ''}`}
            onClick={() => setSelectedVin(item.vin)}
          >
            {item.vin}
          </button>
        ))}
      </div>

      <div className={styles.tableWrapper}>
    
          <table className={styles.resultsTable}>
            <thead>
              <tr>
                <th>Property</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {activeItem?.data.map((item, index) => (
                <tr key={`${item.VariableId}-${index}`}>
                  <td className={styles.variableCell}>
                    <Link to={`/variables/${item.VariableId}`} className={styles.variableLink}>
                      {item.Variable} 
                    </Link>
                    </td>
                  <td className={styles.valueCell}>{item.Value}</td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
    </div>
  );
};

export default VinHistory;