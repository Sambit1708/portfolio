import ECommerce from "../Assets/project-image/E-Commere.png";
import eXamPortal from "../Assets/project-image/eXamPortal.png";
import freelancer from "../Assets/project-image/freelancer.png";

import pankaj from "../Assets/pankaj_sir_academy_logo.jpeg";
import tsinfo from "../Assets/tsinfotechnologies_logo.jpeg";
import highradius from "../Assets/highradius-logo.png";

import {
  java,
  hibernate,
  spring,
  microservice,
  sql,
  mysql,
  angular,
  react,
  javascript,
  typescript,
  html,
  css,
  junit,
  mockito,
  selenium,
  cucumber,
  agile,
  git,
  github,
  jira,
  aws,
  docker,
  tailwind,
} from "../Assets/Icons";

export const ProjectList = [
  {
    id: 1,
    title: "Freelance Portal",
    description:
      "Developed a comprehensive Freelancer Website utilizing React, TypeScript, Spring Boot, Spring Security, and MySQL. The platform enables users to post and bid on projects, facilitating a competitive bidding environment. Implemented real-time chat functionality for seamless communication between clients and freelancers. Integrated secure authentication and authorization mechanisms with Spring Security. The site supports hiring freelancers for various projects, ensuring a robust and user-friendly experience with a responsive design for optimal accessibility across devices.",
    image: freelancer,
    tags: [
      {
        id: 1,
        title: "react",
        color: "text-blue-500",
      },
      {
        id: 2,
        title: "springboot",
        color: "text-red-500",
      },
      {
        id: 3,
        title: "mysql",
        color: "text-green-500",
      },
    ],
  },
  {
    id: 2,
    title: "E-Commere Portal",
    description:
      "Developed an E-Commerce App using ReactJS, JavaScript, Spring Boot, Spring Security, and MySQL, featuring functionalities such as product ordering, comprehensive admin management, cart item handling, and efficient product searching. Implemented secure user authentication and authorization mechanisms with Spring Security, ensuring data security and user privacy. The app delivers a seamless shopping experience with a responsive design, optimized for usability across various devices. Additionally, it supports robust backend operations and provides a user-friendly interface for both customers and administrators.",
    image: ECommerce,
    tags: [
      {
        id: 1,
        title: "react",
        color: "text-blue-500",
      },
      {
        id: 2,
        title: "springboot",
        color: "text-red-500",
      },
      {
        id: 3,
        title: "mysql",
        color: "text-green-500",
      },
    ],
  },
  {
    id: 3,
    title: "Quiz Baased Exam Portal",
    description:
      "Developed a Quiz-Based Exam Portal using ReactJS, JavaScript, Spring Boot, Spring Security, and MySQL, featuring comprehensive admin functionalities for adding quizzes and questions. Users can appear for quizzes and check their results seamlessly. Implemented secure user authentication and authorization with Spring Security, ensuring a reliable and secure environment. The platform provides a user-friendly experience with responsive design for optimal accessibility across various devices.",
    image: eXamPortal,
    tags: [
      {
        id: 1,
        title: "react",
        color: "text-blue-500",
      },
      {
        id: 2,
        title: "springboot",
        color: "text-red-500",
      },
      {
        id: 3,
        title: "mysql",
        color: "text-green-500",
      },
    ],
  },
];

export const WorkList = [
  {
    id: 1,
    designation: "Full Stack Developer Trainee",
    company: "Pankaj Sir Academy",
    companyLogo: pankaj,
    duration: "Dec 2023 - Jun 2024",
    arrowClass: "project-arrow-left",
    description: [
      "Developed and maintained web applications using Java 8, JSP, JSTL and RESTful APIs, Spring Boot for dynamic content rendering.",
      "Utilized Spring Framework components like Spring MVC and Spring Security to build scalable and secure applications.",
      "Architected microservices and managed source code with GitHub and optimized relational databases using SQL and MySQL.",
      "Developed dynamic front-end interfaces with Angular, React enhancing user experience and interactivity.",
      "Containerized applications with Docker for automated deployment and management.",
      "Deployed and managed cloud infrastructure on AWS, leveraging its services for scalable and reliable application hosting.",
    ],
  },
  {
    id: 2,
    designation: "Java Developer Intern",
    company: "TSinfo Technologies PVT LTD",
    companyLogo: tsinfo,
    duration: "Jun 2023 - Dec 2023",
    arrowClass: "project-arrow-right",
    description: [
      "Expert in Java/J2EE web application development with a focus on Spring Boot, Hibernate JPA, and web services.",
      "Skilled in MySQL database installation, schema creation, and integrating required RestAPI’s.",
      "Extensive experience in form validations, creating controllers, and repositories in Spring Boot projects.",
      "Strong understanding of developing applications using the MVC architecture.",
      "Adept at configuring email sending services and performing thorough web service testing using POSTMAN.",
      "Comprehensive knowledge of JDBC, HTML, CSS, SQL, and creating Servlets.",
      "Deploy the application to Amazon Web Services (AWS) using EC2 instances, ensuring seamless scalability and high availability while leveraging AWS managed services for infrastructure management.",
    ],
  },
  {
    id: 3,
    designation: "Software Developer Intern",
    company: "Highradius Technologies",
    companyLogo: highradius,
    duration: "Jun 2022 - May 2023",
    arrowClass: "project-arrow-left",
    description: [
      "Developed projects in Java/J2EE web application development with a focus on Spring Framework, Hibernate JPA, and web services.",
      "Skilled in MySQL database installation, schema creation, and integrating required RestAPI’s.",
      "Extensive experience in form validations, resolving bugs, tracking development progress report of Peers in Spring Framework projects.",
      "Adept to create test cases and automating testcases in Java Selenium Automation.",
      "Comprehensive knowledge of JDBC, HTML, CSS, SQL, and creating Servlets.",
    ],
  },
];

export const SkillList = [
  {
    id: 1,
    title: "Java",
    image: java,
  },
  {
    id: 2,
    title: "Hibernate",
    image: hibernate,
  },
  {
    id: 3,
    title: "Spring Boot",
    image: spring,
  },
  {
    id: 4,
    title: "Microservice",
    image: microservice,
  },
  {
    id: 5,
    title: "sql",
    image: sql,
  },
  {
    id: 6,
    title: "MySQL",
    image: mysql,
  },
  {
    id: 7,
    title: "Angular",
    image: angular,
  },
  {
    id: 8,
    title: "React",
    image: react,
  },
  {
    id: 9,
    title: "JavaScript",
    image: javascript,
  },
  {
    id: 10,
    title: "TypeScript",
    image: typescript,
  },
  {
    id: 11,
    title: "HTML",
    image: html,
  },
  {
    id: 12,
    title: "CSS",
    image: css,
  },
  {
    id: 13,
    title: "JUnit",
    image: junit,
  },
  {
    id: 14,
    title: "Mockito",
    image: mockito,
  },
  {
    id: 15,
    title: "Selenium",
    image: selenium,
  },
  {
    id: 16,
    title: "Cucumber",
    image: cucumber,
  },
  {
    id: 17,
    title: "Agile",
    image: agile,
  },
  {
    id: 18,
    title: "GIT",
    image: git,
  },
  {
    id: 19,
    title: "GitHub",
    image: github,
  },
  {
    id: 20,
    title: "JIRA",
    image: jira,
  },
  {
    id: 21,
    title: "AWS",
    image: aws,
  },
  {
    id: 22,
    title: "Docker",
    image: docker,
  },
  {
    id: 23,
    title: "Tailwind",
    image: tailwind,
  },
];
