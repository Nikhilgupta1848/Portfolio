import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    //Animation for the main section

    gsap.fromTo(
      sectionRef.current,

      { opacity: 0 },

      { opacity: 1, duration: 1.5 }
    );

    //Animation for each app showcase
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/*LEFT : SHOWCASE CONTENT*/}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
               <a href="https://desi-diva-attire-frontend.vercel.app/">
              <img src="/images/project1.png" alt="Desi Diva Attire" />
              </a>
            </div>
            <div className="text-content">
              
               <a href="https://desi-diva-attire-frontend.vercel.app/"><h2>Desi Diva Attire - Women's fashion e-commerce</h2> </a> 
              <p className="text-white-50 md:text-xl">
                A feature-rich women’s fashion e-commerce platform built with
                the MERN stack and Vite, offering a responsive, secure, and
                high-performance shopping experience. It blends vibrant design
                with advanced user and admin functionality.
              </p>
            </div>
          </div>

          {/*RIGHT : SHOWCASE CONTENT */}

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
               <a href="https://github.com/Nikhilgupta1848/Microfinance-Management-System"> <img
                  src="/images/project2.png"
                  alt="Microfinance Management System"
                />
                </a>
              </div>
              <h2>MyFinance - Microfinance Management System</h2>
            </div>

            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
              <a href="https://github.com/Nikhilgupta1848/SVCE-Website-FYP"> <img src="/images/project3.webp" alt="College Website" /></a> 
              </div>
              <h2>SVCE - College Website</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
