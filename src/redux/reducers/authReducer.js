import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGOUT, // New action type
  } from "../actions/authActions";
  
  // Initial state
  const initialState = {
    user: null,
    error: null,
    isAuthenticated: false,
  };
  
  // Reducer function
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_SUCCESS:
        return {
          ...state,
          user: action.payload,
          isAuthenticated: true,
          error: null,
        };
      case LOGIN_FAILURE:
        return {
          ...state,
          error: action.payload,
        };
      case REGISTER_SUCCESS:
        return {
          ...state,
          user: action.payload,
          isAuthenticated: true,
          error: null,
        };
      case REGISTER_FAILURE:
        return {
          ...state,
          error: action.payload,
        };
      case LOGOUT: // Handle logout by resetting user state
        return {
          ...state,
          user: null,
          isAuthenticated: false,
          error: null,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  