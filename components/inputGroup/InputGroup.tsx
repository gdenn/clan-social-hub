import React, { ReactNode } from 'react'
import styles from "./InputGroup.module.css"

interface InputGroupProps {
  label: string
  children: ReactNode
}

export const InputGroup = ({ children, label }: InputGroupProps) => (
  <div className={styles.inputGroup}>
    <h2>{label}</h2>
    {children}
  </div>
);