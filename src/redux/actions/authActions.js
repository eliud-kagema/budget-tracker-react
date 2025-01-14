import { login, register } from "../../api/authApi";

// Action Types
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

// Login Action
export const loginAction = (email, password) => async (dispatch) => {
  try {
    const user = await login(email, password);
    dispatch({ type: LOGIN_SUCCESS, payload: user });
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error.message });
  }
};

// Register Action
export const registerAction = (email, password, username) => async (dispatch) => {
  try {
    const user = await register(email, password, username);
    dispatch({ type: REGISTER_SUCCESS, payload: user });
  } catch (error) {
    dispatch({ type: REGISTER_FAILURE, payload: error.message });
  }
};
