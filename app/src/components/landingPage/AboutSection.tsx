import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
function AboutSection() {
   useEffect(() => {
      AOS.init({
        duration: 1200,
        once: false,
        mirror: true,
        easing: 'ease-out-cubic'
      });
    }, []);
  return (
    <div>
        <div className='md:grid md:grid-cols-2 mt-24 mx-10'>
<div  data-aos="fade-right">
    <h1 className='text-[#20B486] font-bold md:text-3xl'>About Us</h1>
    <h2 className='md:text-2xl mt-3'> <span className='text-[#EBB016]'>VOTRE SATISFACTION</span> EST </h2>
    <h2 className='md:text-2xl'>NOTRE PRIORITÉ</h2>
    <p className='mt-7'>
    <span className='text-[#9DB2BF]'>F’Blastek</span> Une plateforme de mise en relation et d'assistance dans les démarches administratives relative à l'embauche d'un.e salarié.e à domicile. Les personnes cherchant une aide à domicle y trouvent des assistantes maternelles, des baby-sitters, des femmes de ménage, des auxiliaires de vie, des aides à domicile, des dames de compagnie ou encore des professeurs de soutien scolaire et cours particuliers.
    </p>
    <p> <span className='text-[#9DB2BF]'>F’Blastek</span> automatise toutes vos démarches et vous permet de profiter d'un acompagnement administratif et juridique personnalisé.</p>
    <button className="flex items-center bg-[#FF5C1A] text-white rounded-full mt-8 py-3 px-6 hover:bg-[#e65317] transition-colors shadow-md w-50">
            <span className="mr-auto font-bold text-sm lg:text-base">rejoignez-nous
            </span>
            <svg className="rtl:rotate-180 w-4 h-4 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </button>
</div >

<div className='md:grid md:grid-rows-2 md:w-2/3 lg:w-full w-1/2 flex mt-3 gap-2 bg-[#F2F2F2]'data-aos="fade-left">
<img className=' lg:mr-20 lg:mx-auto lg:col-start-2 flex-1' src="../../../landingPage/about1.png" alt="" />
<img className=' lg:ml-20 lg:mx-auto lg:col-end-1 float-end' src="../../../landingPage/about2.png" alt="" />

</div>
        </div>
    </div>
  )
}

export default AboutSection