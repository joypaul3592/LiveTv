import React from 'react';
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarosuleItem from './CarosuleItem/CarosuleItem';


const Carosule = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        className: "center",
        centerPadding: "60px",
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: false,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                centerMode: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
            }
        }
        ]
    };
    return (
        <div className=' mt-6'>
            <Slider {...settings} className='h-80 overflow-hidden'>
                <CarosuleItem imgLink={"https://media.istockphoto.com/id/1334881512/photo/man-watching-soccer-match-on-tv.jpg?s=612x612&w=0&k=20&c=WS0Exm0uwIZRy94a4z_9EATSw_4FCCj3Bgcw6yrdrSM="} />
                <CarosuleItem imgLink={"https://media.istockphoto.com/id/1351329260/photo/woman-with-beer-watching-soccer-match-on-tv.jpg?s=612x612&w=0&k=20&c=2kvpOaKWPrzZB6YTIGi7TowGyvTt9QQvi6eTkclQ3YE="} />
                <CarosuleItem imgLink={"https://media.istockphoto.com/id/1334881640/photo/man-watching-movie-and-eating-potato-chips.jpg?s=612x612&w=0&k=20&c=ixqHRWhJavndG_gUfN4bauo8yMsSmFLY6KvSsNBNxD4="} />
                <CarosuleItem imgLink={"https://media.istockphoto.com/id/1351329563/photo/woman-with-beer-watching-basketball-match-on-tv.jpg?s=612x612&w=0&k=20&c=Lbk0qp0lR_KeomM4JU5b2OEvkaCYf-NJRUORT2U_rJ0="} />
            </Slider>
        </div>

    );
};

export default Carosule;