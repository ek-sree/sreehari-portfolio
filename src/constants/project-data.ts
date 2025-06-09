import hirehub1 from '../../public/Hirehub/hirehub1.png'
import hirehub2 from '../../public/Hirehub/hirehub2.png'
import hirehub3 from '../../public/Hirehub/hirehub3.png'
import hirehub4 from '../../public/Hirehub/hirehub4.png'
import hirehub5 from '../../public/Hirehub/hirehub5.png'
import hirehub6 from '../../public/Hirehub/hirehub6.png'
import hirehub from '../../public/Hirehub/hirehub.png'
import hirehub7 from '../../public/Hirehub/hirehub7.png'
import hirehub8 from '../../public/Hirehub/hirehub8.png'
import hirehub9 from '../../public/Hirehub/hirehub9.png'
import hirehub10 from '../../public/Hirehub/hirehub10.png'
import hirehub11 from '../../public/Hirehub/hirehub11.png'
import hirehub12 from '../../public/Hirehub/hirehub12.png'
import hirehub13 from '../../public/Hirehub/hirehub13.png'
import hirehub14 from '../../public/Hirehub/hirehub14.png'
import hirehub15 from '../../public/Hirehub/hirehub15.png'
import hirehub16 from '../../public/Hirehub/hirehub16.png'

import timezone from '../../public/timezone/1.png'
import timezone1 from '../../public/timezone/2.png'
import timezone2 from '../../public/timezone/3.png'
import timezone3 from '../../public/timezone/4.png'
import timezone4 from '../../public/timezone/5.png'
import timezone5 from '../../public/timezone/6.png'
import timezone6 from '../../public/timezone/7.png'
import timezone7 from '../../public/timezone/8.png'
import timezone8 from '../../public/timezone/9.png'
import timezone9 from '../../public/timezone/10.png'
import timezone10 from '../../public/timezone/11.png'
import timezone11 from '../../public/timezone/12.png'
import timezone12 from '../../public/timezone/13.png'
import timezone13 from '../../public/timezone/14.png'
import timezone14 from '../../public/timezone/15.png'
import timezone15 from '../../public/timezone/16.png'
import timezone16 from '../../public/timezone/17.png'
import timezone17 from '../../public/timezone/18.png'
import timezone18 from '../../public/timezone/19.png'

import aadharOCR from '../../public/AAdharOCR/Screenshot (290).png'
import aadharOC1 from '../../public/AAdharOCR/aadharocr2.png'

import netflixGpt1 from '../../public/netflixgpt/1.png'
import netflixGpt2 from '../../public/netflixgpt/2.png'
import netflixGpt3 from '../../public/netflixgpt/3.png'
import netflixGpt4 from '../../public/netflixgpt/4.png'
import netflixGpt5 from '../../public/netflixgpt/5.png'

import olx1 from '../../public/olk-clone/1.png'
import olx2 from '../../public/olk-clone/2.png'
import olx3 from '../../public/olk-clone/3.png'

import todo1 from '../../public/todo/todo1.png'
import todo2 from '../../public/todo/todo2.png'

import rest1 from '../../public/resturant/1 (1).png'
import rest2 from '../../public/resturant/1 (2).png'

export const projects = [
  {
    id: 1,
    title: "Hirehub",
    description: "A job seeking application",
    details: "Developed a comprehensive job portal using React, Tailwind CSS, TypeScript, Redux, Node.js, Express.js, MongoDB. Leveraged microservice architecture with RabbitMq for messaging and gRPC for service communication. The client interacts with an API gateway, which routes requests to various services.",
    features: [ 
      "Implemented features such as infinity scrolling, search debouncing, video calls using WebRTC, real-time chat and notification for likes on posts.",
      "Enable users to upload and manage CVs, apply for jobs, and recruiters to post jobs and manage applicants.",
      "Develop admin functionalities for block/unblock users and recruiters, and delete reported posts.",
      "Ensure secure authentication and authorization using JWT.",
      "Utilized clean architecture principles for maintainable and scalable code."
    ],
    technologies: ["React", "Express", "Mongodb", "Typescript", "Redux", "Tailwind", "RabbitMQ", "gRPC", "Socket", "WebRTC", "Docker", "Kubernetes", "S3", "CI/CD", "CloudFront", "Digital Ocean"],
    featured: true,
    category: "Full Stack",
    year: "2024",
    highlights: ["1-1 Video Call", "Chat & Notifications", "CV upload", "Post Likes & Comments"],
    architecture: ["Microservices architecture", "Clean architecture"],
    github: "https://github.com/ek-sree/HireHub_client.git",
    images: [hirehub1, hirehub2, hirehub3, hirehub4, hirehub5, hirehub6, hirehub, hirehub7, hirehub8, hirehub9, hirehub10, hirehub11, hirehub12, hirehub13, hirehub14, hirehub15, hirehub16],
    live: "https://hirehub.pro",
    link: "/projects/1"
  },
  {
    id: 2,
    title: "TimeZone",
    description: "An E-commerce watch store",
    details: "Developed an e-commerce platform for rustic watches using Node.js, Express, and MongoDB for the backend, with EJS, CSS, and JavaScript for the frontend. Deployed on AWS with Nginx for scalability and reliability.",
    features: [
      "Designed interactive views using EJS, enhancing the user interface.",
      "Used Nodemailer for secure user email verification.",
      "Integrated multer for seamless image uploads.",
      "Implemented online payments using Razorpay for secure transactions."
    ],
    technologies: ["Ejs", "Express", "Mongodb", "Razorpay", "multer", "Nodemailer", "AWS", "Nginx"],
    featured: true,
    category: "Web App",
    year: "2023",
    highlights: ["RazorPay Payment Gateway", "Product Catalogue", "Cart Management", "Order Tracking"],
    architecture: ["MVC architecture"],
    github: "https://github.com/ek-sree/TimeZone.git",
    images: [timezone, timezone1, timezone2, timezone3, timezone4, timezone5, timezone6, timezone7, timezone8, timezone9, timezone10, timezone11, timezone12, timezone13, timezone14, timezone15, timezone16, timezone17, timezone18],
    live: "https://thetimezone.official",
    link: "/projects/2"
  },
  {
    id: 3,
    title: "Aadhar OCR",
    description: "OCR system for parsing Aadhar details",
    details: "An Aadhar OCR application where users upload both front and back side images of their Aadhar card, and the system parses the images to extract details like Name, Aadhar Number, Date of Birth, Gender, and Address.",
    features: [ 
      "Upload both front and back images of the Aadhar card.",
      "Parse Aadhar card details such as Name, Aadhar Number, Date of Birth, Gender, and Address using Tesseract.js.",
      "Front-end and back-end validation to ensure valid images are uploaded and proper responses are provided.",
      "Implemented security features using rate limiter and Helmet.js.",
      "Provided user-friendly error messages for failed parsing or incorrect image uploads."
    ],
    technologies: ["React", "Typescript", "Express", "Tesseract.js", "Helmet.js", "Rate Limiter", "Tailwind CSS", "Multer"],
    featured: false, 
    category: "Web Development",
    year: "2024",
    highlights: ["Parse Aadhar details", "Responsive UI", "Proper Validation Message", "Backend Protection"],
    architecture: ["REST API architecture"],
    github: "https://github.com/ek-sree/aadhaar-orc.git",
    images: [aadharOCR, aadharOC1],
    link: "/projects/3"
  },
  {
    id: 4,
    title: "Netflix GPT",
    description: "A Netflix clone with integrated AI for movie recommendations",
    details: "Developed a Netflix clone that includes AI-powered movie recommendations based on user search queries.",
    features: [ 
      "User authentication using Firebase.",
      "Dynamic movie database display using APIs.",
      "Search with GPT-based suggestions.",
      "Multi-language support and interactive trailers."
    ],
    technologies: ["React", "Express", "Firebase", "OpenAI Api"],
    featured: false,
    category: "Movie Recommendation",
    year: "2023",
    highlights: ["AI movie recommendations", "Multi-language Support", "Movie Analytics", "Reusable Auth Component"],
    architecture: ["Component-based architecture"],
    github: "https://github.com/ek-sree/netflix-gpt.git",
    images: [netflixGpt1, netflixGpt2, netflixGpt3, netflixGpt4, netflixGpt5],
    link: "/projects/4"
  },
  {
    id: 5,
    title: "Todo App",
    description: "A Todo application using React and localhost.",
    details: "Developed a Todo application that enables users to manage their tasks effectively.",
    features: [
      "Add new tasks with a user-friendly interface.",
      "Edit tasks with inline editing functionality.",
      "Mark tasks as complete with a single click.",
      "Delete tasks and manage the list dynamically.",
      "Persist data using local storage."
    ],
    technologies: ["Nextjs", "Drag and Drop", "Tailwind", "Cloudinary"],
    featured: false, 
    year: "2024",
    category: "Productivity", 
    highlights: ["Drag and Drop Tasks", "Add Priority Based Task", "Upload Posts", "Role Based Access Control"],
    architecture: ["Api Route based"],
    github: "https://github.com/ek-sree/react-todo.git",
    images: [todo1, todo2],
    link: "/projects/5"
  },
  {
    id: 6,
    title: "OLX Clone",
    description: "An OLX clone where users can buy and sell products.",
    details: "Built an OLX clone with features like user authentication, product listing with images, price, and category.",
    features: [
      "User authentication using Firebase.",
      "Product listing with images and price.",
      "State management using Context API.",
      "Real-time updates via Firestore.",
      "Firebase storage for images."
    ],
    technologies: ["React", "Firebase", "Firestore", "Context API"],
    featured: false,
    category: "Analytics",
    year: "2023",
    highlights: ["Sell and Buy Product", "Realtime Product Listing", "User friendly Interface", "Custom Hooks"],
    architecture: ["Component-based architecture"],
    github: "https://github.com/ek-sree/olx-clone-react.git",
    images: [olx1, olx2, olx3],
    link: "/projects/6"
  },
  {
    id: 7, 
    title: "Resturantz",
    description: "A restaurant-like app showcasing food spots",
    details: "Developed a restaurant finder application that displays various food spots, allowing users to browse and discover restaurants.",
    features: [
      "Showcase food spots with images and details.",
      "Offline status indicator using custom hooks.",
      "Responsive design using Tailwind CSS.",
      "Navigation and filtering options for users."
    ],
    technologies: ["React", "Tailwind CSS", "Parcel"],
    featured: false,
    category: "Analytics",
    year: "2023",
    highlights: ["Food Spot Display", "Offline Status Indicator", "Responsive Design", "Custom Hook for Network Tracking"],
    architecture: ["Component-based architecture"],
    github: "https://github.com/ek-sree/react-app.git",
    images: [rest1, rest2],
    link: "/projects/7"
  }
]
