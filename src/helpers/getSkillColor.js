export const getSkillColor = (skill) => {
  switch (skill.toLowerCase()) {
    case "html":
      return "#faa320";
    case "css":
      return "#18d4c7";
    case "javascript":
      return "#ffcf32";
    case "react":
      return "#47dcfa";
    default:
      return "white";
  }
};
