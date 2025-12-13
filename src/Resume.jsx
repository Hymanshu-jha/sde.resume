import React from "react";

const resumeData = {
  name: "Himanshu Kumar",
  profession: "Software Engineer",
  email: "himanshujhaa4262@gmail.com",
  phone: "+91-8591227854",
  location: "Nagpur, Maharashtra",
  linkedin: "https://www.linkedin.com/in/himanshu-kumar-a83388342/",
  github: "https://github.com/Hymanshu-jha",
  leetcode: "https://leetcode.com/u/kaadhale/",
 summary:
    "Aspiring Software Engineer with hands-on experience building full-stack web applications using the MERN stack (React, Node.js, Express, MongoDB). Solved 500+ DSA problems, strengthening problem-solving, data structures, and algorithmic thinking. Experienced in real-time communication systems, secure payment integration, RESTful API development, and performance-aware backend design. Actively exploring Machine Learning and Artificial Intelligence with strong foundations in Computer Science and Mathematics. Demonstrated ability to write clean, maintainable code and deliver production-ready solutions."
,
  education: [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "Visvesvaraya National Institute of Technology, Nagpur",
      duration: "Expected 2026"
    }
  ],
  skills: {
    "Languages": "C++, JavaScript",
    "Frontend": "React.js",
    "Backend": "Node.js, Express.js, REST APIs, WebSockets",
    "Database": "MySQL",
    "Tools & Technologies": "GitHub, GitLab CI/CD, Postman, OAuth2.0, BullMQ"
  },
  projects: [
    {
      title: "Convoo — Real-Time Chat & Video Platform",
      duration: "May 2025 - Jun 2025",
      techStack: "MERN Stack, WebSocket, ZegoCloud, JWT, BullMQ",
      points: [
        "Built full-stack real-time messaging app with video calling for 1000+ concurrent users using WebSocket and ZegoCloud",
        "Implemented JWT authentication with bcrypt encryption, reducing unauthorized access by 100%",
        "Automated email notifications using BullMQ job queues, improving user engagement by 40%"
      ],
      url: "chat-app-rho-ashy.vercel.app"
    },
    {
      title: "BookIt — Appointment Scheduling Platform",
      duration: "Jun 2025 - Jul 2025",
      techStack: "MERN Stack, Stripe API, OAuth2.0, OpenStreet API",
      points: [
        "Developed appointment booking system with Stripe payment integration processing transactions securely",
        "Integrated OAuth2.0 and OpenStreet API for seamless authentication and location-based provider discovery",
        "Optimized API response time by reducing redundant database queries and using efficient data models"

      ],
      url: "github.com/Hymanshu-jha/Appointment-Booking-System"
    },
    {
      title: "Sorting Visualizer",
      duration: "Aug 2025",
      techStack: "React.js, JavaScript",
      points: [
        "Created interactive visualizer for 5 sorting algorithms (Bubble, Selection, Insertion, Merge, Quick Sort)",
        "Implemented dynamic speed controls and array customization, enhancing algorithm comprehension"
      ],
      url: "sorting-visualizer-xi-ebon.vercel.app"
    },
    {
      title: "Memory Allocation Simulator",
      duration: "Mar 2024",
      techStack: "C Programming",
      points: [
        "Developed heap memory simulator using best-fit algorithm, managing 10,000+ memory blocks efficiently",
        "Reduced memory fragmentation by 30% through automatic adjacent block coalescing"
      ],
      url: "github.com/Hymanshu-jha/System_Programming"
    }
  ]
};

const Resume = () => {
  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.name}>{resumeData.name}</h1>
          <div style={styles.contactInfo}>
            {resumeData.email} | {resumeData.phone} | {resumeData.location}
          </div>
          <div style={styles.links}>
            <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer" style={styles.link}>LinkedIn</a> | <a href={resumeData.github} target="_blank" rel="noopener noreferrer" style={styles.link}>GitHub</a> | <a href={resumeData.leetcode} target="_blank" rel="noopener noreferrer" style={styles.link}>LeetCode</a>
          </div>
        </header>

        <div style={styles.section}>
          <div style={styles.sectionTitle}>SUMMARY</div>
          <div style={styles.summaryText}>{resumeData.summary}</div>
        </div>

        <div style={styles.section}>
          <div style={styles.sectionTitle}>TECHNICAL SKILLS</div>
          <div style={styles.skillsGrid}>
            {Object.entries(resumeData.skills).map(([category, skills], idx) => (
              <div key={idx} style={styles.skillRow}>
                <strong style={styles.skillCategory}>{category}:</strong>
                <span style={styles.skillList}> {skills}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.section}>
          <div style={styles.sectionTitle}>PROJECTS</div>
          {resumeData.projects.map((project, idx) => (
            <div key={idx} style={styles.projectItem}>
              <div style={styles.projectHeader}>
                <span style={styles.projectTitle}>{project.title}</span>
                <span style={styles.duration}>{project.duration}</span>
              </div>
              <div style={styles.techStack}>{project.techStack} | <a href={`https://${project.url}`} target="_blank" rel="noopener noreferrer" style={styles.link}>Link</a></div>
              <ul style={styles.bulletList}>
                {project.points.map((point, pIdx) => (
                  <li key={pIdx} style={styles.bulletItem}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={styles.section}>
          <div style={styles.sectionTitle}>EDUCATION</div>
          {resumeData.education.map((edu, idx) => (
            <div key={idx} style={styles.educationItem}>
              <div style={styles.educationHeader}>
                <span style={styles.educationDegree}>{edu.degree}</span>
                <span style={styles.duration}>{edu.duration}</span>
              </div>
              <div style={styles.institution}>{edu.institution}</div>
            </div>
          ))}
        </div>

        <footer style={styles.footer} className="no-print">
          <button style={styles.btnDownload} onClick={handleDownloadPDF}>
            Download PDF
          </button>
        </footer>
      </div>
    </div>
  );
};

const styles = {
  body: {
    fontFamily: "'Calibri', 'Arial', sans-serif",
    lineHeight: "1.4",
    color: "#000",
    background: "#f5f5f5",
    padding: "20px",
    margin: 0,
  },
  container: {
    maxWidth: "850px",
    margin: "0 auto",
    background: "white",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    padding: "0",
  },
  header: {
    padding: "20px 30px 15px 30px",
    borderBottom: "2px solid #000",
    textAlign: "center",
  },
  name: {
    fontSize: "28px",
    fontWeight: "bold",
    margin: "0 0 8px 0",
    color: "#000",
    letterSpacing: "0.5px",
  },
  contactInfo: {
    fontSize: "11px",
    color: "#333",
    marginBottom: "5px",
  },
  links: {
    fontSize: "11px",
    color: "#0066cc",
  },
  link: {
    color: "#0066cc",
    textDecoration: "none",
  },
  section: {
    padding: "12px 30px",
    marginBottom: "0",
  },
  sectionTitle: {
    fontSize: "13px",
    fontWeight: "bold",
    marginBottom: "8px",
    color: "#000",
    letterSpacing: "1px",
    borderBottom: "1.5px solid #000",
    paddingBottom: "3px",
  },
  summaryText: {
    fontSize: "11px",
    lineHeight: "1.5",
    textAlign: "justify",
  },
  skillsGrid: {
    fontSize: "11px",
  },
  skillRow: {
    marginBottom: "5px",
    lineHeight: "1.5",
  },
  skillCategory: {
    fontWeight: "bold",
    minWidth: "140px",
    display: "inline-block",
  },
  skillList: {
    color: "#333",
  },
  projectItem: {
    marginBottom: "12px",
  },
  projectHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: "3px",
  },
  projectTitle: {
    fontSize: "12px",
    fontWeight: "bold",
    color: "#000",
  },
  duration: {
    fontSize: "10px",
    color: "#666",
    whiteSpace: "nowrap",
  },
  techStack: {
    fontSize: "10px",
    color: "#666",
    marginBottom: "5px",
    fontStyle: "italic",
  },
  bulletList: {
    margin: "5px 0 0 18px",
    padding: 0,
  },
  bulletItem: {
    fontSize: "11px",
    marginBottom: "3px",
    lineHeight: "1.4",
  },
  educationItem: {
    marginBottom: "10px",
  },
  educationHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: "3px",
  },
  educationDegree: {
    fontSize: "12px",
    fontWeight: "bold",
    color: "#000",
  },
  institution: {
    fontSize: "11px",
    color: "#333",
  },
  gpa: {
    fontSize: "10px",
    color: "#666",
    fontStyle: "italic",
  },
  footer: {
    textAlign: "center",
    padding: "20px 30px",
    borderTop: "1px solid #e0e0e0",
  },
  btnDownload: {
    background: "#000",
    color: "white",
    padding: "10px 25px",
    fontSize: "13px",
    fontWeight: "600",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background 0.2s",
  },
};

// Add print styles
const printStyles = `
  @media print {
    body {
      background: white !important;
      padding: 0 !important;
    }
    @page {
      size: A4;
      margin: 0.5in;
    }
    .no-print {
      display: none !important;
    }
  }
`;

// Inject print styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = printStyles;
  document.head.appendChild(styleSheet);
}

export default Resume;