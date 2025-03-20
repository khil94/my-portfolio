export interface Skill {
  Experienced: string[];
  Have_Experience: string[];
  Collaboration_Tools: string[];
}

export const SKILL_LIST: Skill = {
  Experienced: ["Typescript", "Javascript", "React"],
  Have_Experience: [
    "Next.js",
    "Sass",
    "Tailwind CSS",
    "React-Query",
    "Styled-Components",
    "Firebase",
    "React-Redux",
    "React-Native",
    "Axios",
  ],
  Collaboration_Tools: ["Monday", "Slack", "Figma", "Git", "Jira"],
};
