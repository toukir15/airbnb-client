// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./ImageSlider.css";

export default function ImageSlider({ image }) {
  return (
    <>
      <Swiper
        navigation={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper w-full h-full"
      >
        {image.map((img, key) => (
          <SwiperSlide className="w-full h-full" key={key}>
            <img
              className="
              object-cover 
              h-full 
              w-full 
              transition
                "
              src={img}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
