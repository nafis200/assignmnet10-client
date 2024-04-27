
import React from 'react';

const Slide = () => {
    return (
        <div>
             <section class="lg:p-4 pt-4">
          <div class="carousel lg:w-full w-90">
            <div id="slide1" class="carousel-item relative w-full">
              <img src="https://i.postimg.cc/W1Cgj7DF/258976-cox.jpg" class="w-full"/>
              <div class="lg:absolute bg-black text-white p-4 text-center right-20 bottom-8">
                <h1 class="text-2xl ">Meet all the heroes from the field</h1> 
                <p class="pt-2 font-manpore">if you come this place you will meet all heroes and ticket <br> price only100 taka so hurry up</p>
            </div>
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" class="btn btn-circle">❮</a> 
                <a href="#slide2" class="btn btn-circle">❯</a>
              </div>
            </div> 
            <div id="slide2" class="carousel-item relative w-full">
              <img src="https://i.postimg.cc/mrDsBQH9/Raja-Ampat-Island-Indonesia-850.jpg" class="w-full"/>
              <div class="lg:absolute bg-black text-white lg:p-4 pt-1 text-center right-20 bottom-8">
                <h1 class="text-2xl ">Meet all the heroes from the field</h1> 
                <p class="pt-2 font-manpore">if you come this place you will meet all heroes and ticket <br> price only100 taka so hurry up</p>
            </div>
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" class="btn btn-circle">❮</a> 
                <a href="#slide3" class="btn btn-circle">❯</a>
              </div>
            </div> 
            <div id="slide3" class="carousel-item relative w-full">
              <img src="https://i.postimg.cc/mrDsBQH9/Raja-Ampat-Island-Indonesia-850.jpg" class="w-full"/>
              <div class="lg:absolute bg-black text-white p-4 text-center right-20 bottom-8">
                <h1 class="text-2xl ">Meet all the heroes from the field</h1> 
                <p class="pt-2 font-manpore">if you come this place you will meet all heroes and ticket <br> price only100 taka so hurry up</p>
            </div>
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" class="btn btn-circle">❮</a> 
                <a href="#slide4" class="btn btn-circle">❯</a>
              </div>
            </div> 
            <div id="slide4" class="carousel-item relative w-full">
              <img src="https://i.postimg.cc/mrDsBQH9/Raja-Ampat-Island-Indonesia-850.jpg" class="w-full"/>
              <div class="lg:absolute bg-black text-white p-4 text-center right-20 bottom-8">
                <h1 class="text-2xl ">Meet all the heroes from the field</h1> 
                <p class="pt-2 font-manpore">if you come this place you will meet all heroes and ticket <br> price only100 taka so hurry up</p>
            </div>
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" class="btn btn-circle">❮</a> 
                <a href="#slide1" class="btn btn-circle">❯</a>
              </div>
            </div>
          </div>
          <div class="lg:hidden bg-black text-white p-4 text-center w-full mt-4">
            <h1 class="text-2xl ">Meet all the heroes from the field</h1> 
            <p class="pt-2 font-manpore">if you come this place you will meet all heroes and ticket <br> price only100 taka so hurry up</p>
        </div>
        </section>
        </div>
    );
};

export default Slide;