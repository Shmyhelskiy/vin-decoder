import { type InputHTMLAttributes, type Ref } from 'react';
import styles from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
  ref?: Ref<HTMLInputElement>;
}

export const Input = ({ error, label, className, ref, ...props }: InputProps) => {
  return (
    <div className={styles.wrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        ref={ref}
        className={`${styles.input} ${error ? styles.inputError : ''} ${className || ''}`}
        {...props}
      />
    </div>
  );
};