import { auth, db } from "../firebase/config";

// Register user function
export const register = async (email, password, username) => {
  try {
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;

    // Store additional user data in Firestore
    await db.collection("users").doc(user.uid).set({
      username: username,
      email: email,
    });

    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};
