import React from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";

const CardHeadding = () => {
    return (
        <div className=' px-5 rounded-xl max-w-7xl mx-auto h-20 bg-gray-200 flex items-center justify-between'>

            <div class="flex justify-center">
                <div class="xl:w-32 relative">
                    <select class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-none focus:outline-none cursor-pointer" aria-label="Default select example">
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <MdKeyboardArrowDown className=' absolute right-2 top-2 text-xl' />
                </div>
            </div>

        </div>
    );
};

export default CardHeadding;