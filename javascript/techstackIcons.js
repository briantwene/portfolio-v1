const skillGroups = [
  {
    name: "Languages",
    skills: [
      { name: "C#" },
      { name: "TypeScript", src: "./images/logos/typescript.svg" },
      { name: "JavaScript", src: "./images/logos/js.svg" },
      { name: "SQL" },
      { name: "HTML/CSS", src: "./images/logos/html.svg" },
      { name: "Swift" }
    ]
  },
  {
    name: "Frameworks",
    skills: [
      { name: ".NET" },
      { name: "React", src: "./images/logos/react.png" },
      { name: "Angular" },
      { name: "Next.js", src: "./images/logos/nextjs.svg" },
      { name: "Express.js" },
      { name: "Ionic" }
    ]
  },
  {
    name: "Tools & platforms",
    skills: [
      { name: "Git", src: "./images/logos/git.svg" },
      { name: "Docker", src: "./images/logos/docker.svg" },
      { name: "Azure" },
      { name: "Azure DevOps" },
      { name: "PostgreSQL", src: "./images/logos/postgres.png" }
    ]
  }
];

const skillsContainer = document.getElementById("skills-groups");

for (const group of skillGroups) {
  const groupElement = document.createElement("div");
  groupElement.className = "skills-group";

  const heading = document.createElement("h3");
  heading.textContent = group.name;
  groupElement.appendChild(heading);

  const list = document.createElement("div");
  list.className = "skills-list";

  for (const skill of group.skills) {
    const skillElement = document.createElement("span");
    skillElement.className = "skill-tag";

    if (skill.src) {
      const icon = document.createElement("img");
      icon.src = skill.src;
      icon.alt = "";
      icon.setAttribute("aria-hidden", "true");
      skillElement.appendChild(icon);
    }

    const label = document.createElement("span");
    label.textContent = skill.name;
    skillElement.appendChild(label);
    list.appendChild(skillElement);
  }

  groupElement.appendChild(list);
  skillsContainer.appendChild(groupElement);
}
