import React from 'react';

const CarosuleItem = (img) => {
    return (
        <div className=' h-[18rem]'>
            <div className=' relative w-11/12 mx-auto h-full bg-black rounded-3xl overflow-hidden'>
                <img className=' z-10 w-full h-full rounded-3xl hover:scale-110 transition-all duration-500 ease-in-out opacity-60' src={img?.imgLink} alt="sports" />
                <div className='z-40  absolute bottom-4 left-[10%] text-left'>
                    <h1 className=' text-[22px] font-semibold  text-yellow-400 '>SpaceX TV</h1>
                    <p className=' text-sm font-medium  text-white'>Argentina <span className=' px-2'>vs</span> Arazil</p>
                </div>
            </div>
        </div>
    );
};

export default CarosuleItem;