import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;