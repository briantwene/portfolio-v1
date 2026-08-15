const projectList = [
  {
    name: "PaperFlow",
    description:
      "A cross-platform desktop application for discovering, downloading, and setting wallpapers sourced from Reddit.",
    contribution:
      "Built the React and TypeScript interface, integrated the Tauri and Rust core, and helped ship packaged releases for Windows, macOS, and Linux.",
    tech: ["React", "TypeScript", "Tauri", "Rust"],
    status: "Released · Active maintenance",
    image: "./images/projects/paperflow.png",
    imageAlt: "PaperFlow desktop application interface",
    liveUrl: "https://github.com/briantwene/paperflow/releases",
    liveLabel: "View releases",
    repoUrl: "https://github.com/briantwene/paperflow",
    featured: true
  },
  {
    name: "ColorSiphon",
    description:
      "A visual colour utility for exploring, extracting, and working with colour palettes in the browser.",
    contribution:
      "Built a responsive React experience with TypeScript and PWA support for an installable personal tool.",
    tech: ["React", "TypeScript", "Tailwind CSS", "PWA"],
    status: "Live project",
    image: "./images/projects/colorsiphon.png",
    imageAlt: "ColorSiphon colour utility interface",
    liveUrl: "https://colorsiphon.vercel.app/",
    liveLabel: "Open live project",
    repoUrl: "https://github.com/briantwene/ColorSiphon"
  },
  {
    name: "Ambitious Messenger",
    description:
      "A full-stack messaging application exploring authentication, database-backed conversations, and realtime communication.",
    contribution:
      "Worked across the application structure, frontend, backend services, database setup, and Docker-based local development workflow.",
    tech: ["React", "Node.js", "PostgreSQL", "Docker"],
    status: "Completed academic project",
    repoUrl: "https://github.com/briantwene/ambitious-messenger"
  }
];

const gridContainer = document.querySelector(".project-grid");

const createLink = (url, label) => {
  const link = document.createElement("a");
  link.href = url;
  link.textContent = label;
  link.target = "_blank";
  link.rel = "noreferrer";
  return link;
};

for (const project of projectList) {
  const container = document.createElement("article");
  container.className = `project-item${
    project.featured ? " project-item-featured" : ""
  }`;

  const visual = document.createElement("div");
  visual.className = `project-item-visual${
    project.image ? "" : " project-item-visual-placeholder"
  }`;

  if (project.image) {
    const image = document.createElement("img");
    image.src = project.image;
    image.alt = project.imageAlt;
    visual.appendChild(image);
  } else {
    const visualLabel = document.createElement("span");
    visualLabel.textContent = "Full-stack messaging application";
    visual.appendChild(visualLabel);
  }

  const content = document.createElement("div");
  content.className = "project-item-content";

  const heading = document.createElement("h3");
  heading.textContent = project.name;
  content.appendChild(heading);

  const description = document.createElement("p");
  description.className = "project-description";
  description.textContent = project.description;
  content.appendChild(description);

  const contribution = document.createElement("p");
  contribution.className = "project-contribution";
  contribution.textContent = project.contribution;
  content.appendChild(contribution);

  const tech = document.createElement("p");
  tech.className = "project-tech";
  tech.textContent = project.tech.join(" · ");
  content.appendChild(tech);

  const footer = document.createElement("div");
  footer.className = "project-item-footer";

  const status = document.createElement("span");
  status.className = "project-status";
  status.textContent = project.status;
  footer.appendChild(status);

  const links = document.createElement("div");
  links.className = "project-links";
  if (project.liveUrl) {
    links.appendChild(createLink(project.liveUrl, project.liveLabel));
  }
  links.appendChild(createLink(project.repoUrl, "Source code"));
  footer.appendChild(links);

  content.appendChild(footer);
  container.appendChild(visual);
  container.appendChild(content);
  gridContainer.appendChild(container);
}