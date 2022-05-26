import React, { ReactNode } from 'react'
import styles from './Button.module.css'

interface ButtonProps {
  children: ReactNode;
}

interface ButtonGroupProps {
  children: ReactNode;
}

export const ButtonGroup = ({ children }: ButtonGroupProps) => (
  <div className={styles.buttonGroup}>{children}</div>
);

export const Button = ({ children }: ButtonProps) => (
  <div className={styles.button}>{children}</div>
);