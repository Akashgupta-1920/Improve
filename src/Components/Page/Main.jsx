// import React, { useState } from "react";

// const highlightsData = [
//   {
//     title: "JEEACHIEVERS ADVANCED 2025",
//     description: "JEEACHIEVERS ADVANCED 2025",
//     imgSrc: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a7f9a001-8136-46c2-930f-d44e72543b63.png",
//   },
//   {
//     title: "CBSE RESULTS CLASS XII",
//     description: "CBSE Results Class XII",
//     imgSrc: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f2779308-f207-4169-923e-cc17fec7bba7.png",
//   },
//   {
//     title: "CBSE RESULTS CLASS X",
//     description: "CBSE Results Class X",
//     imgSrc: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2b6b8380-21dc-4125-b8b6-da3abadde3ed.png",
//   },
// ];

// const toppersData = [
//   {
//     name: "Shivangi Tripathi",
//     classInfo: "Class XII (Humanities)-97.2%",
//     imgSrc:
//       "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c83761fc-f147-4f1c-8006-3101a9788ac9.png",
//   },
//   {
//     name: "Ekatva Kushvaha",
//     classInfo: "Class XII (Science)-96.8%",
//     imgSrc:
//       "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/583a3233-b9cd-42f1-83b3-13950676c140.png",
//   },
//   {
//     name: "Madhav Bansal",
//     classInfo: "Class XII (Science)-96.4%",
//     imgSrc:
//       "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/64a317d9-4de4-4372-92f1-7140361181b2.png",
//   },
//   {
//     name: "Soumya Sharma",
//     classInfo: "Class XII (Science)-96%",
//     imgSrc:
//       "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/32f972b3-7612-4966-8cd6-416d33f02d13.png",
//   },
//   {
//     name: "Siddhant Tiwari",
//     classInfo: "Class X-99.4%",
//     imgSrc:
//       "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b329bb15-218f-436d-ac57-1bc61f8f65b5.png",
//   },
// ];

// const mentorsData = [
//   {
//     name: "Mentor 1",
//     imgSrc:
//       "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a41d65ea-1e74-4796-aa2a-3bef99d0413e.png",
//   },
//   {
//     name: "Mentor 2",
//     imgSrc:
//       "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/156f0eca-c5ca-4648-b5a4-140dc4b4f4ce.png",
//   },
//   {
//     name: "Mentor 3",
//     imgSrc:
//       "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d3a6fbcc-4ec1-4a40-a6be-2e113272c496.png",
//   },
//   {
//     name: "Mentor 4",
//     imgSrc:
//       "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/768b9cc5-0dbf-458b-b505-f4292f051889.png",
//   },
// ];

// function Main() {
//   const [highlightIdx, setHighlightIdx] = useState(0);
//   const [toppersIdx, setToppersIdx] = useState(0);
//   const [testimonialIdx, setTestimonialIdx] = useState(0);

//   const testimonials = [
//     `We would like to thank you very much for your warm welcome and wonderful hospitality. The school is such an excellent experience. You should be very proud of your students. The beautiful singing and the magnificent dancing and performance was a spectacle that we will always remember. Your students have such wonderful energy. We feel very privileged to have had the opportunity to be with you. Thank you again for everything. Our best wishes to your students and teachers.`,
//   ];

//   function cycleHighlight(step) {
//     setHighlightIdx((prev) => (prev + step + highlightsData.length) % highlightsData.length);
//   }

//   function cycleToppers(step) {
//     setToppersIdx((prev) => (prev + step + toppersData.length) % toppersData.length);
//   }

//   function cycleTestimonial(step) {
//     setTestimonialIdx((prev) => (prev + step + testimonials.length) % testimonials.length);
//   }

//   return (
//     <div className="font-serif">
//       {/* Top Info Bar */}
//       <div className="bg-white text-green-900 text-sm text-center py-1 border-b border-green-600">
//         CBSE Affiliation No.: 2130647 (1 Apr 2025 to 31 Mar 2030) | School Code : 60287 | Call US : +91-0120-4660000, 4670000 | Email Id : info@dpsindirapuram.com | Contact Us |{" "}
//         <span className="font-bold cursor-pointer hover:underline">Online Fee Payment</span> |{" "}
//         <span className="font-bold cursor-pointer hover:underline">ERP LOGIN</span>
//       </div>

//       {/* Header */}
//       <header className="flex flex-col md:flex-row items-center justify-between bg-white border-b border-green-600 px-4 md:px-10 py-3">
//         <div className="flex items-center space-x-3">
//           <svg
//             className="w-16 h-16 text-green-900"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             viewBox="0 0 24 24"
//             aria-hidden="true"
//           >
//             <path
//               d="M4 17l-1-1 2-5 6 3 6-2-2 6-4 2-7-3z"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//           <div>
//             <h1 className="text-3xl font-extrabold text-green-900 leading-none">
//               DPS INDIRAPURAM
//             </h1>
//             <p className="text-green-700 text-xs">Under the aegis of The DPS Society, East of Kailash, New Delhi</p>
//           </div>
//         </div>

//         <nav className="mt-3 md:mt-0 flex flex-wrap gap-3 justify-center">
//           {["Registration", "Eligibility Criteria for Class XI", "Admission Enquiry"].map((item) => (
//             <button
//               key={item}
//               className="border border-green-700 rounded-full px-6 py-2 text-green-900 font-semibold hover:bg-green-100 transition-colors"
//               aria-label={item}
//             >
//               {item}
//             </button>
//           ))}
//         </nav>

//         <div className="hidden md:block">
//           <img
//             src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8f2e8bf1-6314-4948-a0c5-60ee935a75bd.png"
//             alt="British Council International Dimension in Schools 2020-23 logo with multicolor circular design and text"
//             className="h-20 w-20 object-contain"
//             onError={(e) => {
//               e.target.onerror = null;
//               e.target.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/74592ebd-2fa5-4895-a368-89aafff098de.png";
//             }}
//           />
//         </div>
//       </header>

//       {/* AI lab banner */}
//       <div className="flex items-center space-x-1 px-5 py-2 bg-white border-b border-green-600 text-green-700 text-sm font-semibold">
//         <span className="text-yellow-400 text-xl select-none">💥</span>
//         <span>Visit Our AI Lab</span>
//       </div>

//       {/* Nav bar */}
//       <nav className="bg-green-800 text-white text-xs md:text-sm font-semibold flex justify-center flex-wrap gap-4 py-2">
//         {[
//           "HOME",
//           "ABOUT US",
//           "ADMISSION",
//           "ACADEMIC PLAN",
//           "INFRASTRUCTURE & FACILITIES",
//           "BEYOND ACADEMICS",
//           "GALLERY",
//           "ANNUAL REPORT",
//           "OUR ALUMNI",
//           "FIT INDIA MOVEMENT",
//           "DPS BLOG",
//           "CONTACT US",
//         ].map((item) => (
//           <a
//             key={item}
//             href="#"
//             className="hover:underline hover:text-green-300 px-2"
//             aria-label={item}
//           >
//             {item}
//           </a>
//         ))}
//       </nav>

//       {/* Main Banner */}
//       <section className="relative bg-black text-white flex items-center justify-between p-4 md:p-10 min-h-[350px] md:min-h-[450px]">
//         <div className="text-left max-w-xl leading-tight tracking-wider">
//           <h2 className="text-4xl md:text-5xl font-extrabold leading-snug">
//             Inside a great humanitarian is an empathetic child.
//           </h2>
//           <p className="border border-white inline-block px-3 py-1 mt-6 text-xs font-mono cursor-default">
//             ADMISSION OPEN &rarr; CALL: 0120-4660000
//           </p>
//           <p className="mt-3 font-mono text-xs cursor-default">www.dpsindirapuram.com</p>
//         </div>
//         <div aria-hidden="true">
//           <svg
//             className="w-48 h-60 fill-white opacity-60"
//             viewBox="0 0 64 80"
//             xmlns="http://www.w3.org/2000/svg"
//             aria-hidden="true"
//           >
//             <path d="M6 0h10l15 50L50 0h10v80H0V0z" />
//           </svg>
//         </div>
//       </section>

//       {/* Welcome Section */}
//       <section className="py-10 px-5 md:px-24 bg-[url('https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1e189cdf-0dd8-4760-93ac-f872416e2e2d.png')] bg-contain bg-center">
//         <h1 className="font-bold text-center text-3xl mb-2">Welcome to DPS Indirapuram</h1>
//         <p className="text-center font-semibold mb-6">Soaring High... We reach for the sky!</p>
//         <div className="flex flex-col md:flex-row items-center gap-6 max-w-5xl mx-auto">
//           <img
//             src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0dd6851c-3e56-4fb3-b9a7-1cb3e4720c52.png"
//             alt="Group of five school students standing shoulder to shoulder in white uniforms with green belt, posing with arms crossed and smiling."
//             className="rounded shadow-md"
//             onError={(e) => {
//               e.target.onerror = null;
//               e.target.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0080c5a2-76fb-4c42-b0e1-f9c269575544.png";
//             }}
//           />
//           <p className="text-sm text-justify max-w-xl">
//             Delhi Public School Indirapuram, established in the year 2003, is a premier
//             school under the aegis of the Delhi Public School Society, New Delhi.
//             Affiliated to the Central Board of Secondary Education (CBSE), the institution
//             has an educational policy that is dynamic in approach and in accordance with
//             the changing needs of the society. The school aims at providing a conducive
//             environment to stimulate intellectual growth of each child, thereby ensuring
//             that their energy is properly channelized in the right direction.
//           </p>
//         </div>
//       </section>

//       {/* Highlights */}
//       <section className="py-10 px-6 md:px-20 max-w-7xl mx-auto">
//         <h2 className="text-center text-3xl font-bold mb-1">HIGHLIGHTS</h2>
//         <p className="text-center font-semibold mb-4 cursor-pointer text-green-800 hover:underline">
//           View All
//         </p>
//         <div className="flex justify-center items-center space-x-6">
//           <button
//             aria-label="Previous highlight"
//             onClick={() => cycleHighlight(-1)}
//             className="font-bold text-3xl text-green-800 p-2 hover:text-green-600"
//           >
//             ‹
//           </button>
//           <div className="max-w-xs text-center">
//             <img
//               src={highlightsData[highlightIdx].imgSrc}
//               alt={`${highlightsData[highlightIdx].title} poster showcasing achievement with student or graphics`}
//               className="mx-auto mb-2 rounded shadow-md"
//               onError={(e) => {
//                 e.target.onerror = null;
//                 e.target.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2cd5d753-e16f-487e-828e-f4f600ee314b.png";
//               }}
//             />
//             <h3 className="font-semibold text-lg">{highlightsData[highlightIdx].title}</h3>
//             <p className="text-sm">{highlightsData[highlightIdx].description}</p>
//             <button className="mt-2 px-6 py-1 border border-orange-500 rounded-full text-orange-500 hover:bg-orange-50 transition-colors">
//               Read More
//             </button>
//           </div>
//           <button
//             aria-label="Next highlight"
//             onClick={() => cycleHighlight(1)}
//             className="font-bold text-3xl text-green-800 p-2 hover:text-green-600"
//           >
//             ›
//           </button>
//         </div>
//       </section>

//       {/* Video Gallery */}
//       <section className="py-10 bg-green-800 text-white px-4 md:px-20">
//         <h2 className="text-center text-3xl font-bold mb-6">VIDEO GALLERY</h2>
//         <div className="max-w-4xl mx-auto aspect-video">
//           <iframe
//             width="100%"
//             height="360"
//             src="https://www.youtube.com/embed/8E6LPpOcSDE"
//             title="Josh 2024 DPS | The Annual Sports Meet | Mr. Sumit Antil"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//             className="rounded shadow-lg"
//           ></iframe>
//         </div>
//       </section>

//       {/* Toppers Section */}
//       <section className="py-10 px-6 md:px-20 max-w-7xl mx-auto">
//         <h2 className="text-center text-3xl font-bold">TOPPERS</h2>
//         <p className="text-center mb-5 font-semibold">Class X & XII Toppers (2024-25)</p>
//         <div className="flex justify-center items-center space-x-6">
//           <button
//             aria-label="Previous toppers"
//             onClick={() => cycleToppers(-1)}
//             className="font-bold text-3xl text-green-800 p-2 hover:text-green-600"
//           >
//             ‹
//           </button>
//           <div className="flex space-x-4">
//             {toppersData
//               .slice(toppersIdx, toppersIdx + 5)
//               .map(({ name, classInfo, imgSrc }, i) => (
//                 <div
//                   key={name + i}
//                   className="text-center shadow-md rounded overflow-hidden max-w-[150px] cursor-default"
//                 >
//                   <img
//                     className="w-full h-auto max-h-[200px] object-cover"
//                     src={imgSrc}
//                     alt={`Portrait of topper ${name} with class info ${classInfo}`}
//                     loading="lazy"
//                     onError={(e) => {
//                       e.target.onerror = null;
//                       e.target.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/69b62638-220c-458d-8f04-226211db485d.png";
//                     }}
//                   />
//                   <div className="bg-green-900 text-white px-2 py-2 text-xs font-semibold">
//                     <p>{name}</p>
//                     <p>{classInfo}</p>
//                   </div>
//                 </div>
//               ))}
//           </div>
//           <button
//             aria-label="Next toppers"
//             onClick={() => cycleToppers(1)}
//             className="font-bold text-3xl text-green-800 p-2 hover:text-green-600"
//           >
//             ›
//           </button>
//         </div>
//       </section>

//       {/* Sports Award banner */}
//       <section className="relative bg-[url('https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5b3801ce-08b4-42fc-be8d-3772b2459209.png')] bg-cover bg-center min-h-[180px] flex items-center justify-center text-white font-bold text-4xl">
//         <div className="bg-black bg-opacity-40 p-6 rounded">
//           SWIMMING STAR
//         </div>
//       </section>

//       {/* Testimonial Section */}
//       <section className="py-10 bg-green-800 text-white px-6 md:px-20 text-center max-w-3xl mx-auto">
//         <h2 className="text-3xl font-bold mb-4">TESTIMONIAL</h2>
//         <p className="mb-4">{testimonials[testimonialIdx]}</p>
//         <p className="text-lg font-semibold italic mb-1">""</p>
//         <p>MR. DAVE LOMAX AND MR. F CHOUDHARY</p>
//         <p>Q3 Academy west Midlands UK</p>
//         <div className="mt-6 flex justify-center space-x-4 text-3xl cursor-pointer">
//           <button
//             aria-label="Previous Testimonial"
//             onClick={() => cycleTestimonial(-1)}
//             className="hover:text-green-300"
//           >
//             ‹
//           </button>
//           <button
//             aria-label="Next Testimonial"
//             onClick={() => cycleTestimonial(1)}
//             className="hover:text-green-300"
//           >
//             ›
//           </button>
//         </div>
//       </section>

//       {/* Our Mentors Section */}
//       <section className="py-10 px-6 md:px-20 max-w-7xl mx-auto">
//         <h2 className="text-center text-3xl font-bold mb-8">OUR MENTORS</h2>
//         <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
//           {mentorsData.map(({ name, imgSrc }) => (
//             <div key={name} className="text-center rounded shadow-md overflow-hidden">
//               <img
//                 src={imgSrc}
//                 alt={`Portrait photo of mentor named ${name}, professional photo`}
//                 className="w-full object-cover max-h-[250px]"
//                 onError={(e) => {
//                   e.target.onerror = null;
//                   e.target.src = "https://placehold.co/200x250?text=Image+Unavailable";
//                 }}
//               />
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Social Icons vertical left */}
//       <div className="fixed top-1/2 left-0 flex flex-col space-y-2 transform -translate-y-1/2 z-40">
//         {[
//           { href: "https://www.facebook.com", label: "Facebook", icon: "f" },
//           { href: "https://www.youtube.com", label: "YouTube", icon: "▶" },
//           { href: "https://www.linkedin.com", label: "Linkedin", icon: "in" },
//           { href: "https://www.instagram.com", label: "Instagram", icon: "📸" },
//         ].map(({ href, label, icon }) => (
//           <a
//             key={label}
//             href={href}
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label={label}
//             className="bg-green-700 hover:bg-green-900 text-white rounded-r px-3 py-2 font-bold text-center text-xl"
//           >
//             {icon}
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Main;

