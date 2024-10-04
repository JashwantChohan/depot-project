import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// motion
import { motion } from 'framer-motion'
// variants
import { fadeIn } from './variant';


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
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount:0.1}}

        className="w-screen text-center ">
        <h1 className="text-black text-5xl py-9  ">DEPOT</h1>
        <p className=" text-gray-400 text-xl w-[50%] flex items-center justify-center lg:ml-80 ">
          Launch your eCommerce platform quickly and easily with Depot’s collection of beautiful and easily importable homepages.
        </p>
      </motion.div>
      <div>

        <div className=' grid sm:grid-cols-3 gap-12 min-h-[px] mt-32 mx-20 '>
 
          <motion.div
           variants={fadeIn("up", 0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once: false, amount:0.8}}
          
          className='cursor-pointer'><img className='min-h-[200px]  hover:shadow-lg  overflow-hidden transition duration-300 ease-in-out hover:bg-gray-200 transform hover:-translate-y-5 hover:scale-105' src="data:image/png;base64,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" alt="" /></motion.div>

          <motion.div
           variants={fadeIn("up", 0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once: false, amount:0.8}}
          
          className=' cursor-pointer'><img className='min-h-[200px]  hover:shadow-lg  overflow-hidden transition duration-300 ease-in-out hover:bg-gray-200 transform hover:-translate-y-5 hover:scale-105' src="./src/assets/img2.png" alt="" /></motion.div>
          
          <motion.div
           variants={fadeIn("up", 0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once: false, amount:0.8}}
          
          className=' cursor-pointer'><img className='min-h-[200px]  hover:shadow-lg  overflow-hidden transition duration-300 ease-in-out hover:bg-gray-200 transform hover:-translate-y-5 hover:scale-105' src="./src/assets/img3.png" alt="" /></motion.div>
          
        </div>


        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.8 }}

          className='grid sm:grid-cols-3 gap-12 min-h-[px] bg-slate-100 my-10 mx-20'>
          <div className=' cursor-pointer'><img className='min-h-[200px]  hover:shadow-lg  overflow-hidden transition duration-300 ease-in-out hover:bg-gray-200 transform hover:-translate-y-5 hover:scale-105' src="./src/assets/img4.png" alt="" /></div>
          <div className=' cursor-pointer'><img className='min-h-[200px]  hover:shadow-lg  overflow-hidden transition duration-300 ease-in-out hover:bg-gray-200 transform hover:-translate-y-5 hover:scale-105' src="./src/assets/img5.png" alt="" /></div>
          <div className=' cursor-pointer'><img className='min-h-[200px]  hover:shadow-lg  overflow-hidden transition duration-300 ease-in-out hover:bg-gray-200 transform hover:-translate-y-5 hover:scale-105' src="./src/assets/img6.png" alt="" /></div>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.8 }}

          className='grid sm:grid-cols-3 gap-12 min-h-[px] bg-slate-100 my-10 mx-20'>
          <div className=' cursor-pointer'><img className='min-h-[200px]  hover:shadow-lg  overflow-hidden transition duration-300 ease-in-out hover:bg-gray-200 transform hover:-translate-y-5 hover:scale-105' src="./src/assets/img7.png" alt="" /></div>
          <div className=' cursor-pointer'><img className='min-h-[200px]  hover:shadow-lg  overflow-hidden transition duration-300 ease-in-out hover:bg-gray-200 transform hover:-translate-y-5 hover:scale-105' src="./src/assets/img8.png" alt="" /></div>
          <div className=' cursor-pointer'><img className='min-h-[200px]  hover:shadow-lg  overflow-hidden transition duration-300 ease-in-out hover:bg-gray-200 transform hover:-translate-y-5 hover:scale-105' src="./src/assets/img9.png" alt="" /></div>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.8 }}

          className='grid sm:grid-cols-3 gap-12 min-h-[px] bg-slate-100 my-10 mx-20'>
          <div className=' cursor-pointer'><img className='min-h-[200px]  hover:shadow-lg  overflow-hidden transition duration-300 ease-in-out hover:bg-gray-200 transform hover:-translate-y-5 hover:scale-105' src="./src/assets/img10.png" alt="" /></div>
          <div className=' cursor-pointer'><img className='min-h-[200px]  hover:shadow-lg  overflow-hidden transition duration-300 ease-in-out hover:bg-gray-200 transform hover:-translate-y-5 hover:scale-105' src="./src/assets/img11.png" alt="" /></div>
          <div className=' cursor-pointer'><img className='min-h-[200px]  hover:shadow-lg  overflow-hidden transition duration-300 ease-in-out hover:bg-gray-200 transform hover:-translate-y-5 hover:scale-105' src="./src/assets/img12.png" alt="" /></div>
        </motion.div >



      </div>

      <div className='bg-slate-100 grid sm:grid-cols-2 gap-2'>
        <motion.div
         variants={fadeIn("right", 0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{ once: false, amount: 0.8 }}
        
        
        className='bg-slate-100 min-h-[500px] grid-cols-3 py-10 px-24 text-gray-400'>
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
        </motion.div>

        <div className='pt-16 group  hover:shadow-lg  overflow-hidden transition duration-300 ease-in-out  transform hover:-translate-y-5 hover:scale-105'>
          <motion.div
           variants={fadeIn("left", 0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once: false, amount:0.4}}
          
          
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className='h-full w-full bg-slate-100 bg-cover relative duration-500'>
            {/* left-arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-black cursor-pointer'>
              <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* right-arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-black cursor-pointer'>
              <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>

          </motion.div>
        </div>
      </div>

      <motion.div
       variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
      
      
      className=' justify-center text-center  mt-3 h-[300px]'>
        <h6 className='pt-20 tracking-widest pb-7 uppercase font-semibold ' >Blog & Portfolio</h6>
        <h1 className='text-gray-400 text-2xl tracking-widest'>Show off your portfolio and blog posts using <br /> Depot’s creative and stylish templates.</h1>
      </motion.div>

      <div>
        <motion.div 
        
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        
        className='grid sm:grid-cols-3 gap-12 min-h-[px]  mx-20'>
          <div className=' cursor-pointer'><img className='min-h-[200px]  hover:shadow-lg  overflow-hidden transition duration-300 ease-in-out hover:bg-gray-200 transform hover:-translate-y-5 hover:scale-105' src="./src/assets/img1.png" alt="" /></div>
          <div className=' cursor-pointer'><img className='min-h-[200px]  hover:shadow-lg  overflow-hidden transition duration-300 ease-in-out hover:bg-gray-200 transform hover:-translate-y-5 hover:scale-105' src="./src/assets/img2.png" alt="" /></div>
          <div className=' cursor-pointer'><img className='min-h-[200px]  hover:shadow-lg  overflow-hidden transition duration-300 ease-in-out hover:bg-gray-200 transform hover:-translate-y-5 hover:scale-105' src="./src/assets/img3.png" alt="" /></div>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
        
        className='grid sm:grid-cols-3 gap-12 min-h-[px] bg-slate-100 my-10 mx-20'>
          <div className=' cursor-pointer'><img className='min-h-[200px]  hover:shadow-lg  overflow-hidden transition duration-300 ease-in-out hover:bg-gray-200 transform hover:-translate-y-5 hover:scale-105' src="./src/assets/img4.png" alt="" /></div>
          <div className=' cursor-pointer'><img className='min-h-[200px]  hover:shadow-lg  overflow-hidden transition duration-300 ease-in-out hover:bg-gray-200 transform hover:-translate-y-5 hover:scale-105' src="./src/assets/img5.png" alt="" /></div>
          <div className=' cursor-pointer'><img className='min-h-[200px]  hover:shadow-lg  overflow-hidden transition duration-300 ease-in-out hover:bg-gray-200 transform hover:-translate-y-5 hover:scale-105' src="./src/assets/img6.png" alt="" /></div>
        </motion.div>

        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
        
        className='grid sm:grid-cols-3 gap-12 min-h-[px] bg-slate-100 my-10 mx-20'>
          <div className=' cursor-pointer'><img className='min-h-[200px]  hover:shadow-lg  overflow-hidden transition duration-300 ease-in-out hover:bg-gray-200 transform hover:-translate-y-5 hover:scale-105' src="./src/assets/img7.png" alt="" /></div>
          <div className=' cursor-pointer'><img className='min-h-[200px]  hover:shadow-lg  overflow-hidden transition duration-300 ease-in-out hover:bg-gray-200 transform hover:-translate-y-5 hover:scale-105' src="./src/assets/img8.png" alt="" /></div>
          <div className=' cursor-pointer'><img className='min-h-[200px]  hover:shadow-lg  overflow-hidden transition duration-300 ease-in-out hover:bg-gray-200 transform hover:-translate-y-5 hover:scale-105' src="./src/assets/img9.png" alt="" /></div>
        </motion.div>

        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
        
        className=' justify-center text-center  mt-3 h-[300px]'>
          <h6 className='pt-20 tracking-widest text-2xl pb-7 uppercase font-semibold ' >Fully Responsive Layouts</h6>
          <h1 className='text-gray-400'>Depot is made with mobile in mind, meaning that every page is fully responsive and ready for high-density retina <br /> screens. Simply scan the QR codes bellow to visit Depot’s homepages on your mobile device.</h1>
        </motion.div>

        <div className='w-3/4 m-auto'>
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }} 
          
          
          className=''>
            <Slider {...settings}>
              {data.map((d) => (
                <div className=' h-[450px] border-black text-black rounded-xl *:'>
                  <div className='h-566 rounded-t-xl flex '>
                    <img src={d.img} alt="images" />

                  </div>
                </div>
              ))}
            </Slider>
          </motion.div>

        </div>
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
        
        className='mt-36 mx-8 bg '><img className='  overflow-hidden transition duration-300 ease-in-out  transform' src="./src/assets/last-div-img.png" alt="" /></motion.div>
      </div>
      <div className='border-2 '><img src="./src/assets/footer.png" alt="" /></div>
    </div >
  );
};

export default MainSection;
