import React from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";

const CardOption = () => {
    return (
        <div className=' flex items-center md:gap-10 gap-3'>
            <div class="flex justify-center">
                <div class="xl:w-28 w-20 relative">
                    <select id='hjo' class=" z-20 form-select appearance-none block w-full px-3 py-1.5 text-sm font-medium  text-gray-600 bg-transparent border border-gray-600 bg-clip-padding bg-no-repeat  rounded-md transition ease-in-out m-0 focus:text-gray-600 focus:outline-none cursor-pointer" >
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <label htmlFor="hjo">  <MdKeyboardArrowDown className=' absolute right-3 top-2 text-xl z-10' /></label>
                </div>
            </div>
            <div class="flex justify-center">
                <div class="xl:w-28 relative">
                    <select class="z-20 form-select appearance-none block w-full px-3 py-1.5 text-sm font-medium  text-gray-600 bg-transparent border border-gray-600 bg-clip-padding bg-no-repeat  rounded-md transition ease-in-out m-0 focus:text-gray-600 focus:outline-none cursor-pointer">
                        <option value="1">Action</option>
                        <option value="2">Commdy</option>
                        <option value="3">Romanch</option>
                    </select>
                    <MdKeyboardArrowDown className=' absolute right-3 top-2 text-xl' />
                </div>
            </div>
        </div>
    );
};

export default CardOption;