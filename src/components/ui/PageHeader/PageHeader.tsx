import React from 'react';
import styles from './PageHeader.module.css';

interface PageHeaderProps {
  title: string;
  description?: string;
  titleTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'div';
  size?: 'small' | 'large';
  centered?: boolean;
  className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  titleTag = 'h1',
  size = 'large',
  centered = true,
  className = '',
}) => {
  const HeadingTag = titleTag as any;
  
  return (
    <div className={`${styles.header} ${styles[size]} ${centered ? styles.centered : ''} ${className}`}>
      <HeadingTag className={styles.title}>
        {title}
      </HeadingTag>
      {description && (
        <p className={styles.description}>
          {description}
        </p>
      )}
    </div>
  );
};

export default PageHeader;
