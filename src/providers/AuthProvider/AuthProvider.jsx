import { createContext } from "react";
import { auth } from "../../firebase/firebase.config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const createUser = ( email, password) =>{
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () =>{
        signOut(auth)
    }
    const authInfo = {
        createUser,
        signInUser,
        logout
    }
    return (
   <AuthContext.Provider value={authInfo}>
     {children}
   </AuthContext.Provider>
    );
};

export default AuthProvider;