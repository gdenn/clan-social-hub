import type { NextPage } from 'next'
import { ReactNode } from 'react';
import Layout from '../components/layout/Layout'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <InputGroup label="New Event">
          <InputForm>Title</InputForm>
          <InputForm>Description</InputForm>
          <DatePicker />
          <ButtonGroup>
            <Button>Create</Button>
          </ButtonGroup>
        </InputGroup>
      </div>
    </Layout>
  );
}

interface InputFormProps {
  children: ReactNode
}

interface InputGroupProps {
  label: string
  children: ReactNode
}

interface LabelProps {
  children: ReactNode
}

interface ButtonProps {
  children: ReactNode
}

interface ButtonGroupProps {
  children: ReactNode
}

const DatePicker = () => (
  <div className={styles.datePicker}>
    <InputForm>Date</InputForm>
  </div>
)

const InputGroup = ({ children, label }: InputGroupProps) => (
  <div className={styles.inputGroup}>
    <h2>{label}</h2>
    {children}
  </div>
);

const Label = ({ children }: LabelProps) => (
  <h2>{children}</h2>
)

const InputForm = ({ children }: InputFormProps) => (
  <div className={styles.inputForm}>
    <label>{children}</label>
    <input />
  </div>
);

const ButtonGroup = ({ children }: ButtonGroupProps) => (
  <div className={styles.buttonGroup}>{children}</div>
)

const Button = ({ children }: ButtonProps) => (
  <div className={styles.button}>{children}</div>
)

export default Home
