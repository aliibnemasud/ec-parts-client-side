import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');

    useEffect(()=> {        
        const email = user?.user?.email;
        const currentuser = {email: email};
        if(email){
       
            const url = `https://floating-dusk-82041.herokuapp.com/users/${email}`;
            fetch(url, {
                method: 'PUT',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentuser)          
            })
            .then(res => res.json())
            .then(data => console.log(data))
        }
    }, [user])

    return [token]
}

export default useToken;