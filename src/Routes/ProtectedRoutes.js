import React from 'react'
import { Outlet  , Navigate  } from 'react-router-dom'



export default function ProtectedRoutes() {
    let userid
    if(JSON.parse(localStorage.getItem("user"))==null){
        userid = false
      }else{
        userid=true; 
    
      }
      console.log("trueorfalse",userid)
     

    return (
       <>
       {userid ? <Outlet /> : <Navigate to="/login" />};
       </>
        
    )

       
    
    
}
