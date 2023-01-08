import { useEffect, useState } from "react";

const useProducts = () => {
    
    const [tools, setTools] = useState([]);
    
    useEffect(()=> {
        fetch('https://ec-cycle-parts.onrender.com/tools')
        .then(res => res.json())
        .then(data => setTools(data))
    }, [])
    
    return [tools, setTools];    
}

export default useProducts;