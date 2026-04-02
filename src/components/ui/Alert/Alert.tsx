import React from 'react';
import { AlertCircle, Info, type LucideIcon} from 'lucide-react';
import styles from './Alert.module.css';

type AlertType = 'error' | 'info';

interface AlertProps {
  type?: AlertType;
  children: React.ReactNode;
  icon?: LucideIcon;
  className?: string;
}

const defaultIcons: Record<AlertType, LucideIcon> = {
  error: AlertCircle,
  info: Info,
};

export const Alert: React.FC<AlertProps> = ({ 
  type = 'info', 
  children, 
  icon: Icon,
  className = ''
}) => {
  const DefaultIcon = defaultIcons[type];
  const FinalIcon = Icon || DefaultIcon;

  return (
    <div className={`${styles.alert} ${styles[type]} ${className}`}>
      <FinalIcon size={14} />
      <span>{children}</span>
    </div>
  );
};

export default Alert;
