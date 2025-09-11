import React from "react";
import "./Resume.css";
import html2pdf from "html2pdf.js"; 

const resumeData = {
  name: "Himanshu Kumar",
  profession: "Computer Science and Engineering Student",
  email: "himanshujhaa4262@gmail.com",
  phone: "+91-8591227854",
  location: "VNIT College, Bajaj Nagar, Nagpur, Maharashtra - 440010",
  linkedin: "https://www.linkedin.com/in/himanshu-kumar-a83388342/",
  github: "https://github.com/Hymanshu-jha/",
  leetcode: "https://leetcode.com/u/kaadhale/",
  summary:
    "Computer Science student skilled in full-stack development and backend systems with C++, JavaScript, Node.js, React.js, and MySQL. Passionate about learning new technologies, exploring AI/ML, and building scalable, high-performance applications. Seeking a Software Developer role to grow and contribute in dynamic environments.",
  education: [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Visvesvaraya National Institute of Technology, Nagpur",
      year: "2026",
      grade: "6.24 CGPA",
    },
    {
      degree: "Class XII",
      institution: "M M TM College, Darbhanga (BSEB)",
      year: "2017",
      grade: "71%",
    },
    {
      degree: "Class X",
      institution: "D A V Public, Darbhanga (CBSE)",
      year: "2015",
      grade: "84%",
    },
  ],
  skills: [
    "C++", "JavaScript", "MySQL", "Node.js", "WebSockets",
    "React.js", "DSA", "Postman", "Visual Studio Code"
  ],
  projects: [
    {
      title: "Sorting Visualizer",
      duration: "Aug 2025",
      description:
        "Created an interactive React project to visualize Bubble, Selection, Insertion, Merge, and Quick Sort algorithms with animations. Delivered an educational tool that demonstrates sorting logic.",
      technologies: "React, JavaScript, Algorithm Design",
      url: "https://sorting-visualizer-xi-ebon.vercel.app/"
    },
    {
      title: "bookIt (Appointment Booking Platform)",
      duration: "Jun 2025 - Jul 2025",
      description:
        "Developed an appointment booking platform with scheduling, authentication, payments, geolocation, and notifications. Built a secure and scalable booking system with integrated payment processing, real-time notifications.",
      technologies: "MongoDB, Express.js, React, Node.js, Stripe, Leaflet.js, OpenStreetMap API, BullMQ",
      url: "https://appointment-booking-system-tau.vercel.app/"
    },
    {
      title: "Convoo (Full-stack Chat App)",
      duration: "May 2025 - Jun 2025",
      description:
        "Built a full-stack MERN application enabling real-time messaging and video calling with a responsive frontend and optimized backend. Delivered a production-ready chat platform with low-latency communication and live UI updates.",
      technologies: "Node.js, Express.js, MongoDB, BullMQ, WebSockets, React",
      url: "https://chat-app-rho-ashy.vercel.app/"
    },
    {
      title: "Heap Memory Allocation Simulator",
      duration: "Mar 2024",
      description:
        "Implemented a dynamic memory allocation and deallocation simulator in C mimicking heap management with linked lists, including allocation, deallocation, and block merging strategies. Delivered an interactive console tool, displaying status in realtime for understanding low-level memory management.",
      technologies: "C, dynamic memory allocation (malloc, calloc), linked lists, sorting algorithms",
      url: "https://github.com/Hymanshu-jha/System_Programming"
    },
    {
      title: "Symbol Table & Lookup System",
      duration: "Feb 2024",
      description:
        "Implemented a hash-based symbol table with insertion, search, and scope management, ensuring efficient variable handling in nested scopes. Used C, file handling, data structures (hashing), and compiler design concepts.",
      technologies: "C, File Handling, Hashing, Compiler Design",
      url: "https://github.com/Hymanshu-jha/System_Programming"
    },
  ],
  languages: ["Hindi", "English"],
};




const Resume = () => {
  const handleDownloadPDF = () => {
    // Directly point to the PDF inside public/
    const link = document.createElement("a");
    link.href = "/Himanshu_Kumar_Resume.pdf"; // Path relative to public folder
    link.download = "Himanshu_Kumar_Resume.pdf"; // Suggested download name
    link.click();
  };

  return (
    <div className="resume-container">
      <header>
        <h1 className="resume-name">{resumeData.name}</h1>
        <div className="resume-profession">{resumeData.profession}</div>
        <div className="resume-contact">
          <span>{resumeData.email}</span> | <span>{resumeData.phone}</span> | <span>{resumeData.location}</span>
        </div>
        <div className="resume-links">
          <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={resumeData.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={resumeData.leetcode} target="_blank" rel="noopener noreferrer">LeetCode</a>
        </div>
      </header>

      <section>
        <h2>Professional Summary</h2>
        <p>{resumeData.summary}</p>
      </section>

      <section>
        <h2>Education</h2>
        <div className="education-list">
          {resumeData.education.map((edu, idx) => (
            <div className="education-row" key={idx}>
              <div className="edu-left">
                <strong>{edu.degree}</strong><br />
                {edu.institution}
                <span className="edu-year"> ({edu.year})</span>
              </div>
              <div className="edu-grade">{edu.grade}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Technical Skills</h2>
        <div className="skills-list">
          {resumeData.skills.map((skill, idx) => (
            <span className="skill-badge" key={idx}>{skill}</span>
          ))}
        </div>
      </section>

      <section>
        <h2>Projects</h2>
        <div className="projects-list">
          {resumeData.projects.map((proj, idx) => (
            <div className="project-card" key={idx}>
              <div className="project-header">
                <span className="project-title">{proj.title}</span>
                <span className="project-date">{proj.duration}</span>
              </div>
              <div className="project-description">{proj.description}</div>
              <div className="project-tech">
                <strong>Technologies:</strong> {proj.technologies}
              </div>
              <div>
                <a href={proj.url} target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Languages</h2>
        <div className="language-list">
          {resumeData.languages.map((lang, idx) => (
            <span className="lang-badge" key={idx}>{lang}</span>
          ))}
        </div>
      </section>

      <footer>
        {/* ✅ Changed here: no window.print(), uses html2pdf */}
        <button className="btn-download" onClick={() => handleDownloadPDF("A1")}>
          Download PDF
        </button>
      </footer>
    </div>
  );
};

export default Resume;
