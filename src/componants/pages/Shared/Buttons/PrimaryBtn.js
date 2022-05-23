import React from 'react';

const PrimaryBtn = ({children}) => {
    return (
        <button class="btn btn-primary mt-5 text-white">{children}</button>
    );
};

export default PrimaryBtn;