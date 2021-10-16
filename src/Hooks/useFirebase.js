import { useEffect, useState } from "react"
import { GoogleAuthProvider,  getAuth, signInWithPopup ,onAuthStateChanged, signOut} from "firebase/auth";
import initializeAuthentication from "../pages/login/Firebase/firebase.init";

initializeAuthentication()
const useFirebase = () =>{
    
 const [user, setUser] = useState({}) 
 const [error, setError] = useState({}) 
 const [isLoading, setIsLoading] = useState(true)

 const googleProvider = new GoogleAuthProvider();
 const auth = getAuth();

 const signInGoogle =()=>{
     setIsLoading(true)
    signInWithPopup(auth, googleProvider)
    .then((result) => {
        console.log(result.user); 
        setUser(result.user) 
      })
     .finally(()=> setIsLoading(false))
 }


 // google sign out
 const logOut =()=>{
     setIsLoading(true)
    signOut(auth)
    .then((result) => {
        setUser(result)
      })
      .finally(()=> setIsLoading(false))
 }

 // observe user state change
    useEffect(()=>{
       const unsubscribed = onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false)
          
        })
        return ()=> unsubscribed ;
    
    },[])
 
    return {
        signInGoogle ,
        isLoading,
        user,
        logOut
    };

}
export default useFirebase ;