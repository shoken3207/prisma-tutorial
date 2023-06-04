import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react';
import CommonDialog from '../components/CommonDialog';

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div>
      <TextField label='name' variant='standard' />
      <TextField label='email' variant='standard' />
      <Button onClick={() => setIsOpen(true)} variant='contained'>
        button
      </Button>
      <CommonDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isTransition={false}
        dialogTitle='test'
      >
        <h1>aaa</h1>
      </CommonDialog>
    </div>
  );
};

export default Home;
