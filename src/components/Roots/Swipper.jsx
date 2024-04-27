
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
      <SwiperSlide> 
       <div className='relative'>
       <img className='lg:w-full lg:h-[550px] mt-5' src="https://i.postimg.cc/FHwM52NM/Sundarban-Tiger.jpg" alt="" /> 
       <div className='z-20 absolute lg:top-[200px] md:top-[200px] top-[80px] lg:right-[150px] md:right-[30px] text-red-400 font-bold text-center'>
       <p>The Sundarbans, located in Bangladesh and India, is the largest mangrove forest in the world, <br /> famed for its rich biodiversity, including the iconic Bengal tiger. </p>
       </div>
       </div>
      
      </SwiperSlide>
       <SwiperSlide> 
       <div className='relative'>
       <img className='lg:w-full w-full lg:h-[550px] mt-5' src="https://i.postimg.cc/mrDsBQH9/Raja-Ampat-Island-Indonesia-850.jpg" alt="" /> 
       <div className='z-20 absolute lg:top-[200px] md:top-[200px] top-[80px] lg:right-[50px] md:right-[30px] text-white font-bold text-center lg:text-2xl'>
       <p>Raja Ampat, located in Indonesia's West Papua province, is an archipelago comprising <br /> over 1,500 small islands, cays, and shoals. <br /> Renowned for its breathtaking marine biodiversity  </p>
       </div>
       </div>
      
      </SwiperSlide> 
       <SwiperSlide> 
       <div className='relative'>
       <img className='lg:w-full w-full lg:h-[550px] mt-5' src="https://i.postimg.cc/W1Cgj7DF/258976-cox.jpg" alt="" /> 
       <div className='z-20 absolute lg:top-[200px] md:top-[200px] top-[80px] lg:right-[10px] md:right-[30px] text-white font-bold text-center lg:text-2xl'>
       <p>Cox's Bazar, situated in Bangladesh, boasts the world's longest uninterrupted sandy beach, <br /> stretching over 120 kilometers along the Bay of Bengal.  Renowned for its scenic beauty, Cox's Bazar attracts visitors with its golden sands, clear blue waters,  </p>
       </div>
       </div>
      
      </SwiperSlide> 
            
    </Swiper>
    </div>

    </div>
  
    );
};

export default Swipper;