import React from "react";
import devspace from "../assets/portfolio/devspace.png";
import colorGame from "../assets/portfolio/color-game.jpg";
import crypto from "../assets/portfolio/crypto.png";
import todo from "../assets/portfolio/todo.png";
import spotify from "../assets/portfolio/spotify.png";
import figma from "../assets/portfolio/figma.png";


const Projects = () => {

  const portfolios = [
    {
      id: 1,
      src: devspace,
      title: "DevSpace (posts and real-time chats)",
      url:"https://github.com/PavithPriyadharsan/dev-space",
      demo: "https://developer-space-2a340397a8b9.herokuapp.com/"
    },
    {
      id: 2,
      src: crypto,
      title: "Crypto coin tracker - Coinstats public API",
      url: "https://github.com/PavithPriyadharsan/Crypto-coin-tracker",
      demo: "https://crypto-coin-tracker-gamma.vercel.app/"
    },
    {
      id: 3,
      src: todo,
      title: "Todo-app using React.js",
      url: "https://github.com/PavithPriyadharsan/React-todo-list/",
      demo: "https://65dc63970acc2c9b2f1f55c8--stellular-blini-22772a.netlify.app/"
    },
    {
      id: 4,
      src: spotify,
      title: "Spotify web clone (basic model)",
      url: "",
      demo: "https://web-spotify-cloned.netlify.app/"
    },
    
    {
      id: 5,
      src: colorGame,
      title: "Color guessing game - RGB",
      url:"https://github.com/PavithPriyadharsan/Color-game"
    },
    {
      id:6,
      src: figma,
      title: "Figma design (Restaurant booking)",
      url: "",
      demo: "https://www.figma.com/proto/FXoIKHxu3OFqQtGQg7xtwX/Wlzlm9NTTTmc5ZvTU905MQ_81898ca54be740749d1217b5b1f930f1_C7513-(1)?node-id=1-257&starting-point-node-id=1%3A257&scaling=scale-down&mode=design&t=JqjvSusPHdmTlN6T-1"

    }
  
  ];

  return (
    <div
      name="Projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white mdh-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 hover:text-sky-500 duration-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here...<br/> <strong>Demo</strong>  - hosted website  & <strong> Posters</strong> - github code</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-10 sm:px-0">
          {portfolios.map(({ id, src, title, url, demo}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <h2 className="mb-2">{title}</h2>
              <a href={url} target="_blank">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"/></a>
              <div className="flex items-center justify-center">
                <a href={demo} target="_blank" alt="code-demo"><button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button></a>
              
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
