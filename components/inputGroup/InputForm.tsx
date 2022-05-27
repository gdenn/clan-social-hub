import React, { ReactNode } from 'react'
import styles from "./InputForm.module.scss"

interface InputFormProps {
  children: ReactNode
  large?: boolean
}

export const InputForm = ({ children, large }: InputFormProps) => (
  <div className={`${large ? styles.inputFormLarge : styles.InputForm}`}>
    <label>{children}</label>
    <input/>
  </div>
);
