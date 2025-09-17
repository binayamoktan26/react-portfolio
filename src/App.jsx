import "./App.css";
import background from "./assets/bg.png";
import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";

import { Hero } from "./Components/Hero";
import { Navbar } from "./Components/Navbar";
import { Project } from "./Components/Project";
import { Skill } from "./Components/Skill";
function App() {
  return (
    <>
      {/* //  <!-- dark mode  toggle -->? */}

      <input type="checkbox" id="darkMode" />
      <div className="wrapper">
        <label htmlFor="darkMode">
          <i className="fa-solid fa-circle-half-stroke"></i>
        </label>

        {/* <!-- nav bar --> */}
        <Navbar />

        {/* <!-- hero section  --> */}
        <Hero />

        {/* <!-- skills --> */}
        <Skill />

        {/* <!-- projects  --> */}
        <Project />

        {/* <!-- about me  --> */}
        <About />

        {/* <!-- contact  --> */}
        <Contact />
      
        {/* <!-- footer  --> */}
        <Footer />
        
      </div>
    </>
  );
}

export default App;
