import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// images for responsive slider
const slides = [
  {
    url: './public/images/slide01.png'
  },
  {
    url: './public/images/slide02.png'
  },
  {
    url: './public/images/slide03.png'
  }
];

// images for mobile screen slider
const data = [

  {
    img: './public/images/Mslide01.png'
  },
  {
    img: './public/images/mslide02.png'
  },
  {
    img: './public/images/mslide03.png'
  },


  {
    img: './public/images/mslide04.png'
  },
  {
    img: './public/images/mslide05.png'
  },
  {
    img: './public/images/mslide06.png'
  },


  {
    img: './public/images/mslide07.png'
  },
  {
    img: './public/images/mslide08.png'
  },
  {
    img: './public/images/mslide09.png'
  },

  {
    img: './public/images/mslide10.png'
  },
  {
    img: './public/images/mslide11.png'
  },
  {
    img: './public/images/mslide01.png'
  }

];

const MainSection = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3

  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className='box-border'>
      <div className="w-screen text-center ">
        <h1 className="text-black text-5xl py-9  ">DEPOT</h1>
        <p className=" text-gray-400 text-xl w-[50%] flex items-center justify-center ml-80 ">
          Launch your eCommerce platform quickly and easily with Depot’s collection of beautiful and easily importable homepages.
        </p>
      </div>
      <div>
        <div className='grid sm:grid-cols-3 gap-12 min-h-[px] mt-32 mx-20 '>
          <div className='min-h-[200px] hover:shadow-lg  cursor-pointer'><img src="./src/assets/img1.png" alt="" /></div>
          <div className='min-h-[200px] hover:shadow-lg cursor-pointer'><img src="./src/assets/img2.png" alt="" /></div>
          <div className='min-h-[200px] hover:shadow-lg cursor-pointer'><img src="./src/assets/img3.png" alt="" /></div>
        </div>
        <div className='grid sm:grid-cols-3 gap-12 min-h-[px] bg-slate-100 my-10 mx-20'>
          <div className='min-h-[200px] hover:shadow-lg cursor-pointer'><img src="./src/assets/img4.png" alt="" /></div>
          <div className='min-h-[200px] hover:shadow-lg cursor-pointer'><img src="./src/assets/img5.png" alt="" /></div>
          <div className='min-h-[200px] hover:shadow-lg cursor-pointer'><img src="./src/assets/img6.png" alt="" /></div>
        </div>
        <div className='grid sm:grid-cols-3 gap-12 min-h-[px] bg-slate-100 my-10 mx-20'>
          <div className='min-h-[200px] hover:shadow-lg cursor-pointer'><img src="./src/assets/img7.png" alt="" /></div>
          <div className='min-h-[200px] hover:shadow-lg cursor-pointer'><img src="./src/assets/img8.png" alt="" /></div>
          <div className='min-h-[200px] hover:shadow-lg cursor-pointer'><img src="./src/assets/img9.png" alt="" /></div>
        </div>
        <div className='grid sm:grid-cols-3 gap-12 min-h-[px] bg-slate-100 my-10 mx-20'>
          <div className='min-h-[200px] hover:shadow-lg cursor-pointer'><img src="./src/assets/img10.png" alt="" /></div>
          <div className='min-h-[200px] hover:shadow-lg cursor-pointer'><img src="./src/assets/img11.png" alt="" /></div>
          <div className='min-h-[200px] hover:shadow-lg cursor-pointer'><img src="./src/assets/img12.png" alt="" /></div>
        </div>
      </div>

      <div className='bg-slate-100 grid sm:grid-cols-2 gap-2'>
        <div className='bg-slate-100 min-h-[500px] grid-cols-3 py-10 px-24 text-gray-400'>
          <h1 className='text-2xl leading-9 tracking-wide my-5 mx-0 text-black font-semibold uppercase'>
            A Large Collection of Practical Inner Pages
          </h1>
          <p>We’ve thought of everything, which is why Depot comes with a set of predesigned inner pages. Simply choose your favorites & customize them to your needs.</p>
          <ul className='mt-12'>
            <li>Order Tracking</li>
            <li>Testimonials</li>
            <li>Terms & Conditions</li>
            <li>FAQ</li>
            <li>What We Do</li>
            <li>Our Team</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className='pt-16 group'>
          <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className='h-full w-full bg-slate-100 bg-cover relative duration-500'>
            {/* left-arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-black cursor-pointer'>
              <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* right-arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-black cursor-pointer'>
              <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>

          </div>
        </div>
      </div>

      <div className=' justify-center text-center  mt-3 h-[300px]'>
        <h6 className='pt-20 tracking-widest pb-7 uppercase font-semibold ' >Blog & Portfolio</h6>
        <h1 className='text-gray-400 text-2xl tracking-widest'>Show off your portfolio and blog posts using <br /> Depot’s creative and stylish templates.</h1>
      </div>

      <div>
        <div className='grid sm:grid-cols-3 gap-12 min-h-[px]  mx-20'>
          <div className='min-h-[200px] hover:shadow-lg cursor-pointer'><img src="./src/assets/img1.png" alt="" /></div>
          <div className='min-h-[200px] hover:shadow-lg cursor-pointer'><img src="./src/assets/img2.png" alt="" /></div>
          <div className='min-h-[200px] hover:shadow-lg cursor-pointer'><img src="./src/assets/img3.png" alt="" /></div>
        </div>
        <div className='grid sm:grid-cols-3 gap-12 min-h-[px] bg-slate-100 my-10 mx-20'>
          <div className='min-h-[200px] hover:shadow-lg cursor-pointer'><img src="./src/assets/img4.png" alt="" /></div>
          <div className='min-h-[200px] hover:shadow-lg cursor-pointer'><img src="./src/assets/img5.png" alt="" /></div>
          <div className='min-h-[200px] hover:shadow-lg cursor-pointer'><img src="./src/assets/img6.png" alt="" /></div>
        </div>

        <div className='grid sm:grid-cols-3 gap-12 min-h-[px] bg-slate-100 my-10 mx-20'>
          <div className='min-h-[200px] hover:shadow-lg cursor-pointer'><img src="./src/assets/img7.png" alt="" /></div>
          <div className='min-h-[200px] hover:shadow-lg cursor-pointer'><img src="./src/assets/img8.png" alt="" /></div>
          <div className='min-h-[200px] hover:shadow-lg cursor-pointer'><img src="./src/assets/img9.png" alt="" /></div>
        </div>

        <div className=' justify-center text-center  mt-3 h-[300px]'>
          <h6 className='pt-20 tracking-widest text-2xl pb-7 uppercase font-semibold ' >Fully Responsive Layouts</h6>
          <h1 className='text-gray-400'>Depot is made with mobile in mind, meaning that every page is fully responsive and ready for high-density retina <br /> screens. Simply scan the QR codes bellow to visit Depot’s homepages on your mobile device.</h1>
        </div>

        <div className='w-3/4 m-auto'>
          <div className=''>
            <Slider {...settings}>
              {data.map((d) => (
                <div className=' h-[450px] border-black text-black rounded-xl *:'>
                  <div className='h-566 rounded-t-xl flex '>
                    <img src={d.img} alt="images" />

                  </div>
                </div>
              ))}
            </Slider>
          </div>

        </div>
        <div className='mt-36 mx-8 bg '><img src="./src/assets/last-div-img.png" alt="" /></div>
      </div>
      <div className='border-2 '><img src="./src/assets/footer.png" alt="" /></div>
    </div>  
  );
};

export default MainSection;
