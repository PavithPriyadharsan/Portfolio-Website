import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white xs:w-full">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-screen">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 hover:text-sky-500 duration-500">
            About
          </p>
        </div>

        <p className="text-xl">
          I am Pavith Priyadharsan, B.tech graduate from Kumaraguru College of Technology.I was interested in developing cool websites and applications so gradually involved myself with <strong>web development and designing</strong> . 
          I am a fast learner and I indulge myself with 100% commitment towards my interests. Interested in developing projects with trendy UI/UX designs and developing them in more user-friendly manner.
          {/* I enjoy solving problems and creating insightful solutions. Also , I like to collaborate with great minds and to work in a team that foster creativity.
          Always open to learn new things and upgrade myself on a daily basis.  */}
        </p>

        <br />

        <h3 className="text-xl underline underline-offset-4"><strong>Work Experience:</strong></h3>
        <p className="text-lg"><strong>Company:</strong> LTM (formerly LTIMindtree)</p>
        <p className="text-lg"><strong>Position:</strong> Software Engineer</p>
        <p className="text-lg"><strong>Time period:</strong> August 2024 - present</p> <br />
        <p className="text-lg">
          - Worked in designing and development of .Net and Angular web applications, with technologies such as .Net Core, Angular and SQL Server.<br />
          {/* - Solved a vital issue by creating dynamic and stateless components in the web application. */}
        </p> 
      </div>
    </div>
  );
};

export default About;
