import React, { useContext } from "react";
import { ThemeContext } from "../AddProvider/ThemeProvider";
import Customization from "../Firebase/Customization";
import { Typewriter } from "react-simple-typewriter";

export default function AboutPage() {
    const { theme } = useContext(ThemeContext)
    const getTextClass = () => (theme === "dark" ? "text-gray-100" : "text-gray-900");
    const getSubTextClass = () => (theme === "dark" ? "text-white/75" : "text-gray-800");
    const getBgClass = () => (theme === "dark" ? "bg-gray-800 text-gray-100" : "");

    const teamMembers = [
        {
            id: 1,
            name: "John Doe",
            position: "CEO & Founder",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtJcfgOAc8USRCIZQS-Bo-5eldLn6s5x8h8nY6oQuaeB6KL2hbTC-bSgNd0TTvIJaN-nY&usqp=CAU",
            alt: "John Doe - CEO & Founder",
        },
        {
            id: 2,
            name: "Jane Smith",
            position: "Chief Operating Officer",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkL4nwNk6k_5nZ_F5Mmo4QauoglmkDTd9VRJ_gd_n1WTQkCPrv7b2n-_iz_cBgpCubDyI&usqp=CAU",
            alt: "Jane Smith - COO",
        },
        {
            id: 3,
            name: "Michael Brown",
            position: "Tech Lead",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC8NRolm5JyDhzeCsCA68QTFNO0jCzRXzJ-m_XNRVTST9dT2--DGwVMDjQRKerYEFPdBY&usqp=CAU",
            alt: "Michael Brown - Tech Lead",
        },
    ];

    return (
        <main className={` ${theme === "dark" ? 'bg-[#1D232A] text-white' : 'bg-base-100 text-black'} mt-12`}>
            {/* Header Section */}
            <section className="bg-gradient-to-rtext-white py-16 text-center">
                <h1 className=" text-xl md:text-2xl  text-secondary lg:text-5xl font-extrabold mb-4">
                    <Typewriter
                        words={['About Crowdcube']}
                        loop={Infinity}
                        cursor
                        cursorStyle='_'
                        typeSpeed={50}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </h1>
                <p className={`text-xl text-gray-600 max-w-2xl mx-auto ${getSubTextClass()}`}>
                    Empowering Dreams Through Crowdfunding
                </p>
            </section>
            {/* Mission and Vision Section */}
            <section className="container mx-auto px-6 py-12 grid gap-12 md:grid-cols-2">
                <div>
                    <h2 className="text-3xl font-bold text-secondary mb-4">Our Mission</h2>
                    <p className={`text-xl max-w-2xl mx-auto ${getSubTextClass()}`}>
                        To provide a platform where anyone can bring their ideas to life through community support.
                    </p>
                </div>
                <div>
                    <h2 className="text-3xl font-bold  text-secondary mb-4">Our Vision</h2>
                    <p className={`text-xl max-w-2xl mx-auto ${getSubTextClass()}`}>
                        To build a world where opportunities are accessible to everyone, regardless of their background.
                    </p>
                </div>
            </section>

            {/* How We Work Section */}
            <section className="py-12">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-8 text-secondary">How We Work</h2>
                    <ul className={`list-disc pl-10 space-y-4 text-xl text-left max-w-2xl ${getSubTextClass()}`}>
                        <li>Campaign creation with clear goals and timelines.</li>
                        <li>Easy donation process for contributors.</li>
                        <li>Ensuring transparency and security for all users.</li>
                    </ul>
                </div>
            </section>


            {/* Our Story Section */}
            <section className="container mx-auto px-6 py-12">
                <h2 className="text-3xl font-bold  text-secondary mb-4 text-center">Our Story</h2>
                <p className={`text-xl ${getSubTextClass()} text-lg leading-relaxed text-center max-w-4xl mx-auto`}>
                    Crowdcube started with a vision to empower dreamers. Over the years, we've helped countless
                    individuals turn their aspirations into reality, fostering innovation and community-driven success.
                </p>
            </section>

            {/* Meet Our Team Section */}
            <Customization>
                <section className="py-12">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center  text-secondary mb-8">Meet Our Team</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {teamMembers.map((member) => (
                                <div
                                    key={member.id}
                                    className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-white'}p-9 py-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border-primary border-2`}
                                >
                                    <img
                                        className="w-24 h-24 rounded-full mx-auto border-4 border-indigo-600"
                                        src={member.image}
                                        alt={member.alt}
                                    />
                                    <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
                                    <p className="text-sm mb-3 text-gray-600">{member.position}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </Customization>


        </main>
    );
}
