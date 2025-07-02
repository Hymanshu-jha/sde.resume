import React from "react";
import "./Resume.css";

const resumeData = {
  name: "Himanshu Jha",
  email: "himanshujhaa4262@gmail.com",
  phone: "+91-8591227854",
  location: "Nagpur, Maharashtra",
  linkedin: "https://www.linkedin.com/in/himanshu-kumar-a83388342/",
  github: "https://github.com/Hymanshu-jha/",
  leetcode: "https://leetcode.com/u/kaadhale/",
  summary:
    "Computer Science Engineering student with expertise in full-stack web development, backend architecture, and real-time systems. Proficient in JavaScript, Node.js, React, MongoDB, and cloud technologies. Experienced in building scalable applications with modern frameworks and databases. Seeking a backend developer role to apply skills in designing performant systems.",
  education: [
    {
      degree: "Bachelor of Technology in Computer Science Engineering",
      institution: "Visvesvaraya National Institute of Technology (VNIT), Nagpur",
      year: "2022 - 2026",
      grade: "Expected Graduation: May 2026",
    },
    {
      degree: "Higher Secondary Education in Science",
      institution: "MMTM College, Darbhanga",
      year: "2015 - 2017",
      grade: "",
    },
  ],
  experience: [
    {
      title: "Software Developer",
      company: "Personal Projects",
      duration: "2024 - Present",
      responsibilities: [
        "Developed full-stack web applications using MERN stack focused on performance optimization.",
        "Implemented real-time communication systems using WebSockets and WebRTC for video calling.",
        "Built scalable backend APIs using Node.js and Express.js integrated with MongoDB.",
        "Optimized real-time messaging systems achieving 40% lower latency.",
        "Designed job queue systems with BullMQ for handling 10,000+ concurrent tasks.",
      ],
    },
  ],
  skills: {
    "Programming Languages": ["JavaScript", "TypeScript", "HTML5", "CSS3", "MySQL"],
    "Frameworks & Libraries": ["Node.js", "Express.js", "React", "Next.js", "Redux", "TailwindCSS"],
    Databases: ["MongoDB", "Redis", "MySQL", "Database Design"],
    "Tools & Technologies": ["Git", "Docker", "Linux", "Postman", "VS Code", "Vercel"],
    Specializations: ["REST APIs", "WebSockets", "WebRTC", 'ZegoCloud', "Authentication", "BullMQ", "Socket.io", "Asynchronous Programming", "Data Structures & Algorithms"],
  },
  projects: [
    {
      title: "Real-Time Chat Application with Video Calling",
      duration: "2024",
      description:
        "Full-stack MERN application with real-time messaging and video calling capabilities.",
      achievements: [
        "Built custom WebSocket implementation achieving 40% lower latency than Socket.io.",
        "Integrated WebRTC for peer-to-peer video calling functionality.",
        "Implemented BullMQ job queues for processing 10,000+ email verification tasks.",
        "Designed MongoDB schema with optimized indexes for fast message retrieval.",
        "Created responsive React frontend with real-time UI updates.",
      ],
      technologies:
        "Node.js, Express.js, MongoDB, Redis, BullMQ, WebSockets, WebRTC, React, TailwindCSS, Docker",
      url: "https://chat-app-rho-ashy.vercel.app/",
    },
    {
      title: "Email Verification System",
      duration: "2024",
      description:
        "Scalable email verification system with queue-based processing.",
      achievements: [
        "Developed asynchronous email processing system using BullMQ for scalability.",
        "Implemented NodeMailer integration with custom email templates.",
        "Built retry mechanisms and failure handling for reliable email delivery.",
        "Created RESTful APIs for user registration and verification workflows.",
      ],
      technologies:
        "Node.js, Express.js, BullMQ, NodeMailer, MongoDB, Redis",
    },
  ],
};

const Resume = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-container">
      <div className="header">
        <h1 className="header-title">{resumeData.name}</h1>
        <div className="header-contact">
          {resumeData.email} | {resumeData.phone} | {resumeData.location}
        </div>
        <div className="header-links">
          <span><strong>LinkedIn:</strong> <a href={resumeData.linkedin}>{resumeData.linkedin}</a></span> |{' '}
          <span><strong>GitHub:</strong> <a href={resumeData.github}>{resumeData.github}</a></span> |{' '}
          <span><strong>LeetCode:</strong> <a href={resumeData.leetcode}>{resumeData.leetcode}</a></span>
        </div>
      </div>

      <div className="section">
        <h2>Professional Summary</h2>
        <p>{resumeData.summary}</p>
      </div>

      <div className="section">
        <h2>Education</h2>
        {resumeData.education.map((edu, idx) => (
          <div key={idx} className="edu-entry flex-row">
            <div>
              <div className="edu-degree">{edu.degree}</div>
              <div className="edu-school">{edu.institution}</div>
            </div>
            <div className="date">{edu.year} {edu.grade && `| ${edu.grade}`}</div>
          </div>
        ))}
      </div>

      <div className="section">
        <h2>Technical Skills</h2>
        {Object.entries(resumeData.skills).map(([category, skills]) => (
          <div key={category} className="skill-category">
            <span className="skill-heading">{category}: </span>
            <span className="skill-list">{skills.join(", ")}</span>
          </div>
        ))}
      </div>

      <div className="section">
        <h2>Experience</h2>
        {resumeData.experience.map((exp, idx) => (
          <div key={idx} className="experience-entry">
            <div className="flex-row">
              <span className="experience-title">{exp.title} | {exp.company}</span>
              <span className="date">{exp.duration}</span>
            </div>
            <ul className="experience-list">
              {exp.responsibilities.map((resp, i) => (
                <li key={i}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="section">
        <h2>Projects</h2>
        {resumeData.projects.map((proj, idx) => (
          <div key={idx} className="project-entry">
            <div className="flex-row">
              <span className="project-title">{proj.title}</span>
              <span className="date">{proj.duration}</span>
            </div>
            <div className="project-description">{proj.description}</div>
            <ul className="project-list">
              {proj.achievements.map((ach, i) => (
                <li key={i}>{ach}</li>
              ))}
            </ul>
            <div className="project-technologies">
              <strong>Technologies:</strong> {proj.technologies}
            </div>
            {proj.url && (
              <div className="project-link">
                <strong>Live Demo:</strong> <a href={proj.url}>{proj.url}</a>
              </div>
            )}
          </div>
        ))}
      </div>

      <button className="print-button" onClick={handlePrint}>
        Download PDF
      </button>
    </div>
  );
};

export default Resume;
