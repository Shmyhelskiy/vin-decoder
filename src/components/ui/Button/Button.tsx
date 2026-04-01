import type { ComponentPropsWithoutRef, ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  children: ReactNode;
  isLoading?: boolean;
}

export default function Button({ 
  children, 
  isLoading, 
  disabled, 
  className, 
  ...props 
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={`${styles.submitBtn} ${className || ""}`}
    >
      {isLoading ? (
        <div className={styles.loader} aria-label="Завантаження" />
      ) : (
        children
      )}
    </button>
  );
}