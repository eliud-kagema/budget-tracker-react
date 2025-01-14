import { auth } from "../../firebase/config";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";

export const login = (email, password) => async (dispatch) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    dispatch({ type: "LOGIN_SUCCESS", payload: userCredential.user });
  } catch (error) {
    dispatch({ type: "LOGIN_ERROR", payload: error.message });
  }
};

export const register = (email, password) => async (dispatch) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    dispatch({ type: "REGISTER_SUCCESS", payload: userCredential.user });
  } catch (error) {
    dispatch({ type: "REGISTER_ERROR", payload: error.message });
  }
};

export const logout = () => async (dispatch) => {
  try {
    await signOut(auth);
    dispatch({ type: "LOGOUT_SUCCESS" });
  } catch (error) {
    dispatch({ type: "LOGOUT_ERROR", payload: error.message });
  }
};
