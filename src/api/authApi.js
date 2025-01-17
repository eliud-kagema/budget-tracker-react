import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "../firebase/config";

export const register = async (email, password, username) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return {
      uid: userCredential.user.uid,
      email: userCredential.user.email,
      username,
    };
  } catch (error) {
    console.error("Registration failed:", error.message);
    throw new Error("Registration failed. Please try again.");
  }
};

export const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return {
      uid: userCredential.user.uid,
      email: userCredential.user.email,
    };
  } catch (error) {
    console.error("Login failed:", error.message);
    throw new Error("Login failed. Check your credentials.");
  }
};
