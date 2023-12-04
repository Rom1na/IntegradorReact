import React from 'react'

const SwiperSlide = ({children, ...props}) => {
  /* No esta siendo utilizada*/  
  return <swiper-slide {...props}> {children} </swiper-slide>
};

export default SwiperSlide;