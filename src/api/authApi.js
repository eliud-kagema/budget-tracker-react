import { auth, db } from "../firebase/config";

// Register function
export const register = async (email, password, username) => {
  try {
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;

    await db.collection("users").doc(user.uid).set({
      username: username,
      email: email,
    });

    return user;
  } catch (error) {
    console.error("Registration error:", error);
    throw new Error("Registration failed. Please try again.");
  }
};

// Login function
export const login = async (email, password) => {
  try {
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Login error:", error);
    throw new Error("Login failed. Check your credentials and try again.");
  }
};
