import React, { useContext, useEffect } from 'react'
import img1 from '../assets/benifits.png'
import img2 from '../assets/sequire.png'
import img3 from '../assets/updare.png'
import img4 from '../assets/donate.png'
import img5 from '../assets/verified.png'
import img6 from '../assets/impcat.png'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Typewriter } from 'react-simple-typewriter'
import Customization from '../Firebase/Customization'
import { ThemeContext } from '../AddProvider/ThemeProvider'



export default function Feauterd() {
  const { theme } = useContext(ThemeContext);

  const getTextClass = () => (theme === "dark" ? "text-gray-100" : "text-gray-900");
  const getSubTextClass = () => (theme === "dark" ? "text-white/75" : "text-gray-800");
  const getBgClass = () => (theme === "dark" ? "bg-gray-800 text-gray-100" : "");


  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);


  return (
    <div>
      <section className={`py-12 px-6 lg:px-0 ${getTextClass()}`}>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">
            <Typewriter
              words={['Why to Choose Our Campaigns']}
              loop={0}
              cursor
              cursorStyle={<span style={{ color: 'purple', fontSize: '30px' }}>|</span>}
              typeSpeed={50}
              deleteSpeed={50}
              delaySpeed={1000}
            />

          </h2>
        </div>
        <Customization>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
            {/* card1 */}
            <div className={`text-left p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition ${getBgClass()}`}>
              <div className="flex justify-center items-center mb-6 w-16 h-16 bg-orange-100 rounded-full ">
                <img src={img1} alt="Avail Tax Benefits" />
              </div>
              <h3 className="font-bold text-lg text-secondary mb-2">Avail Tax Benefits</h3>
              <p className={getSubTextClass()}>Get an 80G certificate with every donation & save on tax..</p>
            </div>

            {/* card2 */}
            <div className={`text-left p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition ${getBgClass()}`}>
              <div className="flex justify-center items-center mb-6 w-16 h-16 bg-orange-100 rounded-full ">
                <img src={img2} alt="Trustworthy & Secure" />
              </div>
              <h3 className="font-bold text-lg text-secondary mb-2">Trustworthy & Secure</h3>
              <p className={getSubTextClass()}>Payment process and donors’ data is completely secure and encrypted.</p>
            </div>
            {/* card3 */}
            <div className={`text-left p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition ${getBgClass()}`}>
              <div className="flex justify-center items-center mb-6 w-16 h-16 bg-orange-100 rounded-full ">
                <img src={img3} alt="Avail Tax Benefits" />
              </div>
              <h3 className="font-bold text-lg text-secondary mb-2">Regular Updates</h3>
              <p className={getSubTextClass()}>Get regular updates about the impact you’ve created</p>
            </div>

            {/* card4 */}
           
            <div className={`text-left p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition ${getBgClass()}`}>
              <div className="flex justify-center items-center mb-6 w-20 h-20  rounded-full ">
                <img src={img4} alt="Avail Tax Benefits" />
              </div>
              <h3 className="font-bold text-lg text-secondary mb-2">Donate Hassle-free</h3>
              <p className={getSubTextClass()}>We accept donations via all popular payment modes..</p>
            </div>

            {/* card5 */}
            <div className={`text-left p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition ${getBgClass()}`}>
              <div className="flex justify-center items-center mb-6 w-20 h-20  rounded-full">
                <img src={img5} alt="Avail Tax Benefits" />
              </div>
              <h3 className="font-bold text-lg text-secondary mb-2">100% Verified Campaign</h3>
              <p className={getSubTextClass()}>Rigorous and stringent due-diligence procedures.</p>
            </div>
            {/* card6 */}
            <div className={`text-left p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition ${getBgClass()}`}>
              <div className="flex justify-center items-center mb-6 w-20 h-20  rounded-full ">
                <img src={img6} alt="Avail Tax Benefits" />
              </div>
              <h3 className="font-bold text-lg text-secondary mb-2">Greater Impact</h3>
              <p className={getSubTextClass()}>Save one life at a time with every donation..</p>
            </div>
          </div>
        </Customization>
      </section>

    </div>
  )
}
