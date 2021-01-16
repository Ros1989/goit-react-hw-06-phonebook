import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

export const addItem = createAction('contacts/add', (name, number) => {
  return {
    payload: {
      id: uuidv4(),
      name,
      number,
    },
  };
});

export const deleteItem = createAction('contacts/delete');

export const changeFilter = createAction('filter/change');
