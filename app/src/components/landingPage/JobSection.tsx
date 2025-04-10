import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function JobSection() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      mirror: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  return (
    <section className="py-16 px-4 ">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#20B486] font-bold text-2xl md:text-4xl mb-4" data-aos="fade-up">
            A simple platform to find a job quickly
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base" data-aos="fade-up" data-aos-delay="200">
            Lorem ipsum det, cowec tetur duis necgi det, consec t eturlagix
            adipiscing eliet, cowec tetopak ec tetur duis necgi
          </p>
        </div>

        {/* Feature Cards */}
        <div className="space-y-24">
          {/* Find Section */}
          <div className="grid md:grid-cols-2 items-center gap-8">
            <div className="order-2 md:order-1" data-aos="fade-right">
              <img
                className="w-3/4 mx-auto md:w-4/5"
                src="../../../landingPage/Find.png"
                alt="Find professionals"
              />
            </div>
            <div className="order-1 md:order-2" data-aos="fade-left">
              <div className="max-w-md mx-auto">
                <h3 className="text-[#FF5C1A] font-bold text-2xl md:text-3xl mb-4">Find</h3>
                {/* <div className="h-1 w-16 bg-[#FF5C1A] mb-6 rounded-full"></div> */}
                <p className="text-gray-600 text-sm md:mt-6 md:text-base">
                  Among over 1 million qualified and trustworthy professionals, find
                  the babysitter, school support teacher, personal assistant, or
                  pet-sitter that meets your needs. personal assistant, or
                  pet-sitter that meets your needs.
                  school support teacher, personal assistant
                  <br /><br />
                  Among over 1 million qualified and trustworthy professionals, find
                  the babysitter. Among over 1 million qualified and trustworthy professionals, find
                  the babysitter.
                </p>
              </div>
            </div>
          </div>

          {/* Book Section */}
          <div className="grid md:grid-cols-2 items-center gap-8">
            <div className="order-1" data-aos="fade-right">
              <div className="max-w-md mx-auto">
                <h3 className="text-[#FF5C1A] font-bold text-2xl md:text-3xl mb-4">Book</h3>
                {/* <div className="h-1 w-16 bg-[#FF5C1A] mb-6 rounded-full"></div> */}
                <p className="text-gray-600 md:mt-6 text-sm md:text-base">
                  For regular or occasional needs, book your home help in just a few clicks. Lorem ipsum det, cowec tetur duis necgi det, consec t eturlagix adipiscing eliet.Lorem ipsum det, cowec tetur duis necgi det, consec t eturlagix adipiscing eliet.
                  <br /><br />
                  For regular or occasional needs, book your home help in just a few clicks. Lorem ipsum det, cowec tetur duis necgi det, consec t eturlagix adipiscing eliet.
                </p>
              </div>
            </div>
            <div className="order-2" data-aos="fade-left">
              <img
                className="w-3/4 mx-auto md:w-4/5"
                src="../../../landingPage/Book.png"
                alt="Book services"
              />
            </div>
          </div>

          {/* Pay Section */}
          <div className="grid md:grid-cols-2 items-center gap-8">
            <div className="order-2 md:order-1" data-aos="fade-right">
              <img
                className="w-3/4 mx-auto md:w-4/5"
                src="../../../landingPage/Pay.png"
                alt="Payment system"
              />
            </div>
            <div className="order-1 md:order-2" data-aos="fade-left">
              <div className="max-w-md mx-auto">
                <h3 className="text-[#FF5C1A] font-bold text-2xl md:text-3xl mb-4">Pay</h3>
                {/* <div className="h-1 w-16 bg-[#FF5C1A] mb-6 rounded-full"></div> */}
                <p className="text-gray-600 md:mt-6 text-sm md:text-base">
                  Via the platform, it's simple, fast, and above all 100% secure. Lorem ipsum det, cowec tetur duis necgi det, consec t eturlagix adipiscing eliet.Lorem ipsum det, cowec tetur duis necgi det, consec t eturlagix adipiscing eliet.
                  <br /><br />
                  Via the platform, it's simple, fast, and above all 100% secure. Lorem ipsum det, cowec tetur duis necgi det, consec t eturlagix adipiscing eliet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JobSection;