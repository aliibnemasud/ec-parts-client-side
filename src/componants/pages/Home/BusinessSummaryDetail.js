import React from 'react';

const BusinessSummaryDetail = ({icon, total, service}) => {
    return (
        <div className="card bg-base-100 hover:shadow-xl">
            <figure className="px-10 pt-10">
                <img src={icon} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-5xl font-bold mb-3">{total}</h2>
                <p>{service}</p>
            </div>
        </div>
    );
};

export default BusinessSummaryDetail;