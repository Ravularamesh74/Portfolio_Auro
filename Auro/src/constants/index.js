import {
  novalearn,
  ponggame,
  portfolio,
  backend,
  creator,
  hr,
  cp,
  fcc,
  mobile,
  web,
  ideas,
  concepts,
  designs,
  code,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "achievement",
    title: "Achievement",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Web Developer",
    icon: creator,
  },
];

const education = [
  {
    degree: "MCA - Master of Computer Applications",
    institution: "Siddhartha Institute of Technology, Hyderabad, Telangana",
    iconBg: "#383E56",
    date: "Oct 2023 - 2025",
    icon: fcc,
    points: [
      "CGPA: 8.1/10",
      "Advanced Software Development",
      "Database Management Systems",
      "Web Technologies & Frameworks",
    ],
  },
  {
    degree: "B.Com - Computer Application",
    institution: "Jagruthi Degree College, Hyderabad, Telangana",
    iconBg: "#E6DEDD",
    date: "Jul 2023",
    icon: hr,
    points: [
      "CGPA: 8.43/10",
      "Business Computing",
      "Database Management",
      "IT Applications",
    ],
  },
  {
    degree: "MPC - Intermediate (12th Grade)",
    institution: "Narayana Junior College, Hyderabad, Telangana",
    iconBg: "#383E56",
    date: "Mar 2020",
    icon: hr,
    points: [
      "CGPA: 5.9/10",
      "Mathematics, Physics, Chemistry",
      "Science stream specialization",
    ],
  },
  {
    degree: "SSC - Secondary School Certificate",
    institution: "Amaravathi Grammar High School, Hyderabad, Telangana",
    iconBg: "#0056d2",
    date: "Mar 2017",
    icon: fcc,
    points: [
      "Foundation in Mathematics & Science",
      "Secondary Education",
    ],
  },
];

const achievements = [
  {
    title: "Python Programming Certification",
    company_name: "SSCT COMPUTER EDUCATION",
    icon: hr,
    iconBg: "#E6DEDD",
    date: "2024",
    points: [
      "Python Fundamentals",
      "Object-Oriented Programming",
      "Data Structures",
    ],
    credential: [
      "https://github.com/Ravularamesh74",
    ],
  },
  {
    title: "Data Analytics Certification",
    company_name: "SSCT COMPUTER EDUCATION",
    icon: cp,
    iconBg: "#383E56",
    date: "2024",
    points: ["Data Analysis", "Statistics", "Business Intelligence"],
    credential: [
      "https://github.com/Ravularamesh74",
    ],
  },
  {
    title: "MS Office Certification",
    company_name: "Microsoft",
    icon: fcc,
    iconBg: "#0056d2",
    date: "2023",
    points: ["Excel", "Word", "PowerPoint", "Outlook"],
    credential: ["https://github.com/Ravularamesh74"],
  },
];


const testimonials = [
  {
    testimonial:
      "Ravula Ramesh is an exceptional Full Stack Developer. His ability to create scalable solutions and attention to detail is outstanding. Highly recommended!",
    name: "Project Lead",
    designation: "Tech Mentor",
    company: "Development Community",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    testimonial:
      "Working with Ravula was a great experience. He demonstrates strong problem-solving skills and delivers high-quality code. A true professional!",
    name: "Team Member",
    designation: "Developer",
    company: "Tech Team",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    testimonial:
      "Ravula's passion for learning and his dedication to mastering Full Stack development is impressive. He builds elegant and efficient solutions!",
    name: "Code Reviewer",
    designation: "Senior Developer",
    company: "Development Experts",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
];

const projects = [
  {
    name: "Library Management System",
    description:
      "A full-stack system that manages books, users, issue/return logs, and admin operations. Includes authentication, search functionality, and secure role-based access. Built using MERN stack with a clean, intuitive UI for seamless library operations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "jwt",
        color: "violet-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/Ravularamesh74",
  },
  {
    name: "eCommerce Application",
    description:
      "A modern shopping platform with product listing, cart management, user authentication, admin product control, and order handling. Developed using React, Node.js, Express, and MongoDB with a responsive design and secure payment flow structure.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "stripe",
        color: "violet-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
      },
    ],
    image: novalearn,
    source_code_link: "https://github.com/Ravularamesh74",
  },
  {
    name: "Car Rental System",
    description:
      "A scalable car booking platform with vehicle availability management, booking functionality, payment flow structure, and an intuitive admin dashboard. Designed with MERN stack, JWT authentication, and Tailwind CSS for a modern user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "jwt",
        color: "violet-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
      },
    ],
    image: ponggame,
    source_code_link: "https://github.com/Ravularamesh74",
  },
];

const words = [
  { text: "Ideas", imgPath: ideas, font: "Arial, sans-serif" },
  {
    text: "Concepts",
    imgPath: concepts,
    font: "'Courier New', Courier, monospace",
  },
  {
    text: "Designs",
    imgPath: designs,
    font: "'Times New Roman', Times, serif",
  },
  { text: "Code", imgPath: code, font: "'Fira Mono', monospace" },
  {
    text: "Ideas",
    imgPath: ideas,
    font: "'Comic Sans MS', cursive, sans-serif",
  },
  { text: "Concepts", imgPath: concepts, font: "'Roboto', sans-serif" },
  { text: "Designs", imgPath: designs, font: "'Georgia', serif" },
  { text: "Code", imgPath: code, font: "'Source Code Pro', monospace" },
];

export { achievements, education, projects, services, testimonials, words };
