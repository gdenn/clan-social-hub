import type { NextPage } from 'next'

import { DatePicker } from '../components/datePicker/DatePicker';
import { Button, ButtonGroup } from '../components/inputGroup/Button';
import { InputForm } from '../components/inputGroup/InputForm';
import { InputGroup } from '../components/inputGroup/InputGroup';
import Layout from '../components/layout/Layout'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Layout>
      {/* <div className={styles.container}>
        <InputGroup label="New Event">
          <InputForm>Title</InputForm>
          <InputForm>Description</InputForm>
          <DatePicker />
          <ButtonGroup>
            <Button>Create</Button>
          </ButtonGroup>
        </InputGroup>
      </div> */}
    </Layout>
  );
}




export default Home
