import React from 'react';
import CardOption from './CardOption/CardOption';
import CradButton from './CradButton/CradButton';

const CardHeadding = () => {
    return (
        <div className='px-5'>
            <div className='flex items-center justify-between px-5 py-3.5 bg-gray-100  rounded-xl  max-w-7xl mx-auto '>
                <CardOption />
                <CradButton />
            </div>

        </div>
    );
};

export default CardHeadding;