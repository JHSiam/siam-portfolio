
import './App.css'
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import DesignationIntro from './components/DesignationIntro';
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import Projects from './components/Projects';
import Skills from './components/Skills';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    
    <>
    <Navbar></Navbar>
    <div className='max-w-7xl mx-auto sora-font'>
      <DesignationIntro></DesignationIntro>
      <SocialLinks></SocialLinks>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </div>
    <Footer></Footer>
    </>
    
  );
}

export default App;

