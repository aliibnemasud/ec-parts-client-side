import React from 'react';

const BusinessSummaryDetail = ({icon, total, service}) => {
    return (
        <div class="card bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={icon} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title text-5xl font-bold mb-3">{total}</h2>
                <p>{service}</p>                
            </div>
        </div>
    );
};

export default BusinessSummaryDetail;