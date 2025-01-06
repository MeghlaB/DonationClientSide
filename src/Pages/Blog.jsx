import React, { useContext } from 'react'
import { ThemeContext } from '../AddProvider/ThemeProvider';
import { Typewriter } from 'react-simple-typewriter';
import Customization from '../Firebase/Customization';

export default function Blog() {
  const { theme } = useContext(ThemeContext);

  
  const getTextClass = () => (theme === "dark" ? "text-gray-100" : "text-gray-900");
  const getSubTextClass = () => (theme === "dark" ? "text-white/75" : "text-gray-500");
  const getBgClass = () => (theme === "dark" ? "bg-gray-800 text-gray-100" : "bg-gray-100");

  return (
    <>
      <section className={`py-10`}>
        <div className="container mx-auto text-center">
          <h2 className={`text-4xl font-extrabold mb-8 ${getTextClass()}`}>
            <Typewriter
                    words={['Explore Our Categories']}
                    loop={Infinity}
                    cursor
                    cursorStyle='_'
                    typeSpeed={50}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
            </h2>
          <Customization>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Education Category */}
            <div className={`category-card shadow-lg p-6 rounded-lg transform hover:scale-105 transition duration-300 ${getBgClass()}`}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2_iRK0c4zQNhCqy1Fe_AzubyG6Vb6r_3Uvw&s"
                alt="Education"
                className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-secondary"
              />
              <h4 className={`font-semibold text-xl text-secondary`}>Education</h4>
              <p className={`mt-2 ${getSubTextClass()}`}>Empower students with the right tools for learning and growth.</p>
            </div>

            {/* Healthcare Category */}
            <div className={`category-card shadow-lg p-6 rounded-lg transform hover:scale-105 transition duration-300 ${getBgClass()}`}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdmmiRWQj5KD_1J7VFORc8cyd1Cx-kC5Aybg&s"
                alt="Healthcare"
                className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-secondary"
              />
              <h4 className={`font-semibold text-xl  text-secondary`}>Healthcare</h4>
              <p className={`mt-2 ${getSubTextClass()}`}>Support healthcare initiatives to improve lives and wellness.</p>
            </div>

            {/* Environment Category */}
            <div className={`category-card shadow-lg p-6 rounded-lg transform hover:scale-105 transition duration-300 ${getBgClass()}`}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlj9JogStdKXF1Tl_q4reDjU5K53ghhjTYsw&s0"
                alt="Environment"
                className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-secondary"
              />
              <h4 className={`font-semibold text-xl text-secondary`}>Environment</h4>
              <p className={`mt-2 ${getSubTextClass()}`}>Help preserve our planet by supporting environmental causes.</p>
            </div>

            {/* Animal Welfare Category */}
            <div className={`category-card shadow-lg p-6 rounded-lg transform hover:scale-105 transition duration-300 ${getBgClass()}`}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8lHxEtThNdEGf-rrLtJK_-oaO1ugYoWL-6mtpIVT4ZLwXNCgLDidD6t6JtHQn1UWIc2E&usqp=CAU"
                alt="Animal Welfare"
                className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-secondary"
              />
              <h4 className={`font-semibold text-xl  text-secondary`}>Animal Welfare</h4>
              <p className={`mt-2 ${getSubTextClass()}`}>Join us in protecting and advocating for animals in need.</p>
            </div>
          </div>
          </Customization>
        </div>
      </section>
    </>
  );
}
