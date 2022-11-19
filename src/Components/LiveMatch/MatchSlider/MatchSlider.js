import React from 'react';
import { AiOutlinePlayCircle } from "react-icons/ai";


const MatchSlider = ({ img }) => {
    return (
        <div className=' flex items-center justify-center h-[23rem]  '>
            <div className=' rounded-t-3xl flex flex-col w-[15rem] rounded-3xl shadow-lg shadow-gray-400 mx-auto mt-2'>
                <div className=' w-full rounded-3xl overflow-hidden relative h-80'>
                    <div className=' w-full  overflow-hidden hover:scale-110 transition-all duration-500 ease-in-out cursor-pointer box  '>
                        <img className=' rounded-3xl ' src={img} alt="imgfo" />
                        <div className=' icons absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'><AiOutlinePlayCircle className='text-gray-300 text-5xl' /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MatchSlider;