// import LogoSection from "./sections/LogoSection.jsx"
import NavBar from "./components/NavBar.jsx"
import Contact from "./sections/Contact.jsx"
import ExperienceSection from "./sections/ExperienceSection.jsx"
import FeatureCards from "./sections/FeatureCards.jsx"
import Footer from "./sections/Footer.jsx"
import Hero from "./sections/Hero.jsx"
import ShowcaseSection from "./sections/ShowcaseSection.jsx"
import TechStack from "./sections/TechStack.jsx"
import Testimonials from "./sections/Testimonials.jsx"


const App = () => {
  return (
    <>
    <NavBar/>
       <Hero/> 
       <ShowcaseSection/>
       <FeatureCards/>
       <ExperienceSection/>
       <TechStack/>
       <Testimonials/>
       <Contact/>
       <Footer/>
    </>
  )
}

export default App