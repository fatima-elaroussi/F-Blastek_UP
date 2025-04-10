import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function ServiceSection() {
  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-[#20B486] mb-12" data-aos="fade-up">
          Varied Services to Meet All Your Needs
        </h2>
        
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8">
          {/* Card 1 - Baby Sitting */}
          <div className="flex flex-col items-center max-w-sm mx-auto w-full bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
            <div className="w-full h-56 overflow-hidden">
              <img
                className="w-full h-full object-contain bg-gray-50 p-4"
                src="../../../landingPage/babysitting.png"
                alt="Baby Sitting Service"
              />
            </div>
            <div className="p-6">
              <h3 className="text-[#EBB016] font-bold text-xl mb-3 text-center">BABY SITTING</h3>
              <p className="text-[#7E7E7E] text-sm mb-6 text-center">
                Among over 1 million qualified and trustworthy professionals, find
                the babysitter that meets your needs for childcare with confidence and peace of mind.
              </p>
              <div className="flex justify-center">
                <button className="bg-[#20B486] text-white py-2 px-4 rounded-md font-medium hover:bg-[#1a9e76] transition-colors duration-300 w-full">
                  Voir les profils qualifiés
                </button>
              </div>
            </div>
          </div>
          
          {/* Card 2 - Soutien Scolaire */}
          <div className="flex flex-col items-center max-w-sm mx-auto w-full bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
            <div className="w-full h-56 overflow-hidden">
              <img
                className="w-full h-full object-contain bg-gray-50 p-4"
                src="../../../landingPage/SOUTIEN SCOLAIRE.png"
                alt="School Support Service"
              />
            </div>
            <div className="p-6">
              <h3 className="text-[#EBB016] font-bold text-xl mb-3 text-center">SOUTIEN SCOLAIRE</h3>
              <p className="text-[#7E7E7E] text-sm mb-6 text-center">
                Find experienced tutors and educators who can provide personalized
                academic support to help students succeed in their studies.
              </p>
              <div className="flex justify-center">
                <button className="bg-[#20B486] text-white py-2 px-4 rounded-md font-medium hover:bg-[#1a9e76] transition-colors duration-300 w-full">
                  Voir les profils qualifiés
                </button>
              </div>
            </div>
          </div>
          
          {/* Card 3 - Aide à la Personne */}
          <div className="flex flex-col items-center max-w-sm mx-auto w-full bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
            <div className="w-full h-56 overflow-hidden">
              <img
                className="w-full h-full object-contain bg-gray-50 p-4"
                src="../../../landingPage/AIDEALAPERSONNE.png"
                alt="Personal Assistance Service"
              />
            </div>
            <div className="p-6">
              <h3 className="text-[#EBB016] font-bold text-xl mb-3 text-center">AIDE À LA PERSONNE</h3>
              <p className="text-[#7E7E7E] text-sm mb-6 text-center">
                Get reliable personal assistants who can provide support with daily
                tasks, elderly care, and other personalized assistance services.
              </p>
              <div className="flex justify-center">
                <button className="bg-[#20B486] text-white py-2 px-4 rounded-md font-medium hover:bg-[#1a9e76] transition-colors duration-300 w-full">
                  Voir les profils qualifiés
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;