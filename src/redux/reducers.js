import {
    ADD_TRANSACTION,
    EDIT_TRANSACTION,
    DELETE_TRANSACTION,
    SET_TRANSACTION_TO_EDIT,
    SET_CURRENT_ID,
  } from './actions';
  
  const initialState = {
    transactions: [],
    transactionToEdit: null,
    currentId: 1,
  };
  
  const transactionReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TRANSACTION:
        return {
          ...state,
          transactions: [...state.transactions, action.payload],
          currentId: state.currentId + 1,
        };
      case EDIT_TRANSACTION:
        return {
          ...state,
          transactions: state.transactions.map((transaction) =>
            transaction.id === action.payload.id ? action.payload : transaction
          ),
          transactionToEdit: null,
        };
      case DELETE_TRANSACTION:
        return {
          ...state,
          transactions: state.transactions.filter(
            (transaction) => transaction.id !== action.payload
          ),
        };
      case SET_TRANSACTION_TO_EDIT:
        return {
          ...state,
          transactionToEdit: action.payload,
        };
      case SET_CURRENT_ID:
        return {
          ...state,
          currentId: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default transactionReducer;
  