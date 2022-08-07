import React, {useState,useRef}  from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import './reviews.css'
import fivestars from '../assets/PngItem_4268703.png'
export default function Reviews(props){
    return(
        <section id={props.id.reviews} className="reviews-section">
            <h2 className="reviews-title">Reviews</h2>
            <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="review-card ">
             <p className="review-paragraph">Obinna is a talented writer. He has a detailed understanding of SEO, produced a great content in a timely manner, thank you.</p>
             <img src={fivestars} className='star-img' alt='client-rating'/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="review-card ">
             <p className="review-paragraph">Obinna is consistently doing a great job, he uses the best words at the right places, I strongly recommend him, thank you.</p>
             <img src={fivestars} className='star-img' alt='client-rating'/>
          </div>
        </SwiperSlide>        
        <SwiperSlide>
        <div className="review-card ">
             <p className="review-paragraph">Talking about proficiency in writing, Obinna is one to talk about, he did a quality work, work was also timely. Very recommendable.</p>
             <img src={fivestars} className='star-img' alt='client-rating'/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="review-card ">
             <p className="review-paragraph">Obinna's copywriting skills is excellent skills is excellent, he made my product really lovable, brilliant use of words and timely article. Thank you.</p>
             <img src={fivestars} className='star-img' alt='client-rating'/>
          </div>
        </SwiperSlide>
          </Swiper>
          <a href="https://www.upwork.com/freelancers/~0122c8dce57bcfd277?s=1017484851352698933" className="reviews-btn">Upwork</a>
        </section>
    )
}