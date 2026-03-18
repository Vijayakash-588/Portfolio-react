import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Project from "./components/Project";
import CustomCursor from "./components/CustomCursor";

const App = () => {
  return (
    <div className="relative">
      <CustomCursor />
      <Header />
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};
export default App;
