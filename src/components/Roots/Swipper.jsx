
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation,Pagination } from 'swiper/modules';


const Swipper = () => {
    return (
       <div className=''>
 
 <div className=' lg:mt-10 '>
    <Swiper
      pagination={{
        type: 'fraction',
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <div className='relative'>
      <SwiperSlide> <img className='lg:w-full w-full lg:h-[550px] mt-5' src="https://i.postimg.cc/W1Cgj7DF/258976-cox.jpg" alt="" /> </SwiperSlide>
      <div className='z-20 '>
        <p className='text-3xl font-bold text-red-400'>hellow world</p>
    </div>
      </div>
      <SwiperSlide> 
       <div className='relative'>
       <img className='lg:w-full lg:h-[550px] mt-5' src="https://i.postimg.cc/FHwM52NM/Sundarban-Tiger.jpg" alt="" /> 
       <div className='z-20 absolute lg:top-[200px] md:top-[200px] top-[80px] lg:right-[150px] md:right-[30px] text-red-400 font-bold text-center'>
       <p>The Sundarbans, located in Bangladesh and India, is the largest mangrove forest in the world, <br /> famed for its rich biodiversity, including the iconic Bengal tiger. </p>
       </div>
       </div>
      
      </SwiperSlide>
      <SwiperSlide><img className='lg:w-full lg:h-[550px] mt-5' src="https://i.postimg.cc/mrj61787/photo-2024-04-08-22-28-31.jpg" alt="" /> </SwiperSlide>
      <SwiperSlide><img className='lg:w-full lg:h-[550px] mt-5' src="https://i.postimg.cc/7PJ8dQKc/photo-2024-04-08-22-28-32.jpg" alt="" /> </SwiperSlide>
      <SwiperSlide><img className='lg:w-full lg:h-[550px] mt-5' src="https://i.postimg.cc/zGVnFKzn/photo-2024-04-08-22-28-34.jpg" alt="" /> </SwiperSlide>
      
    </Swiper>
    </div>

    </div>
  
    );
};

export default Swipper;