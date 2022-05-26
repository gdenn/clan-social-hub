import React from 'react'
import { InputForm } from '../inputGroup/InputForm';
import styles from './DatePicker.module.css'

export const DatePicker = () => (
  <div className={styles.datePicker}>
    <InputForm>Date</InputForm>
  </div>
);
