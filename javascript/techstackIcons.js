// create the html with the images in it and add to then dom

const skillsArray = [
  {
    src: "./images/logos/html.svg",
    name: "HTML"
  },
  {
    src: "./images/logos/css.svg",
    name: "CSS"
  },
  {
    src: "./images/logos/js.svg",
    name: "JavaScript"
  },
  {
    src: "./images/logos/react.png",
    name: "React"
  },
  {
    src: "./images/logos/tailwind-css.svg",
    name: "Tailwind CSS"
  },
  {
    src: "./images/logos/postgres.png",
    name: "PostgreSQL"
  },  {
    src: "./images/logos/node.svg",
    name: "Node.js"
  }
];


const learningArray = [
    {
        src: "./images/logos/rust.svg",
        name: "Rust"
      },
      {
        src: "./images/logos/typescript.svg",
        name: "Typescript"
      },
      {
        src: "./images/logos/redux.svg",
        name: "React Redux"
      },
]


//get the container
const skillsContainer = document.getElementById("skills-icons");
const learningContainer = document.getElementById("about-icons");

const appendIcons = (iconArray, container) => {for (const skill of iconArray) {
    const element = Object.assign(document.createElement("img"),  {src: skill.src, alt: skill.name})

    const imageContainer =  Object.assign(document.createElement("div"),  { className: "icon"})

    imageContainer.appendChild(element)
    container.appendChild(imageContainer);
}}



appendIcons(learningArray, learningContainer)
appendIcons(skillsArray, skillsContainer)




