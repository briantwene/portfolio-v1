const projectList = [
  {
    name: "Brian Twene",
    url: "https://briantwene.github.io/portfolio-v1",
    repo: "https://github.com/briantwene/portfolio-v1",
    tech: ["html", "css", "js"],
    image: "./images/projects/portfolio.png"
  },
  {
    name: "Snappub",
    url: "https://snappub-react.vercel.app/",
    repo: "https://github.com/briantwene/snappub-react",
    tech: ["react", "nextjs", "sass"],
    image: "./images/projects/snappub.png"
  },
  {
    name: "Random Color Generator - PWA",
    url: "https://briantwene.github.io/Colour-Generator-Project/",
    repo: "https://github.com/briantwene/Colour-Generator-Project",
    tech: ["html", "css", "js", "pwa"],
    image: "./images/projects/color.png"
  },
  {
    name: "JavaScript Timer",
    url: "https://briantwene.github.io/js_timer/",
    repo: "https://github.com/briantwene/js_timer",
    tech: ["html", "css", "js"],
    image: "./images/projects/timer.png"
  },
  {
    name: "To-do App",
    url: "https://briantwene.github.io/js_todo_app/",
    repo: "https://github.com/briantwene/js_todo_app",
    tech: ["html", "css", "js"],
    image: "./images/projects/todo.png"
  },
  {
    name: "Responsive Navbar Toggle JS",
    url: "https://briantwene.github.io/js_responsive_nav_toggle/",
    repo: "https://github.com/briantwene/js_responsive_nav_toggle",
    tech: ["html", "css", "js"],
    image: "./images/projects/navbar.png"
  }
];

const iconMap = {
  html: "./images/logos/html.svg",
  css: "./images/logos/css.svg",
  js: "./images/logos/js.svg",
  react: "./images/logos/react.png",
  tailwind: "./images/logos/tailwind-css.svg",
  postgres: "./images/logos/postgres.png",
  node: "./images/logos/node.svg",
  nextjs: "./images/logos/nextjs.svg",
  pwa: "./images/logos/pwa.svg",
  sass: "./images/logos/sass.svg"
};

const gridContainer = document.querySelector(".project-grid");

// create elements
const iconMarkup = (url, tech) => {
  let iconlist = [];
  const githubImage = Object.assign(document.createElement("div"), {
    className: "project-icon"
  });
  const github = Object.assign(document.createElement("img"), {
    src: "./images/logos/github.svg"
  });

  const githubLink = Object.assign(document.createElement("a"), {
    href: url
  });

  githubLink.appendChild(github);
  githubImage.appendChild(githubLink);

  for (const icon of tech) {
    const container = Object.assign(document.createElement("div"), {
      className: "project-icon"
    });
    const image = Object.assign(document.createElement("img"), {
      src: iconMap[icon]
    });

    container.appendChild(image);

    iconlist.push(container);
  }

  return { iconlist, githubImage };
};

for (const project of projectList) {
  //icons
  const { iconlist, githubImage } = iconMarkup(project.repo, project.tech);

  const projectImage = Object.assign(document.createElement("img"), {
    src: project.image
  });

  const container = Object.assign(document.createElement("div"), {
    className: "project-item"
  });
  const imageContainer = Object.assign(document.createElement("div"), {
    className: "project-item-img",
    src: project.image
  });
  const content = Object.assign(document.createElement("div"), {
    className: "project-item-content"
  });
  const title = Object.assign(document.createElement("div"), {
    className: "project-item-content-title"
  });
  const icons = Object.assign(document.createElement("div"), {
    className: "project-item-content-icons"
  });
  const projectLink = Object.assign(document.createElement("a"), {
    href: project.url
  });

  const titleText = document.createTextNode(project.name);
  projectLink.appendChild(titleText);
  title.appendChild(projectLink);

  for (const icon of iconlist) {
    icons.appendChild(icon);
  }

  icons.appendChild(githubImage);
  content.appendChild(title);
  content.appendChild(icons);

  imageContainer.appendChild(projectImage);
  container.appendChild(imageContainer);
  container.appendChild(content);

  gridContainer.appendChild(container);
}



