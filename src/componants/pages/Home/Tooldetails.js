import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Tooldetails = () => {
    const { toolsid } = useParams();

    const [tools, setProduct] = useState({});
    const { name } = tools;
    console.log(tools);

    useEffect(() => {
        const url = `http://localhost:5000/tools/${toolsid}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    return (
        <div>
            <h1>Name: {name} </h1>
        </div>
    );
};

export default Tooldetails;