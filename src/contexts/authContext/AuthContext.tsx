// create auth context and wrapper
import React, { useEffect, createContext, useReducer } from "react";

// import { auth } from "../../firebase";
import { auth, db } from "../../services/firebase";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  getAuth,
  deleteUser,
  onAuthStateChanged,
  signOut,
  getAdditionalUserInfo,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

// create context
const AuthContext = createContext<any>(null);

// create provider
const AuthProvider = ({ children }: any) => {
  // create initial state
  const initialState = {
    currentUser: null,
    // tokenManger: null,
    loading: true,
    error: null,
    isAuthenticated: false,
    isError: false,
  };

  // create reducer
  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "LOGIN":
        return {
          ...state,
          currentUser: action.payload.user,
          // tokenManager: action.payload.tokenManager,
          isAuthenticated: true,
          isError: false,
          loading: false,
        };
      case "LOGOUT":
        return {
          ...state,
          currentUser: null,
          // tokenManager: null,
          isAuthenticated: false,
          isError: false,
          loading: false,
        };
      case "ERROR":
        return {
          ...state,
          error: action.payload.error,
          isError: true,
          loading: false,
        };
      default:
        return state;
    }
  };

  // create state
  const [authState, authDispatch] = useReducer(reducer, initialState);

  // Create signin with email, google, and github functions
  function signinWithEmail(email: string, password: string) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        //get access token, expiration time, and refresh token
        // const tokenManager = user["stsTokenManager" as keyof typeof user];
        if (user) {
          authDispatch({
            type: "LOGIN",
            payload: { user: user },
          });
        } else {
          authDispatch({
            type: "ERROR",
            payload: { error: "User not found" },
          });
        }
        // ...
      })
      .catch((error) => {
        if (error.code === "auth/wrong-password") {
          authDispatch({
            type: "ERROR",
            payload: { error: "Invalid credentials" },
          });
        } else {
          authDispatch({
            type: "ERROR",
            payload: { error: error.message },
          });
        }
      });
  }

  function signinWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential!.accessToken;
        const user = result.user;
        if (getAdditionalUserInfo(result)!.isNewUser) {
          deleteUser(user!).then(() => {
            authDispatch({
              type: "ERROR",
              payload: { error: "Please sign up first" },
            });
          });
        } else {
          authDispatch({
            type: "LOGIN",
            payload: { user: user },
          });
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        authDispatch({
          type: "ERROR",
          payload: { error: errorMessage },
        });
        // ...
      });
  }

  // Create signout function
  function signout() {
    signOut(auth)
      .then(() => {
        authDispatch({
          type: "LOGOUT",
        });
      })
      .catch((error) => {
        authDispatch({
          type: "ERROR",
          payload: { error: error.message },
        });
      });
  }

  // create signup function
  function signupWithEmail(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    isWriter: boolean
  ) {
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        // Signed in
        const user = userCredential.user;

        // add new doucment to users collection
        setDoc(doc(db, "users", user.uid), {
          email: email,
          firstName: firstName,
          lastName: lastName,
          isWriter: isWriter,
        })
          .then(() => {
            authDispatch({
              type: "LOGIN",
              payload: { user: user },
            });
          })
          .catch((error) => {
            const user = getAuth().currentUser;
            deleteUser(user!)
              .then(() => {
                throw new Error("Signup failed. Please try again.");
              })
              .catch((error) => {
                throw new Error("Signup failed. Please try again.");
              });
          });
      }
    );
  }

  function signupWithGoogleAsReader() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        if (!getAdditionalUserInfo(result)!.isNewUser) {
          signOut(auth)
            .then(() => {
              authDispatch({
                type: "ERROR",
                payload: { error: "Account already exists. Please sign in." },
              });
            })
            .catch((error) => {
              authDispatch({
                type: "ERROR",
                payload: { error: error.message },
              });
            });
          return;
        }
        setDoc(doc(db, "users", user.uid), {
          email: user.email,
          firstName: user.displayName!.split(" ")[0],
          lastName: user.displayName!.split(" ")[1],
          isWriter: false,
        })
          .then(() => {
            authDispatch({
              type: "LOGIN",
              payload: { user: user },
            });
          })
          .catch((error) => {
            const user = getAuth().currentUser;
            deleteUser(user!)
              .then(() => {
                authDispatch({
                  type: "ERROR",
                  payload: { error: error.message },
                });
              })
              .catch((error) => {
                authDispatch({
                  type: "ERROR",
                  payload: { error: error.message },
                });
              });
          });
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        // const email = error.email;
        // const credential = GoogleAuthProvider.credentialFromError(error);
        authDispatch({
          type: "ERROR",
          payload: { error: errorMessage },
        });
        // ...
      });
  }

  function signupWithGoogleAsWriter() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        setDoc(doc(db, "users", user.uid), {
          email: user.email,
          firstName: user.displayName!.split(" ")[0],
          lastName: user.displayName!.split(" ")[1],
          isWriter: true,
        })
          .then(() => {
            authDispatch({
              type: "LOGIN",
              payload: { user: user },
            });
          })
          .catch((error) => {
            const user = getAuth().currentUser;
            deleteUser(user!)
              .then(() => {
                authDispatch({
                  type: "ERROR",
                  payload: { error: error.message },
                });
              })
              .catch((error) => {
                authDispatch({
                  type: "ERROR",
                  payload: { error: error.message },
                });
              });
          });
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        // const email = error.email;
        // const credential = GoogleAuthProvider.credentialFromError(error);
        authDispatch({
          type: "ERROR",
          payload: { error: errorMessage },
        });
        // ...
      });
  }

  // Create value for provider
  const value = {
    authState,
    signinWithEmail,
    signinWithGoogle,
    signout,
    signupWithEmail,
    signupWithGoogleAsReader,
    signupWithGoogleAsWriter,
  };

  // Create useEffect to check for user on mount
  useEffect(() => {
    // const user = ls.get("user");
    // const token = ls.get("token");
    // if (user && token) {
    //   authDispatch({
    //     type: "REFRESH",
    //     payload: { user: user, token: token },
    //   });
    // }
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userObj = user;
        authDispatch({
          type: "LOGIN",
          payload: { user: userObj },
        });
      } else {
        authDispatch({
          type: "LOGOUT",
        });
      }
    });
  }, []);

  // return provider
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuthContext = () => React.useContext(AuthContext);

export { AuthProvider, useAuthContext };
