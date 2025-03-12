const Project = () => {
  return (
    <div id="project" className="bg-[#ffffff] min-h-screen flex items-center">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        {/* Header */}
        <hr></hr>
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#fe5617]">
          My Projects
        </h1>

        {/* Project 1 and 2 in one row */}
        <div className="flex flex-col md:flex-col gap-10">
          {/* Virtual attire presention*/}
          <div className="w-full md:w-1/2 flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#fe5617] font-extrabold text-[32px] mb-4">
              Vitual attire
            </h1>
            <p className="text-lg text-gray-700 mb-4">
            An project leveraging the technologies like open CV,and python,html,css to implement
            the virtual attire presentation for designing clothes according to the body of persons.
            </p>
          </div>

          {/* Biosta AI Project */}
          <div className="w-full md:w-1/2 flex flex-col place-self-end bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-center text-[#fe5617] font-extrabold text-[32px] mb-4">
              Motion capture
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              An AI-based platform that leverages the open CV technolgy to track the motion of the body via camera
              and turn into the 3d motion without simplification.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-col gap-10">
          {/* PetPals Project */}
          <div className="w-full md:w-1/2 flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#fe5617] font-extrabold text-[32px] mb-4">
              Plant disease identification
            </h1>
            <p className="text-lg text-gray-700 mb-4">
            An AI based paltform leveraging technologies like HTML,CSS,JS that helps to monitor the plant health and 
            diagnose it and give the remedies for that solution.
            </p>
          </div>

         
        </div>

        {/* Project 3 and 4 in one row */}
        <div className="flex flex-col md:flex-col gap-10 mt-10">
          {/* CoderLobby Project */}
          <div className="w-full md:w-1/2 flex flex-col place-self-end items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#fe5617] font-extrabold text-[32px] mb-4">
              Health Tracker
            </h1>
            <p className="text-lg text-gray-700 mb-4">
             It helps to track the health of the persons everyday and monitor it everyday.it helps to mantain
             the diet chart and help to maintain the healthy lifestyle
            </p>
          </div>

          {/* Cinerate Project */}
          <div className="w-full md:w-1/2 flex flex-col  bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-center text-[#fe5617] font-extrabold text-[32px] mb-4">
              Smart bin system
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              A project that aims to leverage the technologies of IOT and AI combined with web technologies.
              it really helps to maintain a waste genertion and generate a consequential remedies
            </p>
          </div>
        </div>

          </div>
        </div>
  );
};

export default Project;
