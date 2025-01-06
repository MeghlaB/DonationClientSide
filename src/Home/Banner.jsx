// import logo from '../assets/banner1.jpg';
// import banner2 from '../assets/banner2.jpg';
// import banner3 from '../assets/banner3.jpg';
// import banner4 from '../assets/banner4.jpg';
// import { useCallback, useEffect, useState } from "react";

// export default function Banner() {
//   const [currentSlider, setCurrentSlider] = useState(0);
//   const carouselImages = [
//     { image: logo, title: "Support Medical Expenses", description: "Your contribution can make a life-changing difference." },
//     { image: banner2, title: "Group of Friends Outdoors", description: "A cheerful group enjoying a lush green environment." },
//     { image: banner3, title: "Support Business Initiatives", description: "Help raise funds to launch new products or services." },
//     { image: banner4, title: "Support Creative Projects", description: "Provide assistance for creating businesses, films, and apps." },
//   ];

//   const prevSlider = () =>
//     setCurrentSlider((currentSlider) =>
//       currentSlider === 0 ? carouselImages.length - 1 : currentSlider - 1
//     );

//   const nextSlider = useCallback(
//     () =>
//       setCurrentSlider((currentSlider) =>
//         currentSlider === carouselImages.length - 1 ? 0 : currentSlider + 1
//       ),
//     [carouselImages.length]
//   );

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       nextSlider();
//     }, 4000); // Change slides every 5 seconds
//     return () => clearInterval(intervalId);
//   }, [nextSlider]);

//   return (
//     <div className="relative w-full overflow-hidden h-[500px] lg:h-[640px] bg-black">
//       {/* Navigation Buttons */}
//       <button
//         onClick={prevSlider}
//         className="absolute top-1/2 left-5 transform -translate-y-1/2 z-50 bg-white text-black rounded-full w-10 h-10 flex justify-center items-center shadow-lg hover:bg-gray-200"
//       >
//         <svg
//           className="w-6 h-6"
//           viewBox="0 0 24 24"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M15 19l-7-7 7-7"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//       </button>

//       <button
//         onClick={nextSlider}
//         className="absolute top-1/2 right-5 transform -translate-y-1/2 z-50 bg-white text-black rounded-full w-10 h-10 flex justify-center items-center shadow-lg hover:bg-gray-200"
//       >
//         <svg
//           className="w-6 h-6"
//           viewBox="0 0 24 24"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M9 5l7 7-7 7"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//       </button>

//       {/* Slider Content */}
//       <div
//         className="ease-linear duration-700 flex"
//         style={{ transform: `translateX(-${currentSlider * 100}%)` }}
//       >
//         {carouselImages.map((slide, idx) => (
//           <div
//             key={idx}
//             className="w-full h-[500px] lg:h-[640px] flex-shrink-0 relative"
//           >
//             <img
//               src={slide.image}
//               alt={`Slide ${idx + 1}`}
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white p-6">
//               <h2 className="text-3xl md:text-5xl font-bold">{slide.title}</h2>
//               <p className="mt-4 text-lg md:text-2xl">{slide.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Pagination Indicators */}
//       <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-50">
//         {carouselImages.map((_, idx) => (
//           <button
//             key={idx}
//             onClick={() => setCurrentSlider(idx)}
//             className={`w-3 h-3 rounded-full ${
//               currentSlider === idx ? "bg-white" : "bg-gray-400"
//             }`}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// }

import logo from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';
import banner4 from '../assets/banner4.jpg';
import { useCallback, useEffect, useState } from "react";

export default function Banner() {
  const [currentSlider, setCurrentSlider] = useState(0);
  const carouselImages = [
    { image: logo, title: "Support Medical Expenses", description: "Your contribution can make a life-changing difference." },
    { image: banner2, title: "Group of Friends Outdoors", description: "A cheerful group enjoying a lush green environment." },
    { image: banner3, title: "Support Business Initiatives", description: "Help raise funds to launch new products or services." },
    { image: banner4, title: "Support Creative Projects", description: "Provide assistance for creating businesses, films, and apps." },
  ];

  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? carouselImages.length - 1 : currentSlider - 1
    );

  const nextSlider = useCallback(
    () =>
      setCurrentSlider((currentSlider) =>
        currentSlider === carouselImages.length - 1 ? 0 : currentSlider + 1
      ),
    [carouselImages.length]
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 5000); 
    return () => clearInterval(intervalId);
  }, [nextSlider]);

  return (
    <div className="relative w-full overflow-hidden h-[500px] lg:h-[640px] bg-black">
      {/* Navigation Buttons */}
      <button
        onClick={prevSlider}
        className="absolute top-1/2 left-5 transform -translate-y-1/2 z-50 bg-white text-black rounded-full w-10 h-10 flex justify-center items-center shadow-lg hover:bg-gray-200"
      >
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 19l-7-7 7-7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button
        onClick={nextSlider}
        className="absolute top-1/2 right-5 transform -translate-y-1/2 z-50 bg-white text-black rounded-full w-10 h-10 flex justify-center items-center shadow-lg hover:bg-gray-200"
      >
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 5l7 7-7 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Slider Content */}
      <div
        className="ease-linear duration-700 flex"
        style={{ transform: `translateX(-${currentSlider * 100}%)` }}
      >
        {carouselImages.map((slide, idx) => (
          <div
            key={idx}
            className="w-full h-[500px] lg:h-[640px] flex-shrink-0 relative"
          >
            {/* Blurred Background */}
            <img
              src={slide.image}
              alt={`Slide ${idx + 1}`}
              className="absolute inset-0 w-full h-full object-cover blur-sm"
            />
            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white p-6">
              <h2 className="text-3xl md:text-5xl text-secondary font-bold">{slide.title}</h2>
              <p className="mt-4 text-lg md:text-2xl">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-50">
        {carouselImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlider(idx)}
            className={`w-3 h-3 rounded-full ${
              currentSlider === idx ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
