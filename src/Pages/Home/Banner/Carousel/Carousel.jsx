import {Swiper, SwiperSlide} from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import './Carousel.css';
import P1 from "../../../../assets/P1.jpg";
import P2 from "../../../../assets/P2.jpg";
import P3 from "../../../../assets/P3.jpg";
import P4 from "../../../../assets/P4.jpg";
import N1 from "../../../../assets/1.jpg";
import N4 from "../../../../assets/4.jpg";
import P5 from "../../../../assets/P5.jpg";


const Carousel = () => {
    return (
      <>
        <div className="container">
          <Swiper
            spaceBetween={30}
            autoplay={{ delay: 2300, disableOnInteraction: false }}
            speed={800}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            modules={[Autoplay, EffectCoverflow]}
          >
            <SwiperSlide>
              <img
                loading="lazy"
                src={P1}
                className="relative"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                loading="lazy"
                src={P2}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                loading="lazy"
                src={P3}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                loading="lazy"
                src={P4}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                loading="lazy"
                src={N1}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                loading="lazy"
                src={N4}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                loading="lazy"
                src={P5}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </>
    );
};

export default Carousel;