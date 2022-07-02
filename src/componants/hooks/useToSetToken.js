import { useEffect } from "react"
import { useState } from "react"

const useToSetToken = user => {
    
    const [token, setToken] = useState('');
    useEffect(()=>{

        const email = user.user.email;
        
        fetch ('https://floating-dusk-82041.herokuapp.com/login', {
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