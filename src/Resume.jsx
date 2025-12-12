import React from "react";

const resumeData = {
  name: "Himanshu Kumar",
  profession: "Aspiring Software Engineer",
  email: "himanshujhaa4262@gmail.com",
  phone: "+91-8591227854",
  location: "Nagpur, Maharashtra, INDIA",
  linkedin: "https://www.linkedin.com/in/himanshu-kumar-a83388342/",
  github: "https://github.com/Hymanshu-jha/",
  leetcode: "https://leetcode.com/u/kaadhale/",
  summary:
    "Aspiring Software Engineer pursuing B.Tech in Computer Science with demonstrated expertise in developing innovative, scalable, and user-focused applications. Proficient in full-stack development using JavaScript, React.js, Node.js, and MERN stack technologies. Experienced in building real-time communication platforms, implementing secure authentication systems, and developing interactive educational tools. Skilled in algorithm visualization, system programming, and backend architecture design. Strong foundation in data structures, database management, and modern web technologies. Demonstrates excellent problem-solving abilities, code optimization skills, and commitment to continuous learning in fast-paced development environments.",
  education: [
    {
      degree: "B.Tech | Computer Science",
      institution: "Visvesvaraya National Institute of Technology, Nagpur",
      location: "Nagpur, Maharashtra",
      duration: "Aug 2022 - May 2026",
    },
    {
      degree: "Class XII",
      institution: "M M TM College, Darbhanga",
      location: "Darbhanga, Bihar",
      duration: "2017",
    },
    {
      degree: "Class X",
      institution: "D A V Public School, Darbhanga",
      location: "Darbhanga, Bihar",
      duration: "2015",
    },
  ],
  skills: [
    "Data Structures" , "C++", "MySQL", "JavaScript", "Node.js", "Express.js",
    "React.js", "WebSockets","REST APIs", "JWT Authentication", "OAuth2.0", 
    "BullMQ", "Stripe", "GitHub", "Postman", "Agile Methodologies"
  ],
  projects: [
    {
      title: "Convoo — Real-Time Chat and Video Communication Platform",
duration: "May 2025 - Jun 2025",
durationBadge: "2 Months",
techStack: "MERN (MongoDB, Express.js, React.js, Node.js), WebSocket, ZegoCloud, REST APIs, JWT Authentication, BullMQ, Nodemailer",
      points: [
        "Developed and deployed a full-stack MERN application enabling real-time messaging and peer-to-peer video calling using WebSocket and ZegoCloud, enhancing user communication experience.",
        "Implemented secure user authentication and authorization using JWT and bcrypt, ensuring robust data privacy and session management.",
        "Integrated BullMQ with Nodemailer to handle background job queues for email notifications, improving user engagement and ensuring reliable message delivery.",
        "Built a scalable and responsive backend with Express.js, supporting concurrent real-time messaging and low-latency communication.",
        "Deployed application using Render (backend) and Vercel (frontend), establishing a continuous integration pipeline and ensuring high availability.",
      ],
      url: "https://chat-app-rho-ashy.vercel.app/"
    },
    {
      title: "BookIt — Smart Appointment Scheduling Platform",
      duration: "Jun 2025 - Jul 2025",
      durationBadge: "2 Months",
      techStack: "MERN (MongoDB, Express.js, React.js, Node.js), Stripe API, JWT Authentication, OAuth2.0, OpenStreet API",
      points: [
        "Developed a comprehensive full-stack appointment scheduling platform enabling users to book, manage, and track appointments with integrated authentication and role-based access control.",
        "Integrated Stripe payment gateway and OpenStreet API, enabling seamless financial transactions and easy discovery of nearby service providers for enhanced user experience.",
        "Designed a scalable backend architecture with Node.js and Express.js, ensuring high performance and fault tolerance under concurrent usage scenarios.",
        "Implemented OAuth2.0 for secure third-party authentication and authorization, improving platform security and user onboarding experience."
      ],
      url: "https://github.com/Hymanshu-jha/Appointment-Booking-System"
    },
    {
      title: "Sorting Visualizer — Interactive Algorithm Visualization Tool",
      duration: "Aug 2025",
      durationBadge: "1 Month",
      techStack: "React.js, JavaScript",
      points: [
        "Developed an interactive React.js application to visualize multiple sorting algorithms including Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, and Quick Sort with animated step-by-step demonstrations.",
        "Delivered an educational tool demonstrating step-wise sorting logic and algorithm efficiency, enhancing understanding of computational complexity and algorithm behavior.",
        "Implemented dynamic speed controls and array size customization, providing flexible learning experience for users at different skill levels."
      ],
      url: "https://sorting-visualizer-xi-ebon.vercel.app/"
    },
    {
      title: "Heap Memory Allocation Simulator",
      duration: "Mar 2024",
      durationBadge: "1 Month",
      techStack: "C Programming",
      points: [
"Implemented a dynamic memory allocation and deallocation simulator in C, applying the best-fit algorithm (commonly used by compilers) to efficiently manage heap memory and reduce fragmentation.",
 "Delivered an interactive console-based tool to allocate/deallocate over 10,000 memory blocks, merge adjacent free blocks, and display real-time memory status, improving visibility into low-level memory operations.",
 "Optimized memory usage by minimizing fragmentation and wastage, reinforcing understanding of operating system concepts such as memory block tracking, fragmentation, and coalescing."

      ],
      url: "https://github.com/Hymanshu-jha/System_Programming"
    },
    {
      title: "Symbol Table & Lookup System",
      duration: "Feb 2024",
      durationBadge: "1 Month",
      techStack: "C Programming, Data Structures",
      points: [
        "Implemented hash-based symbol table with insertion, search, and scope management functionalities, ensuring efficient variable handling in nested scopes.",
        "Developed collision resolution mechanisms and scope stack management for compiler design applications.",
        "Optimized lookup operations using hash functions, achieving O(1) average-case time complexity for symbol retrieval."
      ],
      url: "https://github.com/Hymanshu-jha/System_Programming"
    },
  ],
  languages: ["English", "Hindi"],
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
          <div style={styles.title}>{resumeData.profession}</div>
          <div style={styles.contactInfo}>
            {resumeData.phone} | {resumeData.email} | {resumeData.location}
          </div>
          <div style={styles.links}>
            <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer" style={styles.link}>LinkedIn</a>
            {" | "}
            <a href={resumeData.github} target="_blank" rel="noopener noreferrer" style={styles.link}>GitHub</a>
            {" | "}
            <a href={resumeData.leetcode} target="_blank" rel="noopener noreferrer" style={styles.link}>LeetCode</a>
          </div>
        </header>

        <div style={styles.summary}>
          {resumeData.summary}
        </div>

        <div style={styles.section}>
          <div style={styles.sectionTitle}>Technical Skills</div>
          <div style={styles.skillsList}>
            {resumeData.skills.map((skill, idx) => (
              <span key={idx} style={styles.skillItem}>{skill}</span>
            ))}
          </div>
        </div>

        <div style={styles.section}>
          <div style={styles.sectionTitle}>Projects</div>
          {resumeData.projects.map((project, idx) => (
            <div key={idx} style={styles.projectItem}>
              <div style={styles.projectHeader}>
                <div style={styles.projectTitle}>{project.title}</div>
                <div style={styles.duration}>
                  {project.duration}
                  <span style={styles.durationBadge}>{project.durationBadge}</span>
                </div>
              </div>
              <div style={styles.techStack}>Tech Stack: {project.techStack}</div>
              <div style={styles.projectDetails}>
                <ul style={styles.projectList}>
                  {project.points.map((point, pIdx) => (
                    <li key={pIdx} style={styles.projectListItem}>{point}</li>
                  ))}
                </ul>
              </div>
              <div style={styles.projectLink}>
                <a href={project.url} target="_blank" rel="noopener noreferrer" style={styles.link}>
                  link
                </a>
              </div>
            </div>
          ))}
        </div>

        <div style={styles.section}>
          <div style={styles.sectionTitle}>Education</div>
          {resumeData.education.map((edu, idx) => (
            <div key={idx} style={styles.educationItem}>
              <div style={styles.educationHeader}>
                <div style={styles.educationDegree}>{edu.degree}</div>
                <div style={styles.duration}>{edu.duration}</div>
              </div>
              <div style={styles.institution}>{edu.institution}</div>
              <div style={styles.location}>{edu.location}</div>
            </div>
          ))}
        </div>

        <div style={styles.section}>
          <div style={styles.sectionTitle}>Additional Information</div>
          <div style={styles.additionalInfo}>
            <strong>Languages:</strong> {resumeData.languages.join(", ")} (Proficient)
          </div>
        </div>

        <footer style={styles.footer}>
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
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
    color: "#333",
    background: "#f5f5f5",
    padding: "40px 20px",
    margin: 0,
  },
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    background: "white",
    boxShadow: "0 0 20px rgba(0,0,0,0.1)",
  },
  header: {
    marginBottom: "30px",
    padding: "20px 40px",
    background: "#fff",
    borderBottom: "3px solid #000",
  },
  name: {
    fontSize: "32px",
    fontWeight: "bold",
    margin: "0 0 5px 0",
    color: "#000",
  },
  title: {
    fontSize: "16px",
    color: "#666",
    marginBottom: "15px",
  },
  contactInfo: {
    fontSize: "14px",
    color: "#333",
    marginBottom: "10px",
  },
  links: {
    fontSize: "14px",
    marginTop: "10px",
  },
  link: {
    color: "#0066cc",
    textDecoration: "none",
  },
  summary: {
    padding: "0 40px",
    marginBottom: "30px",
    fontSize: "14px",
    lineHeight: "1.7",
    textAlign: "justify",
  },
  section: {
    padding: "0 40px",
    marginBottom: "30px",
  },
  sectionTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "#000",
    textTransform: "uppercase",
    borderBottom: "2px solid #000",
    paddingBottom: "5px",
  },
  skillsList: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    fontSize: "14px",
  },
  skillItem: {
    background: "#f0f0f0",
    padding: "5px 12px",
    borderRadius: "3px",
    display: "inline-block",
  },
  projectItem: {
    marginBottom: "25px",
  },
  projectHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: "8px",
    flexWrap: "wrap",
  },
  projectTitle: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#000",
  },
  duration: {
    fontSize: "13px",
    color: "#666",
    whiteSpace: "nowrap",
  },
  durationBadge: {
    display: "inline-block",
    background: "#e8e8e8",
    padding: "2px 8px",
    borderRadius: "3px",
    fontSize: "12px",
    marginLeft: "10px",
    color: "#666",
  },
  techStack: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "10px",
  },
  projectDetails: {
    marginTop: "10px",
  },
  projectList: {
    marginLeft: "20px",
    marginTop: "8px",
    paddingLeft: 0,
  },
  projectListItem: {
    fontSize: "14px",
    marginBottom: "8px",
    lineHeight: "1.6",
  },
  projectLink: {
    marginTop: "8px",
    fontSize: "14px",
  },
  educationItem: {
    marginBottom: "25px",
  },
  educationHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: "8px",
    flexWrap: "wrap",
  },
  educationDegree: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#000",
  },
  institution: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "5px",
  },
  location: {
    fontSize: "13px",
    color: "#888",
    marginBottom: "10px",
  },
  additionalInfo: {
    fontSize: "14px",
    lineHeight: "1.7",
  },
  footer: {
    textAlign: "center",
    padding: "30px 40px",
  },
  btnDownload: {
    background: "#000",
    color: "white",
    padding: "12px 30px",
    fontSize: "14px",
    fontWeight: "600",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background 0.2s ease-in-out",
  },
};

export default Resume;