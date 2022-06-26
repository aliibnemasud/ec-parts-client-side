import { useEffect } from "react"
import { useState } from "react"

const useToSetToken = user => {
    
    const [token, setToken] = useState('');
    useEffect(()=>{

        const email = user.user.email;
        
        fetch ('http://localhost:5000/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({email}) 
       })
       .then(res => res.json())
       .then(data => {        
        localStorage.setItem('accessToken', data.accessToken)
       })

    } , [user])

    return [token]
}

export default useToSetToken;