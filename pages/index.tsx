import type { NextPage } from 'next';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react';
import CommonDialog from '../components/CommonDialog';
import CreateTask from '../components/CreateTask';
import CreateTab from '../components/CreateTab';

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpen2, setIsOpen2] = useState<boolean>(false);
  return (
    <div>
      <TextField label='name' variant='standard' />
      <TextField label='email' variant='standard' />
      <Button onClick={() => setIsOpen(true)} variant='contained'>
        button1
      </Button>
      <Button onClick={() => setIsOpen2(true)} variant='contained'>
        button2
      </Button>
      <CommonDialog isOpen={isOpen} setIsOpen={setIsOpen} isTransition={true}>
        <CreateTask />
      </CommonDialog>
      <CommonDialog isOpen={isOpen2} setIsOpen={setIsOpen2} isTransition={true}>
        <CreateTab />
      </CommonDialog>
    </div>
  );
};

export default Home;
