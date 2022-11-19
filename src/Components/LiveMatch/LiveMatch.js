import React from 'react';
import Slider from 'react-slick';
import './LiveMatch.css'
import MatchSlider from './MatchSlider/MatchSlider';

const LiveMatch = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1820,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }

        ]

    };




    return (
        <div className=' w-3/4 mx-auto mb-20 '>
            <h1 className=' text-left text-2xl font-medium text-purple-900'>Upcomming Match</h1>
            <Slider {...settings} >

                <MatchSlider img={' https://www.rabbitholebd.com/_next/image?url=https%3A%2F%2Fdidbxtymavoia.cloudfront.net%2Fcms%2Fvideos%2F1667727434_M-41-260x372.jpg&w=1920&q=75'} />
                <MatchSlider img={' https://www.rabbitholebd.com/_next/image?url=https%3A%2F%2Fdidbxtymavoia.cloudfront.net%2Fcms%2Fvideos%2F1667746415_M-42-260x372.jpg&w=1920&q=75'} />
                <MatchSlider img={' https://www.rabbitholebd.com/_next/image?url=https%3A%2F%2Fdidbxtymavoia.cloudfront.net%2Fcms%2Fvideos%2F1667998212_M-43-1st-Semi-260x372.jpg&w=1920&q=75'} />
                <MatchSlider img={' https://www.rabbitholebd.com/_next/image?url=https%3A%2F%2Fdidbxtymavoia.cloudfront.net%2Fcms%2Fvideos%2F1668083049_M-44-nd-Semi-260x372.jpg&w=1920&q=75 '} />
                <MatchSlider img={' https://www.rabbitholebd.com/_next/image?url=https%3A%2F%2Fdidbxtymavoia.cloudfront.net%2Fcms%2Fvideos%2F1667721972_M-40-260x372.jpg&w=1920&q=75'} />
                <MatchSlider img={' https://www.rabbitholebd.com/_next/image?url=https%3A%2F%2Fdidbxtymavoia.cloudfront.net%2Fcms%2Fvideos%2F1667656082_M-39-260x372.jpg&w=1920&q=75'} />
                <MatchSlider img={' https://www.rabbitholebd.com/_next/image?url=https%3A%2F%2Fdidbxtymavoia.cloudfront.net%2Fcms%2Fvideos%2F1667656082_M-39-260x372.jpg&w=1920&q=75'} />
                <MatchSlider img={' https://www.rabbitholebd.com/_next/image?url=https%3A%2F%2Fdidbxtymavoia.cloudfront.net%2Fcms%2Fvideos%2F1667569758_M-38-260x372.jpg&w=1920&q=75 '} />
                <MatchSlider img={' https://www.rabbitholebd.com/_next/image?url=https%3A%2F%2Fdidbxtymavoia.cloudfront.net%2Fcms%2Fvideos%2F1667552214_M-37-260x372.jpg&w=1920&q=75'} />

            </Slider>
        </div>
    );
};

export default LiveMatch;