import React from 'react';
import { Link } from 'react-router-dom';
import styles from './VariableItem.module.css';

interface VariableItemProps {
  variable: {
    ID: number;
    Name: string;
    GroupName?: string;
    Description?: string;
  };
}

const VariableItem = React.memo(({ variable }: VariableItemProps) => (
  <Link
    to={`/variables/${variable.ID}`}
    className={styles.listItem}
  >
    <div className={styles.leftContent}>
      <span className={styles.groupName}>{variable.GroupName || 'Other'}</span>
      <h3 className={styles.variableName}>{variable.Name}</h3>
    </div>
    <div 
      className={styles.rightContent}
      dangerouslySetInnerHTML={{ __html: variable.Description || 'Description not available.' }}
    />
  </Link>
));

VariableItem.displayName = 'VariableItem';

export default VariableItem;
