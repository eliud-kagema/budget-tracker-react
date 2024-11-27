export const ADD_TRANSACTION = 'ADD_TRANSACTION';
export const EDIT_TRANSACTION = 'EDIT_TRANSACTION';
export const DELETE_TRANSACTION = 'DELETE_TRANSACTION';
export const SET_TRANSACTION_TO_EDIT = 'SET_TRANSACTION_TO_EDIT';
export const SET_CURRENT_ID = 'SET_CURRENT_ID';

export const addTransaction = (transaction) => ({
  type: ADD_TRANSACTION,
  payload: transaction,
});

export const editTransaction = (transaction) => ({
  type: EDIT_TRANSACTION,
  payload: transaction,
});

export const deleteTransaction = (id) => ({
  type: DELETE_TRANSACTION,
  payload: id,
});

export const setTransactionToEdit = (transaction) => ({
  type: SET_TRANSACTION_TO_EDIT,
  payload: transaction,
});

export const setCurrentId = (id) => ({
  type: SET_CURRENT_ID,
  payload: id,
});
