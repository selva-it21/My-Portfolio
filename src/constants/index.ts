import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  parents,
  parents1,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Problem Solver",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  }
];

const experiences: TExperience[] = [
  {
    title: "Parents Interactive Portal",
    companyName: "School / College",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "June 2022 - July 2022",
    points: [
      "Developing and maintaining a dynamic parent portal using React.js, enabling real-time tracking of student attendance, grades, and school announcements.",

"Implementing secure login systems and role-based dashboards to ensure data privacy for parents, teachers, and administrators.",

"Optimizing cross-device responsiveness and accessibility to ensure seamless access for parents on mobile, tablet, and desktop platforms."
    ],
  },
  {
    title: "Healthcare Management System",
    companyName: "Hospital / Medical",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "June 2023 - July 2023",
    points: [
"Developed a full-stack healthcare platform using Django REST Framework for backend APIs and React.js for responsive patient/doctor interfaces",

"Created automated appointment management with Django Celery for SMS/email reminders and real-time schedule synchronization",

"Built comprehensive admin dashboards using Django's built-in admin panel for efficient EHR, prescription, and billing management"
    ],
  },
  {
    title: "Placement Learnathon Portal",
    companyName: "Placement",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Mar 2025",
    points: [
      "Developed a full-stack learning portal with Django backend and React frontend for coding challenges, mock interviews, and skill assessments",

"Integrated automated resume parsing and company-specific recommendation engine using Django's ORM and machine learning models",

"Built role-based dashboards (students/recruiters/admin) with Django's authentication system and custom permission controls"
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "",
    name: "LinkedIn",
    designation: "",
    company: "https://www.linkedin.com/in/selva-it21/",
    image: "data:image/png;base64,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",
  },
  {
    testimonial:
      "",
    name: "Leetcode",
    designation: "",
    company: "https://leetcode.com/u/selva-it21/",
    image: "data:image/png;base64,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",
  },
  {
    testimonial:
      "",
    name: "GFG",
    designation: "",
    company: "https://www.hackerrank.com/profile/selva_it21",
    image: "data:image/png;base64,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",
  },
  {
    testimonial:
      "",
    name: "GitHub",
    designation: "",
    company: "https://github.com/selva-it21",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhcVrL5XiyI9tM5z8mYG9oSL76qEIV-JRH_A&s",
  },
];

const projects: TProject[] = [
  {
    name: "Parents Interactive Portal",
    description:
      "Developed a mobile app for real-time access to student grades, attendance, complaints and communication between the parents and teachers.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "HTML,CSS",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/selva-it21/PIP_portal",
  },
  {
    name: "Healthcare Management",
    description:
      " Developed a comprehensive web application for managing patient records, scheduling appointments, and maintaining detailed medical histories.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "PHP",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/selva-it21/Healthcare_management/",
  },
  {
    name: "Placement Learnathon Portal",
    description:
      "It is an interactive platform designed to help students prepare for campus placements through structured learning modules, practice tests, and real-time progress tracking.",
    tags: [
      {
        name: "HTML,CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JS",
        color: "green-text-gradient",
      },
      {
        name: "Django",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/selva-it21/",
  },
];

export { services, technologies, experiences, testimonials, projects };
