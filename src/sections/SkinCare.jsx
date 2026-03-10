import React from 'react'
import skincare from '../util/skincare'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import './styles/SkinCare.scss'
const SkinCare = () => {
  return (
    <div className='inner skincare-inner'>
      <div className="t-wrap">
        <h2 className="tit">
          Ji-Cheon-gu-gok <br />
          The river that makes
          us live
        </h2>
        <p className="txt">
          댐을 짓지 말고 강을 있는 그대로 흐르게 해주세요.
        </p>
        <a href="#" className="btn">
          자세히 보기
        </a>
      </div>
      <div className="slider-wrap">
        <div className="in">
          <Swiper 
          slidesPerView={2}
          spaceBetween={30}
          loop={true}
          className="skincare-slider">
            {skincare.map((sl)=>(

            <SwiperSlide 
            style={{backgroundImage:`url(${sl.image})`}}
            key={sl.id} >
              <a href={sl.link}>
              {sl.id}
              </a>
            </SwiperSlide>
            ))}

          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default SkinCare