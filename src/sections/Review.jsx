import React, {useEffect, useRef} from 'react';
import {reviewData} from '../util/review';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation, EffectCube } from 'swiper/modules';
import './styles/Review.scss'
import 'swiper/css/effect-cube';
const Review = () => {

  

  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const swiperRef = useRef(null)

  useEffect(() => {
  
      if (swiperRef.current &&
        swiperRef.current.params &&
        prevRef.current &&
        nextRef.current
      ) {
        swiperRef.current.params.navigation.prevEl = prevRef.current
        swiperRef.current.params.navigation.nextEl = nextRef.current
        swiperRef.current.navigation.destroy()
        swiperRef.current.navigation.init()
        swiperRef.current.navigation.update()
      }
  
    }, [])

  return (
    <div className='inner review-inner'>
      <div className="t-wrap">
        <h2 className="tit">
          What We do
        </h2>
        <p className="txt">
          댐을 짓지 말고 강을 있는 그대로 흐르게 해주세요
        </p>
      </div>

      <Swiper
        effect={'cube'}
        grabCursor={true}
        loop={true}
        
        cubeEffect={{
          shadow: false,
          slideShadows: false,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Navigation, Pagination]}
        className="review-swiper"
      >
        {reviewData.map((sl, i) => (
                  <SwiperSlide key={i}>
                    <a href="#">
                      <div className="info-wrap">
                      <div className="img-wrap">
                        <img src={sl.image} alt={sl.name} />
                      </div>
                        <div className="name">
                          {sl.name}
                        </div>
                        <div className="info-tit">
                          {sl.title}
                        </div>
                      </div>
                    </a>
                    </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Review