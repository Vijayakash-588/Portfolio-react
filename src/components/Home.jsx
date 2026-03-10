import Typewriter from "typewriter-effect";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Home = () => {
  return (
    <div id="home" className="bg-[#FFFFFF]">
      <div className="max-w-[85%] mx-auto font-inter grid grid-cols-1 md:grid-cols-2 gap-8 items-center  min-h-screen">
        {/* Left Section */}
        <div className="order-2 lg:order-1 flex flex-col items-center md:items-start justify-start space-y-5 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold">
            I’m <span className="text-[#fe5617]">Vijay Akash</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold flex gap-2">
            <span className="text-[#fe5617]">I’m a</span>
            <Typewriter
              options={{
                strings: [
                  "Developer.",
                  "Designer.",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </h2>
          {/* About Me */}
          <p className="text-lg md:text-xl text-gray-700 font-medium">
            A passionate <strong> Web and software developer</strong>  with 2 year of experience,
            dedicated to building user-friendly web applications. I thrive on
            learning AI techstack and new technologies.
          </p>

          {/* Contact Information */}
          <div className=" flex flex-col space-y-3 md:space-y-0 md:flex-row md:gap-6 text-lg md:text-xl font-semibold ">
            <div className="flex items-center gap-3">
              <FaLocationDot className="text-[#feb917]" size={20} />
              <span>Theni</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#feb917]" size={20} />
              <span>8248724588</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#feb917]" size={20} />
              <span>vijayakah0508@gmail.com</span>
            </div>
          </div>
          {/* Button */}
          <div className="bg-[#fe5617] px-5 py-2 rounded-2xl font-bold ">
            <a href="akash new.pdf">Download Resume</a>
          </div>
        </div>

        {/* Right Section */}
<div className="order-1 lg:order-2 flex justify-end items-center perspective-[2000px]">
  {/* THE DIMENSIONAL CONTAINER */}
  <div className="relative group w-72 h-96 transition-all duration-700 ease-[cubic-bezier(0.2,1,0.3,1)] [transform-style:preserve-3d] hover:[transform:rotateX(15deg)_rotateY(-20deg)]">
    
    {/* --- LAYER 1: THE BACK PLATE (The "Chassis") --- */}
    {/* Removed blur: replaced with a solid, sharp border-glow */}
   <div className="absolute inset-0 bg-gray-950/80 rounded-2xl [transform:translateZ(-10px)] border-2 border-indigo-500/50 shadow-xl backdrop-blur-x10 group-hover:backdrop-blur-none transition-all duration-800">
  
  {/* Optional: Inner Glow for a "Magic" feel */}
  <div className="absolute inset-0 bg-indigo-500/10 blur-2xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
  
</div>

    {/* --- LAYER 2: THE MAIN IMAGE (Recessed Artifact) --- */}
    <div className="absolute inset-0 overflow-hidden rounded-2xl bg-black [transform:translateZ(10px)] border border-white/20">
      <img
        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 scale-110 group-hover:scale-100 grayscale-[0.5] group-hover:grayscale-0"
        src="/passport photo.jpg"
        alt="Profile"
      />
      
      {/* Sharp Diagonal Light Sweep (No blur) */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
    </div>

    {/* --- LAYER 3: CRYSTAL CLEAR FRONT GLASS --- */}
    {/* Removed backdrop-blur: now it's just a sharp, reflective glass pane */}
    <div className="absolute inset-0 rounded-2xl border-[1px] border-white/40 bg-white/5 [transform:translateZ(50px)] pointer-events-none">
       {/* High-Contrast Corner Brackets */}
       <div className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-cyan-400 drop-shadow-[0_0_2px_rgba(34,211,238,1)]"></div>
       <div className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-cyan-400 drop-shadow-[0_0_2px_rgba(34,211,238,1)]"></div>
    </div>

    {/* --- LAYER 4: FLOATING DATA TAGS (Highest Depth) --- */}
    <div className="absolute -left-4 top-10 [transform:translateZ(100px)] opacity-0 group-hover:opacity-100 transition-all duration-500">
      <div className="bg-black border-2 border-cyan-500 px-3 py-1 rounded-sm shadow-[4px_4px_0px_0px_rgba(6,182,212,1)]">
        <p className="text-cyan-400 font-mono text-[10px] font-bold">Human_OS</p>
      </div>
    </div>

    <div className="absolute -right-6 bottom-10 [transform:translateZ(80px)] opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150">
      <div className="bg-white border-2 border-black p-2 rounded-lg">
        <p className="text-black font-black text-xs uppercase tracking-widest">Authorized</p>
      </div>
    </div>

  </div>
</div>
      </div>
    </div>
    
  );
};

export default Home;
