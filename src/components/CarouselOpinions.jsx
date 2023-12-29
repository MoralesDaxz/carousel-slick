import React, { Component } from "react";
import Slider from "react-slick";
import { reseñasData } from "../utils/reseñasData";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";   



export const NextArrow=(props)=> {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", alignItems: 'center', justifyContent: 'center', background: "#002f496b", borderRadius: '50px', height: '30px', width: '30px' }}
      onClick={onClick}
    />
  );
}

export const PrevArrow=(props)=> {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,zIndex:'10' ,display: "flex", alignItems: 'center', justifyContent: 'center', background: "#002f496b", borderRadius: '50px', height: '30px', width: '30px' }}
      onClick={onClick}
    />
  );
}
export const CarouselOpinions = () => {
  const settings = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],

  }; return (
    <div className="w-[85%] md:w-[92%] text-black" >
      <Slider {...settings}>
        {reseñasData.map((item, indice) => {
          return (
            <div className='bg-[#4c4848c4] rounded-lg backdrop-blur-sm py-[1rem] md:px-[1rem] px-[1rem] ' key={indice}>
              <div className=" bg-[#bbb9b9] rounded flex flex-col justify-between  h-[150px] p-2">
                <p className="text-[11px]  lg:text-[1rem]"><span >"</span>{item.reseña}<span >"</span></p>
                <div className="flex flex-row items-center gap-2">
                  <img className="rounded-[50px]" src={item.imagen} width={'40px'} height={'40px'}/>
                  <p className="parrafo"><span className="text-[--amarillo0] font-bold"> - </span>{item.autor}</p>
                </div>
              </div>
            </div>)
        })}
      </Slider>
    </div>
  );
}
