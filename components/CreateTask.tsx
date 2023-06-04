import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel, TextField } from '@mui/material';
import React, { useState } from 'react';
import { pink } from '@mui/material/colors';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import CreateIcon from '@mui/icons-material/Create';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import { InputTask } from '../types/task/InputTask';

const CreateTask = () => {
  const [task, setTask] = useState<InputTask>({
    title: '',
    content: '',
    userId: undefined,
    tabId: undefined,
    isImportant: false,
    deadLine: null,
  });

  return (
    <SCard>
      <STitle>タスクを作成</STitle>
      <SForm>
        <TextField
          label='タイトルを入力（必須）'
          variant='standard'
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          value={task.title}
        />
        <TextField
          label='詳細を入力（任意）'
          variant='standard'
          multiline
          onChange={(e) => setTask({ ...task, content: e.target.value })}
          rows={4}
          value={task.content}
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
            label='実施日を入力（任意）'
            inputFormat='yyyy/MM/dd'
            onChange={(selectDate) =>
              setTask({ ...task, deadLine: selectDate })
            }
            value={task.deadLine}
            renderInput={(params) => (
              <TextField variant='standard' {...params} fullWidth />
            )}
          />
        </LocalizationProvider>
        <FormControlLabel
          label='重要なタスク'
          control={
            <Checkbox
              color='success'
              checked={task.isImportant}
              onChange={(e) =>
                setTask({ ...task, isImportant: e.target.checked })
              }
            />
          }
        />
      </SForm>
      <SButtonGroup>
        <Button
          startIcon={<RestartAltIcon />}
          variant='contained'
          color='error'
          disabled={
            task.title === '' &&
            task.content === '' &&
            task.deadLine === null &&
            task.isImportant === false
          }
          onClick={() =>
            setTask({
              title: '',
              content: '',
              userId: undefined,
              tabId: undefined,
              isImportant: false,
              deadLine: null,
            })
          }
        >
          リセット
        </Button>
        <Button startIcon={<CreateIcon />} variant='contained' color='success'>
          作成
        </Button>
      </SButtonGroup>
    </SCard>
  );
};

export default CreateTask;

const SCard = styled.div`
  width: 90%;
  padding: 1.6rem 1rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  row-gap: 1.8rem;
`;

const STitle = styled.h2`
  font-size: 1.5rem;
`;

const SForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 1.7rem;
`;

const SButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 2rem;
`;
