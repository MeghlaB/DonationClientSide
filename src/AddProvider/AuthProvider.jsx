import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import React, { useEffect, useState } from 'react'

import { createContext } from 'react'
import auth from '../Firebase/Firebase_init'
import { signInWithEmailAndPassword } from 'firebase/auth/cordova'

export const AuthContext = createContext(null)
const Provider = new GoogleAuthProvider();



export default function AuthProvider({children}) {
  const[isDarkmode , setDarkmode]= useState(false)
  useEffect(()=>{
    if(isDarkmode){
      document.body.classList.add('dark')
    }
    else{
      document.body.classList.remove('dark')
    }
  },[isDarkmode])

    const[user , setUser] = useState(null) 
    const [loading, setLoading] = useState(true)

    const creatUser = (email,passWord)=>{
        setLoading (true)
        return createUserWithEmailAndPassword(auth,email,passWord)
    }

    const loginuser = (email,passWord)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,passWord)
    }
    
    const UpdateProfile = (updateData)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,updateData)
      }

      const GoogleLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth ,Provider)
      }

      const logout =()=>{
        setLoading(true)
        return signOut(auth)
      }

    useEffect(()=>{
        const Unsubscribed  = onAuthStateChanged(auth,(currentUser)=>{
          setUser(currentUser)
          setLoading(false)
        })
          return ()=>[
            Unsubscribed()
          ]
      },[])

   const  useInfo ={
    loading,
    user,
    logout,
    setLoading,
    setUser,
    creatUser,
    loginuser,
    UpdateProfile,
    GoogleLogin,
    isDarkmode , 
    setDarkmode

   }



  return (
   <AuthContext.Provider value={useInfo}>
    {children}
   </AuthContext.Provider>
  )
}
