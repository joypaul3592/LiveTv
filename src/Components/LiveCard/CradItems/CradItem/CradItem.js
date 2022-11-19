import React from 'react';
import './CradItem.css'
import { AiOutlinePlayCircle } from "react-icons/ai";

const CradItem = ({ img }) => {

    return (
        <div>
            <div className=' rounded-t-[20px] flex flex-col w-[15rem] rounded-[20px]  '>
                <div className=' w-full rounded-[20px] overflow-hidden relative h-80'>
                    <div className=' w-full  overflow-hidden hover:scale-110 transition-all duration-500 ease-in-out cursor-pointer box  '>
                        <img className=' rounded-[20px] ' src={img} alt="imgfo" />
                        <div className=' icons absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'><AiOutlinePlayCircle className='text-gray-300 text-5xl' /></div>
                    </div>
                </div>
                <div className=' text-center my-2 mb-3 pl-2'>
                    <h1 className=' text-xl font-semibold text-purple-800 headding'>The Dictator</h1>
                    <p className=' text-sm font-medium '>Free <span className=' px-3'>Action</span> 2019</p>
                </div>
            </div>
        </div>
    );
};

export default CradItem;