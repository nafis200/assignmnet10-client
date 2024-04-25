
import { createContext, useEffect, useState } from "react";

import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../firebase";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider();



const Authprovider = ({children}) => {
   
    const [users,setUsers] = useState()
    const [loading,setLoading] = useState(true)
    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
        
   }
   const signInUser = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
    
}
const logOut = ()=>{
     setLoading(true)
     return signOut(auth);
}
const signIngoogle = ()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
}

const signIngithub = ()=>{
     setLoading(true);
     return signInWithPopup(auth,githubProvider)
}

useEffect(()=>{
    const unSubscrive = onAuthStateChanged(auth, currentUser=>{
        console.log('observing current user inside useEffect', currentUser);
          setUsers(currentUser)
          setLoading(false)
         
     })
     return ()=>{
         unSubscrive()
     }
},[])

const authInfo = {users,createUser,signInUser,logOut,loading,signIngoogle,signIngithub}

    return (
        <AuthContext.Provider value = {authInfo}>
              {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;