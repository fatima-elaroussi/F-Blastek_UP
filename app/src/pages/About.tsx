import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
function About() {
    const services = [
        {
          icon: "../../../aboutPage/babysitting2.png",
          title: "BABY SITTING",
          description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, accusamus cum similique repellendus doloremque sint iusto veritatis."
        },
        {
          icon: "../../../aboutPage/cleaningIcon.png",
          title: "MENAGE",
          description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, accusamus cum similique repellendus doloremque sint iusto veritatis."
        },
        {
          icon: "../../../aboutPage/old-man.png",
          title: "AIDE A LA PERSONNE",
          description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, accusamus cum similique repellendus doloremque sint iusto veritatis."
        },
        {
          icon: "../../../aboutPage/teacher.png",
          title: "SOUTIEN SCOLAIRE",
          description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, accusamus cum similique repellendus doloremque sint iusto veritatis."
        }
      ]
    
    return (
        <div className="">
            {/* <Header /> */}

            <section className="overflow-hidden pt-10 pb-12 lg:pt-[120px] lg:pb-[80px] ">
                <div className="container mx-auto">
                    <div className="flex flex-wrap items-center  -mx-5">
                        <div className="w-full px-4 lg:w-6/12">
                            <div className="flex items-center -mx-3 sm:-mx-4">
                                <div className="w-full px-3 sm:px-4  xl:w-1/2">
                                    <div className="py-20 pl-1  sm:py-4">
                                        <img
                                            src="../../../aboutPage/about4.png"
                                            alt=""
                                            className="w-70  mx-auto rounded-2xl h-96 "
                                        />
                                    </div>
                                    <div className=" pl-1  sm:py-4">
                                        <img
                                            src="../../../aboutPage/about1.png"
                                            alt=""
                                            className="w-70 mx-auto rounded-2xl h-96"
                                        />
                                    </div>
                                </div>
                                <div className="w-full pr-5 sm:px-4 xl:w-1/2">
                                    <div className="relative z-10 my-4">
                                        <img
                                            src="../../../aboutPage/about2.png"
                                            alt=""
                                            className="w-70 rounded-2xl h-96"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-10 md:px-0 lg:w-1/2 xl:w-5/12">
                            <div className="mt-10 md:ml-8 lg:mt-0">
                                <span className="block mb-8 text-lg text-[#FF5C1A] md:text-4xl font-semibold text-primary">
                                    Why Choose Us
                                </span>
                                <h2 className="mb-5 md:text-3xl  text-[#9DB2BF] sm:text-[40px]/[48px]">
                                    Empowering Lives, One Service at a Time
                                </h2>
                                <p className="mb-5 text-base text-body-color">
                                    F’Blastek Une plateforme de mise en relation et d'assistance
                                    dans les démarches administratives relative à l'embauche
                                    d'un.e salarié.e à domicile. Les personnes cherchant une aide
                                    à domicle y trouvent des assistantes maternelles,
                                    des baby-sitters, des femmes de ménage, des auxiliaires de
                                    vie, des aides à domicile, des dames de compagnie ou encore
                                    des professeurs de soutien scolaire et cours particuliers.{" "}
                                </p>
                                <p className="mb-8 text-base text-body-color ">
                                    F’Blastek automatise toutes vos démarches et vous permet de
                                    profiter d'un acompagnement administratif et juridique
                                    personnalisé.
                                </p>
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center py-3 text-base font-medium text-white mt-8 text-center  border border-transparent rounded-md px-7 bg-[#FF5C1A] hover:bg-opacity-90"
                                >
                                    Get Started
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className=" px-6 md:px-10 bg-white max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-[#FF5C1A] text-center mb-6">
        What We Offer
      </h2>
      
      <div className="max-w-3xl mx-auto mb-16 bg-white rounded-lg shadow-md p-8 border-l-4 border-[#20B486]">
        <p className="text-gray-700 leading-relaxed text-center">
          We offer a comprehensive range of services tailored to meet your
          needs. Whether you're seeking reliable babysitting services for your
          little ones, dedicated home schooling assistance to support your
          child's education, compassionate care giver services for elderly
          family members, or efficient housekeeping solutions to keep your
          home tidy and organized, we've got you covered. Our team is
          committed to delivering top-quality service with professionalism and
          care, ensuring peace of mind for all our clients.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
          >
            <div className="p-6  flex items-center justify-center">
              <img
                className="w-16 h-16 object-contain"
                src={service.icon}
                alt={service.title}
              />
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-center mb-4 font-semibold text-lg text-[#20B486]">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                {service.description}
              </p>
              <div className="mt-4 text-center">
                <a 
                  href="#" 
                  className="inline-flex items-center text-[#FF5C1A] hover:text-[#e5511a] font-medium text-sm"
                >
                  Learn more
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
            {/* <section className="text-gray-700 body-font mt-10">
            <div className="flex justify-center text-3xl font-bold text-gray-800 text-center"> */}

            {/* </div>
    <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap text-center justify-center">
            <div className="p-4 md:w-1/4 sm:w-1/2">
                <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                    <div className="flex justify-center">
                        <img src="https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp" className="w-32 mb-3"/>
                    </div>
                    <h2 className="title-font font-regular text-2xl text-gray-900">Latest Milling Machinery</h2>
                </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2">
                <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                    <div className="flex justify-center">
                        <img src="https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp" className="w-32 mb-3"/>
                    </div>
                    <h2 className="title-font font-regular text-2xl text-gray-900">Reasonable Rates</h2>
                </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2">
                <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                    <div className="flex justify-center">
                        <img src="https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp" className="w-32 mb-3"/>
                    </div>
                    <h2 className="title-font font-regular text-2xl text-gray-900">Time Efficiency</h2>
                </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2">
                <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                    <div className="flex justify-center">
                        <img src="https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp" className="w-32 mb-3"/>
                    </div>
                    <h2 className="title-font font-regular text-2xl text-gray-900">Expertise in Industry</h2>
                </div>
            </div>

        </div> */}
            {/* </div>
            </section> */}

            {/* <Footer /> */}
        </div>
    );
}

export default About;
