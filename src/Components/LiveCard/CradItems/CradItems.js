import React from 'react';
import CradItem from './CradItem/CradItem';
const CradItems = () => {
    return (
        <div className=' max-w-7xl mx-auto mt-10 mb-10'>
            <div className='w-full flex flex-wrap gap-10  gap-y-10 justify-center mb-10 px-5'>
                <CradItem img={'https://www.rabbitholebd.com/_next/image?url=https%3A%2F%2Fdidbxtymavoia.cloudfront.net%2Fcms%2Fvideos%2F1654082484_Final-260x372.png&w=1920&q=75'} />
                <CradItem img={' https://www.rabbitholebd.com/_next/image?url=https%3A%2F%2Fdidbxtymavoia.cloudfront.net%2Fcms%2Fvideos%2F1654083046_Qualifier-2-260x372.png&w=1920&q=75'} />
                <CradItem img={' https://www.rabbitholebd.com/_next/image?url=https%3A%2F%2Fdidbxtymavoia.cloudfront.net%2Fcms%2Fvideos%2F1654166332_Eliminator-260x372.png&w=1920&q=75'} />
                <CradItem img={' https://www.rabbitholebd.com/_next/image?url=https%3A%2F%2Fdidbxtymavoia.cloudfront.net%2Fcms%2Fvideos%2F1654166332_Eliminator-260x372.png&w=1920&q=75'} />
                <CradItem img={' https://www.rabbitholebd.com/_next/image?url=https%3A%2F%2Fdidbxtymavoia.cloudfront.net%2Fcms%2Fvideos%2F1654166274_Qualifier-1-260x372.png&w=1920&q=75'} />
                <CradItem img={' https://www.rabbitholebd.com/_next/image?url=https%3A%2F%2Fdidbxtymavoia.cloudfront.net%2Fcms%2Fvideos%2F1654166217_M-70-260x372.png&w=1920&q=75'} />
                <CradItem img={'https://www.rabbitholebd.com/_next/image?url=https%3A%2F%2Fdidbxtymavoia.cloudfront.net%2Fcms%2Fvideos%2F1654166183_M-69-260x372.png&w=1920&q=75 '} />
                <CradItem img={'https://www.rabbitholebd.com/_next/image?url=https%3A%2F%2Fdidbxtymavoia.cloudfront.net%2Fcms%2Fvideos%2F1654166149_M-68-260x372.png&w=1920&q=75 '} />
                <CradItem img={' https://www.rabbitholebd.com/_next/image?url=https%3A%2F%2Fdidbxtymavoia.cloudfront.net%2Fcms%2Fvideos%2F1654166041_M-67-260x372.png&w=1920&q=75'} />
                <CradItem img={' https://www.rabbitholebd.com/_next/image?url=https%3A%2F%2Fdidbxtymavoia.cloudfront.net%2Fcms%2Fvideos%2F1654166013_M-66-260x372.png&w=1920&q=75'} />
                <CradItem img={'https://www.rabbitholebd.com/_next/image?url=https%3A%2F%2Fdidbxtymavoia.cloudfront.net%2Fcms%2Fvideos%2F1654165980_M-65-260x372.png&w=1920&q=75 '} />
                <CradItem img={' https://www.rabbitholebd.com/_next/image?url=https%3A%2F%2Fdidbxtymavoia.cloudfront.net%2Fcms%2Fvideos%2F1654082484_Final-260x372.png&w=1920&q=75'} />
                <CradItem img={'https://www.rabbitholebd.com/_next/image?url=https%3A%2F%2Fdidbxtymavoia.cloudfront.net%2Fcms%2Fvideos%2F1654166332_Eliminator-260x372.png&w=1920&q=75 '} />
                <CradItem img={'https://www.rabbitholebd.com/_next/image?url=https%3A%2F%2Fdidbxtymavoia.cloudfront.net%2Fcms%2Fvideos%2F1654166183_M-69-260x372.png&w=1920&q=75 '} />
                <CradItem img={' https://www.rabbitholebd.com/_next/image?url=https%3A%2F%2Fdidbxtymavoia.cloudfront.net%2Fcms%2Fvideos%2F1654165980_M-65-260x372.png&w=1920&q=75'} />
            </div>
            <button
                className=" lg:ml-8 ml-4 relative inline-flex items-center justify-center px-8 py-2 overflow-hidden font-mono font-medium tracking-tighter text-purple-800 hover:text-white border border-purple-800  rounded-full group transition-all duration-700 ease-out"
            >
                <span class="absolute w-0 h-0 transition-all duration-700 ease-out bg-purple-800 rounded-full group-hover:w-60 group-hover:h-56 "></span>
                <span class="absolute inset-0 w-full h-full  rounded-full opacity-30 transition-all duration-700 ease-out"></span>
                <span class="relative text-[13px] font-semibold">Show more</span>

            </button>
        </div>
    );
};

export default CradItems;