// src/auth/authFunctions.js
import { auth } from "../firebase-config";

export const logout = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    console.error("Error on logout:", error);
  }
};
