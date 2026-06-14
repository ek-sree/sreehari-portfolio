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

export const projects = [
  {
    id: 1,
    title: "Hirehub",
    description: "A microservices-based job portal",
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
    title: "Sakha",
    description: "A cross-platform React Native mobile app",
    details: "A React Native mobile application built with TypeScript, running on both Android and iOS from a single codebase. Navigation is handled with React Navigation (tab + stack), styling uses NativeWind (Tailwind CSS for React Native), and interactions are brought to life with native-thread animations via Reanimated and Gesture Handler.",
    features: [
      "Single TypeScript codebase targeting both Android and iOS.",
      "Tab and native-stack navigation powered by React Navigation.",
      "Utility-first styling with NativeWind (Tailwind CSS for React Native).",
      "Fluid gestures and 60fps animations using Reanimated and Gesture Handler.",
      "Clean, component-driven UI with Ionicons vector icons."
    ],
    technologies: ["React Native", "TypeScript", "React Navigation", "NativeWind", "Reanimated", "Gesture Handler"],
    featured: true,
    category: "Mobile App",
    year: "2026",
    highlights: ["Android & iOS", "NativeWind styling", "Reanimated animations", "Tab + Stack nav"],
    architecture: ["Component-based architecture"],
    github: "https://github.com/ek-sree/sakha.git",
    images: [],
    link: "/projects/2"
  },
  {
    id: 3,
    title: "ToolHive",
    description: "An all-in-one hub of handy web tools",
    details: "A Next.js web application that brings a collection of useful tools together in one fast, clean interface. Built on the App Router with server-optimized image handling via Sharp and email delivery through Nodemailer.",
    features: [
      "A unified hub of multiple utility tools in a single place.",
      "Fast, server-rendered pages built with the Next.js App Router.",
      "Optimized, on-the-fly image processing with Sharp.",
      "Contact / feedback delivery via Nodemailer.",
      "Polished UX with toast feedback (Sonner) and Lucide icons."
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Axios", "Nodemailer", "Sharp", "Sonner"],
    featured: false,
    category: "Web App",
    year: "2026",
    highlights: ["All-in-one tools", "App Router", "Optimized images", "Live deployment"],
    architecture: ["App Router architecture"],
    github: "https://github.com/ek-sree/toolhive.git",
    images: [],
    live: "https://toolhive-iota.vercel.app",
    link: "/projects/3"
  },
  {
    id: 4,
    title: "Log Ingestion System",
    description: "Real-time log ingestion, search & filtering tool",
    details: "A full-stack developer tool to ingest, search, and filter logs in real time. A Node.js + TypeScript backend stores logs and supports complex, combinable filtering, while a React (Vite + Tailwind) frontend streams and filters them live over Socket.IO. Containerized with Docker for easy setup.",
    features: [
      "Ingest and persist logs through a Node.js + TypeScript API.",
      "Complex, combinable filtering by level, message, time range, and more.",
      "Real-time log streaming to the UI via Socket.IO.",
      "Clean React + Vite + Tailwind interface for searching and monitoring.",
      "Containerized with Docker for a one-command setup."
    ],
    technologies: ["React", "Vite", "TypeScript", "Node.js", "Express", "Socket.IO", "Tailwind", "Docker"],
    featured: false,
    category: "Developer Tool",
    year: "2025",
    highlights: ["Real-time streaming", "Advanced filtering", "Socket.IO", "Dockerized"],
    architecture: ["Client-server architecture"],
    github: "https://github.com/ek-sree/log-ingestion.git",
    images: [],
    link: "/projects/4"
  },
  {
    id: 5,
    title: "Rich Text Editor",
    description: "A modern WYSIWYG rich-text editor",
    details: "A polished rich-text editor built with Next.js and TipTap (ProseMirror). It supports rich formatting — headings, lists, highlights, text alignment and more — with safe, sanitized HTML output via DOMPurify, all wrapped in an accessible UI built on Radix primitives and Tailwind.",
    features: [
      "WYSIWYG editing powered by TipTap on top of ProseMirror.",
      "Rich formatting: headings, lists, highlight, and text alignment.",
      "Safe, sanitized HTML output using DOMPurify.",
      "Accessible controls built with Radix UI primitives.",
      "Themed, responsive interface styled with Tailwind CSS."
    ],
    technologies: ["Next.js", "TypeScript", "TipTap", "Tailwind CSS", "Radix UI", "DOMPurify"],
    featured: false,
    category: "Web App",
    year: "2025",
    highlights: ["WYSIWYG editing", "Rich formatting", "Sanitized output", "TipTap / ProseMirror"],
    architecture: ["Component-based architecture"],
    github: "https://github.com/ek-sree/rich-editor.git",
    images: [],
    link: "/projects/5"
  },
  {
    id: 6,
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
    featured: false,
    category: "E-commerce",
    year: "2023",
    highlights: ["RazorPay Payment Gateway", "Product Catalogue", "Cart Management", "Order Tracking"],
    architecture: ["MVC architecture"],
    github: "https://github.com/ek-sree/TimeZone.git",
    images: [timezone, timezone1, timezone2, timezone3, timezone4, timezone5, timezone6, timezone7, timezone8, timezone9, timezone10, timezone11, timezone12, timezone13, timezone14, timezone15, timezone16, timezone17, timezone18],
    live: "https://thetimezone.official",
    link: "/projects/6"
  },
  {
    id: 7,
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
    link: "/projects/7"
  },
  {
    id: 8,
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
    link: "/projects/8"
  }
]
