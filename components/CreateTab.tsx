import React, { useState } from 'react';
import styled from 'styled-components';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';
import { InputTab } from '../types/tab/InputTab';

const CreateTab = () => {
  const [tab, setTab] = useState<InputTab>({
    userId: undefined,
    tabName: '',
  });

  return (
    <SCard>
      <STitle>タブを作成</STitle>
      <TextField
        label='タブの名前を入力（必須）'
        variant='standard'
        onChange={(e) => setTab({ ...tab, tabName: e.target.value })}
        value={tab.tabName}
      />

      <SButtonContainer>
        <Button
          startIcon={<CreateIcon />}
          size='small'
          variant='contained'
          color='success'
        >
          タブを作成
        </Button>
      </SButtonContainer>
    </SCard>
  );
};

export default CreateTab;

const SCard = styled.div`
  width: 90%;
  padding: 1.5rem 0.5rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  row-gap: 2.5rem;
`;

const STitle = styled.h2`
  font-size: 1.4rem;
`;

const SButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
