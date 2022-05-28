import { useEffect, useState } from "react"

const useAdmin = user => {
    
    const [admin, setAdmin] = useState(false);   
    
    useEffect(()=> {
      const email = user?.email;

      if(email){
          fetch(`https://floating-dusk-82041.herokuapp.com/user/admin/${email}`, {
              method: 'GET',
              headers:{
                'content-type': 'application/json'
              }
          })          
          .then(res => res.json())
          .then(data => {
            setAdmin(data.admin)                       
          })
      }           
     
    }, [user])

        return [admin];
    }

export default useAdmin;
