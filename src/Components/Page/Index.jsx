import React from 'react'
import heroClient1 from '../../assets/hero-Client-1.jpg'
import heroClient2 from '../../assets/hero-Client-2.jpg'
import heroClient3 from '../../assets/hero-Client-3.jpg'

import hero from '../../assets/hero.png'
import heroCart1 from '../../assets/hero-chart1.png'
import heroCart2 from '../../assets/hero-chart2.png'
import heroplane from '../../assets/hero-plane.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import logoSlide1 from '../../assets/logo-slide-1.png'
import logoSlide2 from '../../assets/logo-slide-2.png'
import logoSlide3 from '../../assets/logo-slide-3.png'
import logoSlide4 from '../../assets/logo-slide-4.png'
import logoSlide5 from '../../assets/logo-slide-5.png'

import about1 from '../../assets/about-1.jpg'
import about2 from '../../assets/about-2.jpg'

import payCard from '../../assets/payment-card.png'
import security from '../../assets/security.png'
import document from '../../assets/document.png'

import businessImg from '../../assets/business-track.jpg'
import paymentWomen from '../../assets/woman-give-payment.jpg'

import paypal from '../../assets/paypal.png'
import visa from '../../assets/visa.png'
import payoneer from '../../assets/payoneer.png'

import tst1 from '../../assets/team-1.jpg'
import tst2 from '../../assets/team-2.jpg'
import tst3 from '../../assets/team-3.jpg'
import { motion, easeOut } from 'framer-motion';
const Index = () => {
  return (
    <>
      {/* Hero  */}
      <div className="lg:px-[12%] px-[8%] ">
        <div className="container grid items-center grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 hero">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: .4 }}
            className="w-1/1"
          >
            <div className="hero-content">
              <h1 className="text-8xl font-bold">Speed Your Business with Flexora🔥</h1>
              <p className="my-6">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, debitis exercitationem maiores soluta dolor facilis impedit vero itaque!
              </p>
              <div className="hero-info flex items-center gap-5">
                <button className="btn border py-3 px-6 bg-blue-500 text-white hover:bg-blue-700 tranistion font-semibold rounded-md">Get Started </button>
                <div className="hero-client-img flex">
                  <img src={heroClient1} className='border-2 rounded-full w-20' />
                  <img src={heroClient2} className='border-2 rounded-full w-20' />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl font-semibold">Our Happy Customers</h2>
                  <p>⭐️ 4.8(1.5k Reveiw)</p>
                </div>
              </div>
            </div>
            <div className="hero-text flex items-center gap-5 mt-10">
              <div className="flex flex-col items-center border-r border-black pr-5">
                <h1 className="text-3xl font-semibold">1500+</h1>
                <p>Happy Clients</p>
              </div>
              <div className="flex flex-col items-center border-r border-black pr-5">
                <h1 className="text-3xl font-semibold">1203+</h1>
                <p>Completed Work</p>
              </div>
              <div className="flex flex-col items-center border-r border-black pr-5">
                <h1 className="text-3xl font-semibold">1323+</h1>
                <p>Running Work</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut', delay: .6 }}
            className="w-1/1 relative"
          >
            <div className="hero-image relative">
              <img src={hero} className='object-contain' />
            </div>
            <img src={heroCart1} className='absolute hero-cart-1 ' alt="" />
            <img src={heroCart2} className='absolute hero-cart-2' alt="" />
            <img src={heroplane} className='absolute heroplane' alt="" />
          </motion.div>
        </div>
      </div>

      {/* Logo slide */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: .2 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className='flex items-center lg:px-[12%] px-[8px] py-[100px]'>
        <Swiper
          spaceBetween={30}
          slidesPerView={5}
          loop={true}
          autoplay={true}
          breakpoints={{
            1399: { slidesPerView: 5 },
            991: { slidesPerView: 3 },
            0: { slidesPerView: 3 },
          }}
        >
          <SwiperSlide>
            <img src={logoSlide1} className='w-[100%] h-[100px] object-contain' alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={logoSlide2} className='w-[100%] h-[100px] object-contain' alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={logoSlide3} className='w-[100%] h-[100px] object-contain' alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={logoSlide4} className='w-[100%] h-[100px] object-contain' alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={logoSlide5} className='w-[100%] h-[100px] object-contain' alt="" />
          </SwiperSlide>
        </Swiper>
      </motion.div>

      {/* About  */}
      <div className=" about lg:px-[12%] px-[8%] py-[100px]">
        <div className="container grid items-center grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 m-auto">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: .4 }}
            className="about-image relative w-1/1 flex justify-center">
            <img src={about1} className='w-full h-full about-img' alt="" />
            <img src={about2} className='w-full h-full about-img-2' alt="" />
          </motion.div>

          {/* Test section */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .4 }}
            className="w-1/1 text-center md:text-left">
            <div className="w-[100%] md:w-[80%] mb-10">
              <span className="text-blue-500 font-semibold text-lg">About Us</span>
              <h1 className="text-2xl sm:text-5xl font-bold leading-tight py-2 font-bricolage"> We Help Grow And Achive Your Business</h1>
              <p className="py-3">
                Excepteur sint occeacat cupidate non proidenrt, sunt in culpa qui officia deserunt mollit anim id test Lorem More
              </p>
              <button className="hover:bg-blue-600 font-semibold transition bg-blue-500 text-white px-8 text-md rounded py-3 mt-3">Learn More</button>
              <div className="hero-text flex items-center gap-5 mt-10">
                <div className="flex flex-col items-center border-r border-black pr-5">
                  <h1 className="text-3xl font-semibold">1500+</h1>
                  <p>Happy Clinet</p>
                </div>

                <div className="flex flex-col items-center border-r border-black pr-5">
                  <h1 className="text-3xl font-semibold">1745+</h1>
                  <p>Completed Work </p>
                </div>

                <div className="flex flex-col items-center border-r border-black pr-5">
                  <h1 className="text-3xl font-semibold">150+</h1>
                  <p>Running Work</p>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services */}
      <div className="services lg:px-[10%] px-[8%] py-[50px]">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: .2 }}
          transition={{ delay: .4 }}
          className='flex flex-col items-center py-8'>
          <span className="text-blue-500 font-semibold text-lg">Our Features</span>
          <h1 className="text-2xl sm:text-5xl font-bold leading-tight py-2 font-bricolage">Our Best Exciting Feature</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: .2 }}
          transition={{ delay: .6 }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5'>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer">
            <div className="w-20 h-20 rounded-md overflow-hidden mb-4">
              <img src={payCard} className='w-full h-full p-3 object-contain bg-green-100' alt="" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 my-5">Easy Payment</h3>
            <p className="text-gray-500 text-1xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, voluptatem quia eos beatae blanditiis non?
            </p>
          </div>

          <div className="bg-blue-600 text-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer">
            <div className="w-20 h-20 rounded-md overflow-hidden mb-4">
              <img src={security} className='w-full h-full p-4 object-contain bg-red-100' alt="" />
            </div>
            <h3 className="text-2xl font-semibold my-5">Automated Reports </h3>
            <p className="text-1xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, voluptatem quia eos beatae blanditiis non?
            </p>
          </div>

          <div className="bg-white text-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer">
            <div className="w-20 h-20 rounded-md overflow-hidden mb-4">
              <img src={document} className='w-full h-full p-4 object-contain bg-white' alt="" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 my-5">Security First</h3>
            <p className="text-gray-500 text-1xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, voluptatem quia eos beatae blanditiis non?
            </p>
          </div>

        </motion.div>
      </div>

      {/* Business trading */}
      <div className="business lg:px-[12%] px-[8%] py-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: .2 }}
            transition={{ delay: .4 }}
            className='' >
            <div className="py-4">
              <span className="text-blue-500 font-semibold text-lg"> Business Track</span>
              <h1 className="font-bricolage text-2xl sm:text-5xl font-bold leading-tight ">Control Your Business <br /> <span className="text-blue-600 font-bricolage ">Easily & Quickly</span> </h1>
              <p className="text-gray-500 mt-4 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tempora ipsa dolorum iure qui. Neque esse vitae ab!</p>
            </div>

            <div className="flex gap-6 mt-6">
              <div className="flex items-start gap-4">
                {/* Icon Container */}
                <div className="bg-blue-100 text-blue-600 p-3 rounded-full w-12 h-12 flex items-center justify-center shadow-sm">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h12v2H3v-2z" />
                  </svg>
                </div>

                {/* Text Content */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">Business Analysis</h4>
                  <p className="text-sm text-gray-600 leading-relaxed max-w-md">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae in placeat optio hic iure!
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-10 mt-6">
              <div className="flex items-start gap-4">
                {/* Icon Container */}
                <div className="bg-blue-100 text-blue-600 p-3 rounded-full w-12 h-12 flex items-center justify-center shadow-sm">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h12v2H3v-2z" />
                  </svg>
                </div>

                {/* Text Content */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">Easily Accesss</h4>
                  <p className="text-sm text-gray-600 leading-relaxed max-w-md">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae in placeat optio hic iure!
                  </p>
                </div>
              </div>
            </div>

          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: .2 }}
            transition={{ delay: .6 }}
            className='relative'>
            <img src={businessImg} className='img-fluid rounded shadow' alt="" />
            <div className="absolute bottom-4 left-4 bg-white rounded-xl shadow-lg px-6 py-4 flex flex-col items-center w-48">
              <p className='text-gray-500 text-sm font-medium '>Total Target</p>
              <div className="w-20 h20 mt-2 mb-1 relative">
                <svg>

                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-gray-800">75%</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Payment */}
      <div className="payment lg:px-[12%] px-[8%] py-[100px] bg-white flex flex-col lg:flex-row items-center justify-between gap-8">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: .4 }}
          viewport={{ once: true, amount: 0.5 }}
          className='w-full relative lg:w-1/2 flex justify-center'
        >
          <img src={paymentWomen} className='rounded-xl w-full' alt="" />
          <div className="absolute bottom-[-30px] right-[-20] bg-white shadow-lg rounded-xl p-6 w-[250px]">
            <h3 className="text-lg font-semibold mb-4">Payment Option</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <img src={paypal} alt="" />
                  <span>Paypal</span>
                </div>
                <input type="radio" name="payment" defaultChecked className='accent-blue-' />
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <img src={visa} alt="" />
                  <span>Visa</span>
                </div>
                <input type="radio" name="payment" defaultChecked className='accent-blue-' />
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <img src={payoneer} alt="" />
                  <span>Payoneer</span>
                </div>
                <input type="radio" name="payment" defaultChecked className='accent-blue-' />
              </li>
            </ul>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"> Choose Payment</button>
          </div>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: .4 }}
          viewport={{ once: true, amount: 0.5 }}
          className='w-full relative lg:w-1/2 flex justify-center'>
          <div className="py-4">
            <span className="text-blue-500 font-semibold text-lg"> Payment Purpose</span>
            <h1 className="font-bricolage text-2xl sm:text-5xl font-bold leading-tight ">Payment <br /> <span className="text-blue-600 font-bricolage ">Will Be Easier</span> With Mant Opotions </h1>
            <p className="text-gray-500 mt-4 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tempora ipsa dolorum iure qui. Neque esse vitae ab!</p>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-md lg:mx-0">
            <div className="flex items-center space-x-2">
              <span className="text-blue-500 text-xl">✔️</span>
              <span>Many Payment Option</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-blue-500 text-xl">✔️</span>
              <span>Guaranted Payment </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-blue-500 text-xl">✔️</span>
              <span>First And Easy Payment </span>
            </div>
          </div>
        </motion.div> */}
        <motion.div
  initial={{ opacity: 0, x: -100 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, amount: 0.5 }}
  transition={{ delay: 0.4 }}
  className="w-full lg:w-1/2 relative flex justify-center px-4 sm:px-0"
>
  <div className="py-4 max-w-xl">
    {/* Header */}
    <span className="text-blue-500 font-semibold text-lg block mb-2">Payment Purpose</span>
    <h1 className="font-bricolage text-2xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
      Payment <br />
      <span className="text-blue-600">Will Be Easier</span> With Many Options
    </h1>
    <p className="text-gray-500 mt-2 mb-6 text-sm sm:text-base leading-relaxed">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tempora ipsa dolorum iure qui. Neque esse vitae ab!
    </p>

    {/* Features List */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
      <div className="flex items-center space-x-2">
        <span className="text-blue-500 text-xl">✔️</span>
        <span className="text-gray-800 text-sm sm:text-base">Many Payment Options</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-blue-500 text-xl">✔️</span>
        <span className="text-gray-800 text-sm sm:text-base">Guaranteed Payment</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-blue-500 text-xl">✔️</span>
        <span className="text-gray-800 text-sm sm:text-base">Fast and Easy Payment</span>
      </div>
    </div>
  </div>
</motion.div>


      </div>

      {/* Prices */}
      <div className="pricing lg:px-[12%] px-[8%] py-[150px] w-full bg-[#f2f3f7] ">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: .4 }}
          viewport={{ once: true, amount: 0.5 }}
          className='pricing-content text-center w-full section-content space-y-2 mb-16'>
          <span className="text-blue-500 font-semibold text-lg"> Price List</span>
          <h1 className="font-bricolage text-2xl sm:text-5xl font-bold leading-tight ">Choose Your Best Plan <br /> <span className="text-blue-600 font-bricolage ">Easily & Quickly</span> </h1>
          <p className="text-gray-500 md:text-base text-sm w-[100%] md:w-[80%] m-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repudiandae accusantium minus fuga quia obcaecati cupiditate natus, consequatur temporibus voluptates quae tempora.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: .6 }}
          viewport={{ once: true, amount: 0.5 }}
          className='pricing-wrapper flex w-full gap-5 flex-col lg:flex-row '>

          <div className="pricing-plan bg-white py-12 px-8 rounded-2xl shadow w-full m-auto md:w-[80%] transition hover:-translate-y-2 cursor-pointer ">
            <span className="text-gray-500 uppercase text-base font-normal ">Basic</span>
            <h1 className="text-5xl font-bold text-blue-500 mb-10 mt-3">
              $119 <span className="text-sm font-normal text-black">Monthly</span>
            </h1>
            <ul className="w-full text-start flex flex-col gap-4 mb-10">
              <li className="flex items-center hover:text-blue-500 transition-colors"></li>
              <i className='ri-check-line mr-3 text-xl'></i> 3 Regular Ads

              <li className="flex items-center hover:text-blue-500 transition-colors"></li>
              <i className='ri-check-line mr-3 text-xl'></i> No Feature

              <li className="flex items-center hover:text-blue-500 transition-colors"></li>
              <i className='ri-check-line mr-3 text-xl'></i> 3 No Toy

              <li className="flex opacity-50 items-center hover:text-blue-500 transition-colors"></li>
              <i className='ri-check-line mr-3 text-xl'></i> Limited Support
            </ul>
               <button className='w-full uppercase bg-blue-50 hover:text-white hover:bg-blue-400 rounded transition font-semib'>Select-plan</button>
          </div>

          <div className="pricing-plan bg-blue-500 text-white py-12 px-8 rounded-2xl shadow w-full m-auto md:w-[80%] transition hover:-translate-y-2 cursor-pointer ">
            <span className="text-white uppercase text-base font-normal ">Standard</span>
            <h1 className="text-5xl font-bold text-white mb-10 mt-3">
              $249 <span className="text-sm font-normal text-white">Monthly</span>
            </h1>
            <ul className="w-full text-start flex flex-col gap-4 mb-10">
              <li className="flex items-center hover:text-blue-500 transition-colors"></li>
              <i className='ri-check-line mr-3 text-xl'></i> 3 Regular Ads

              <li className="flex items-center hover:text-blue-500 transition-colors"></li>
              <i className='ri-check-line mr-3 text-xl'></i> No Feature

              <li className="flex items-center hover:text-blue-500 transition-colors"></li>
              <i className='ri-check-line mr-3 text-xl'></i> 3 No Toy

              <li className="flex items-center hover:text-blue-500 transition-colors"></li>
              <i className='ri-check-line mr-3 text-xl'></i> Limited Support
            </ul>
            <button className='w-full uppercase bg-blue-500 hover:text-white hover:bg-blue-400 rounded transition font-semib'>Select-plan</button>
          </div>

          <div className="pricing-plan bg-white py-12 px-8 rounded-2xl shadow w-full m-auto md:w-[80%] transition hover:-translate-y-2 cursor-pointer ">
            <span className="text-gray-500 uppercase text-base font-normal ">Primium</span>
            <h1 className="text-5xl font-bold text-blue-500 mb-10 mt-3">
              $449 <span className="text-sm font-normal text-black">Monthly</span>
            </h1>
            <ul className="w-full text-start flex flex-col gap-4 mb-10">
              <li className="flex items-center hover:text-blue-500 transition-colors"></li>
              <i className='ri-check-line mr-3 text-xl'></i> 3 Regular Ads

              <li className="flex items-center hover:text-blue-500 transition-colors"></li>
              <i className='ri-check-line mr-3 text-xl'></i> No Feature

              <li className="flex items-center hover:text-blue-500 transition-colors"></li>
              <i className='ri-check-line mr-3 text-xl'></i> 3 No Toy

              <li className="flex items-center hover:text-blue-500 transition-colors"></li>
              <i className='ri-check-line mr-3 text-xl'></i> Limited Support
            </ul>
            <button className='w-full uppercase bg-blue-50 hover:text-white hover:bg-blue-400 rounded transition font-semib'>Select-plan</button>
          </div>
        </motion.div>
      </div>

      {/* Testimonials */}
      {/* <div className="testimonials lg:px-[12%] px-[8%] py-[150px] w-full">
  <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: .4 }}
          viewport={{ once: true, amount: 0.5 }}
          className='textimonals-content w-full section-content space-y-2'>
          <span className="text-blue-500 font-semibold text-lg"> Testimonials</span>
          <h1 className="font-bricolage text-2xl sm:text-5xl font-bold leading-tight ">What our beloved Customer say about us <br /> <span className="text-blue-600 font-bricolage ">Easily & Quickly</span> </h1>
         <button className="customer-btn font-semiblod bg-blue-500 text-white px-8 text-md rounded p-3">Contact us</button>
          </motion.div>
           <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: .4 }}
          viewport={{ once: true, amount: 0.5 }}
          >
            <Swiper
              className='txt-swiper w-full items-center justify-center'
              spaceBetween={30}
              slidesPerView={3}
              loop={true}
              autoplay={true}
              breakpoints={{
                1399: {slidesPerView: 3 },
                1199: {slidesPerView: 3 },

                991: {SlidePerView: 2},
                0: {SlidePerView: 1},

              }}>

                <SwiperSlide>
                  <div className="txt-item group shadow p-8 rounded-lg text-gray-500 hover:text-white transition-colors">
                    <div className="txt-user flex items-center gap-5 mb-4">
                      <img src={tst1} alt="txt-user" width={50} height={50} className='rounded-full' />
                      <div className="user-info">
                        <h5 className="font-semibold group-hover:text-white text-lg text-black transition-colors font-bricolage">Harshit handa</h5>
                        <p className="text-sm font-bricolage">Happy Customer</p>
                      </div>
                    </div>
                    <p className="mb-3 font-bricolage">
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, rerum fugit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis eveniet placeat commodi.
                    </p>
                    <div className="txt-star flex gap-1">
                      <i className="ri-star-fill text-xl">⭐️</i>
                      <i className="ri-star-fill text-xl">⭐️</i>
                      <i className="ri-star-fill text-xl">⭐️</i>
                      <i className="ri-star-fill text-xl">⭐️</i>
                      <i className="ri-star-fill text-xl">⭐️</i>
                     
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="txt-item group shadow p-8 rounded-lg text-gray-500 hover:text-white transition-colors">
                    <div className="txt-user flex items-center gap-5 mb-4">
                      <img src={tst2} alt="txt-user" width={50} height={50} className='rounded-full' />
                      <div className="user-info">
                        <h5 className="font-semibold group-hover:text-white text-lg text-black transition-colors font-bricolage">Rajan</h5>
                        <p className="text-sm font-bricolage">Happy Customer</p>
                      </div>
                    </div>
                    <p className="mb-3 font-bricolage">
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, rerum fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cum ab beatae?
                    </p>
                    <div className="txt-star flex gap-1">
                       <i className="ri-star-fill text-xl">⭐️</i>
                      <i className="ri-star-fill text-xl">⭐️</i>
                      <i className="ri-star-fill text-xl">⭐️</i>
                      <i className="ri-star-fill text-xl">⭐️</i>
                      <i className="ri-star-fill text-xl">⭐️</i>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="txt-item group shadow p-8 rounded-lg text-gray-500 hover:text-white transition-colors">
                    <div className="txt-user flex items-center gap-5 mb-4">
                      <img src={tst3} alt="txt-user" width={50} height={50} className='rounded-full' />
                      <div className="user-info">
                        <h5 className="font-semibold group-hover:text-white text-lg text-black transition-colors font-bricolage">Anjali</h5>
                        <p className="text-sm font-bricolage">Happy Customer</p>
                      </div>
                    </div>
                    <p className="mb-3 font-bricolage">
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, rerum fugit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus labore similique ab!
                    </p>
                    <div className="txt-star flex gap-1">
                       <i className="ri-star-fill text-xl">⭐️</i>
                      <i className="ri-star-fill text-xl">⭐️</i>
                      <i className="ri-star-fill text-xl">⭐️</i>
                      <i className="ri-star-fill text-xl">⭐️</i>
                      <i className="ri-star-fill text-xl">⭐️</i>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="txt-item group shadow p-8 rounded-lg text-gray-500 hover:text-white transition-colors">
                    <div className="txt-user flex items-center gap-5 mb-4">
                      <img src={tst2} alt="txt-user" width={50} height={50} className='rounded-full' />
                      <div className="user-info">
                        <h5 className="font-semibold group-hover:text-white text-lg text-black transition-colors font-bricolage">Rajan</h5>
                        <p className="text-sm font-bricolage">Happy Customer</p>
                      </div>
                    </div>
                    <p className="mb-3 font-bricolage">
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, rerum fugit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti inventore alias laudantium.
                    </p>
                    <div className="txt-star flex gap-1">
                       <i className="ri-star-fill text-xl">⭐️</i>
                      <i className="ri-star-fill text-xl">⭐️</i>
                      <i className="ri-star-fill text-xl">⭐️</i>
                      <i className="ri-star-fill text-xl">⭐️</i>
                      <i className="ri-star-fill text-xl">⭐️</i>
                    </div>
                  </div>
                </SwiperSlide>

              </Swiper>
          </motion.div>
      </div> */}
      <div className="testimonials lg:px-[12%] px-[8%] py-[80px] w-full">
  <motion.div
    initial={{ opacity: 0, y: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.4 }}
    viewport={{ once: true, amount: 0.5 }}
    className="textimonals-content w-full section-content space-y-4 mb-12 text-center"
  >
    <span className="text-blue-500 font-semibold text-lg">Testimonials</span>
    <h1 className="font-bricolage text-2xl sm:text-4xl md:text-5xl font-bold leading-tight">
      What our beloved Customers say about us <br />
      <span className="text-blue-600">Easily & Quickly</span>
    </h1>
    <button className="bg-blue-500 text-white px-8 py-3 text-md rounded font-semibold mt-4">
      Contact us
    </button>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, y: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.4 }}
    viewport={{ once: true, amount: 0.5 }}
  >
    <Swiper
      className="txt-swiper w-full"
      spaceBetween={30}
      loop={true}
      autoplay={{ delay: 2500 }}
      breakpoints={{
        0: { slidesPerView: 1 },
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1399: { slidesPerView: 3 }
      }}
    >
      {[tst1, tst2, tst3, tst2].map((img, i) => (
        <SwiperSlide key={i}>
          <div className="txt-item group shadow-lg p-6 md:p-8 rounded-lg text-gray-500 hover:text-white transition-colors bg-white hover:bg-blue-500">
            <div className="txt-user flex items-center gap-5 mb-4">
              <img src={img} alt="Customer" width={50} height={50} className="rounded-full" />
              <div className="user-info">
                <h5 className="font-semibold text-lg text-black group-hover:text-white transition-colors font-bricolage">
                  {i === 0 ? "Harshit Handa" : i === 1 ? "Rajan" : i === 2 ? "Anjali" : "Rajan"}
                </h5>
                <p className="text-sm font-bricolage">Happy Customer</p>
              </div>
            </div>
            <p className="mb-3 font-bricolage text-sm sm:text-base leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, rerum fugit.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eveniet placeat
              commodi.
            </p>
            <div className="txt-star flex gap-1 text-yellow-400">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <i key={i} className="ri-star-fill text-xl">⭐️</i>
                ))}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </motion.div>
</div>


      {/* Banner */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: .4 }}
          viewport={{ once: true, amount: 0.5 }}
          className='w-full banner flex items-center justify-center flex-col lg:px-[12px] px-[8px] py-[100px]'>
          <h1 className="md:text-5xl text-3xl font-bold mb-3">Subscribe to our Newletters</h1>
          <p className="w-[100%] xl-w-[60%] mx-auto md:text-base text-sm text-center pt-3 pb-12  text-gray-500 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti deleniti ipsa facilis, minima distinctio atque incidunt similique rem soluta excepturi id ea!</p>
          <div className="w-full md:w-[40%] flex items-center bg-white rounded-lg shadow px-4 py-2">
            <i className='ri-mail-line text-gray-400 text-xl mr-3'></i>
            <input type="email" placeholder='Enter your Email' className='flex-1 outline-none border-none text-gray-700 placeholder-gray-400 bg-transparent' />
            <button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors'>Subscribe</button>
            </div>
          </motion.div>
    </>
  )
}

export default Index
