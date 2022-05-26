import React, { ReactNode } from 'react'
import styles from './InputForm.module.css'

interface InputFormProps {
  children: ReactNode;
}

export const InputForm = ({ children }: InputFormProps) => (
  <div className={styles.inputForm}>
    <label>{children}</label>
    <input />
  </div>
);
