import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { AuthContext } from "../contextApi/AuthenticationContext";
import { auth } from "../firebase/firebase.config";
import useAxiosPublic from "./../hooks/useAxiosPublic";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const axiosPublic = useAxiosPublic();
  const [block, setBlock] = useState(1);

  // Create User
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // SignIn User
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // SignIn With Google
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // SignIn With Github
  const signInWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };

  // SignOut User
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // forget password
  const forgetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // update user info
  const updateUserInfo = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        let userInfo = { email: currentUser.email };
        const res = await axiosPublic.post("/secure-login", userInfo);

        if (res.data.token) {
          localStorage.setItem("access-token", res.data.token);
          setLoading(false);
        }
      } else {
        localStorage.removeItem("access-token");
        setLoading(false);
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const userInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    signInUser,
    signOutUser,
    signInWithGoogle,
    updateUserInfo,
    signInWithGithub,
    forgetPassword,
    block,
    setBlock,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
}
