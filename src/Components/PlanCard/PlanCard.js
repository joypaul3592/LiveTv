import React from 'react';
import PlanCardItem from './PlanCardItem/PlanCardItem';

const PlanCard = () => {
    return (
        <div className=' max-w-7xl mx-auto '>
            <div className=' px-5'>
                <div className=' text-left'>
                    <h1 className=' text-2xl font-semibold text-purple-900 '>Select your plan</h1>
                    <p className='mt-1 font-medium text-gray-600'>No hidden fees, equipment rentals, or installation appointments.</p>
                </div>
                <PlanCardItem />
            </div>
        </div>
    );
};

export default PlanCard;