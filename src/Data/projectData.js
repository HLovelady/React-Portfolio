import music from "../images/mylocal-music.png";
import profile from "../images/teamprofile-gen.png";
import safe from "../images/safe-nyt.png";
import social from "../images/socialnw-api.png";


const projectData = [
    {
      id: 1,
      title: "MyLocalMusic",
      content: "MyLocalMusic",
      image: music,
      tech: "HTML, CSS, Javascript",
      area: "Frontend",
      gitHub: "https://github.com/jsadowski7/MyLocalMusic",
      deployed: "",
      content: "Streaming services today have made it easier than ever to listen to music from all around the world, but with unlimited access to artists, finding and supporting local bands has become more difficult. With Austin being the music capital of the world, MyLocalMusic strives to connect Austinites with local bands and allowing the user to save artists that they have seen live.",
    },

    {
      id: 2,
      title: "Team Profile Generator",
      content: "Team Profile Generator",
      image: profile,
      tech: "Javascript",
      area: "Backend",
      gitHub: "https://github.com/HLovelady/Team-Profile-Generator",
      deployed: "",
      content: "This command line application builds a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.",
    },

    {
      id: 3,
      title: "Safe Nyt App",
      content: "Safe Nyt App",
      image: safe,
      tech: "HTML, CSS, Javascript",
      area: "Frontend",
      gitHub: "https://github.com/HLovelady/Safe-Nyt-App",
      deployed: "",
      content: "As a local resident or tourist, you want to look up safe venues or establishments to visit so that you feel secure while venturing out on the town in an unfamiliar location. Need an app that can help you protect yourself on the road as it has verified and vetted routes. You need to get information based on safety ratings of nearby location that can include theft, violence, human rights issues, disease outbreaks, natural disasters, protests and civil unrest, or terrorist activity.",
    },

    {
      id: 4,
      title: "Social Network API",
      content: "Social Network API",
      image: social,
      tech: "Javascript",
      area: "Backend",
      gitHub: "https://github.com/HLovelady/Social-network-API",
      deployed: "",
      content: "This social network API application utilizes Express.js for routing, a MongoDB database, and the Mongoose ODM.The use of this application is so users can share their thoughts, react to other's thoughts, and create a friend list.",
    },
  ];

  export default projectData;