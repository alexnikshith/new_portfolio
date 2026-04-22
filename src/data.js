import { 
  Mail, 
  Phone, 
  MapPin, 
  Code2, 
  Cpu, 
  Shield, 
  Database, 
  Globe, 
  Award,
  BookOpen,
  Briefcase
} from 'lucide-react';
import { GitHub as Github, LinkedIn as Linkedin } from './components/Icons';

// Using your actual GitHub profile picture
const profilePic = "https://github.com/alexnikshith.png?size=400";

export const personalInfo = {
  name: "Nikshith Gurram",
  role: "Software Engineer & AI Enthusiast",
  bio: "A curious and motivated learner focused on Software Development, Machine Learning, and building tech solutions for real-world problems. Currently pursuing B.Tech at Amrita Vishwa Vidyapeetham.",
  email: "nikshithgurram2006@gmail.com",
  phone: "+91 7569778915",
  location: "Hyderabad, India",
  github: "https://github.com/alexnikshith",
  linkedin: "https://www.linkedin.com/in/nikshith-gurram-04027b1b7/",
  resumeUrl: "/resume.pdf", 
  profilePic: profilePic, 
};

export const skills = [
  { 
    category: "Languages", 
    items: ["Python", "Java", "C", "Go", "JavaScript"],
    icon: Code2
  },
  { 
    category: "Web Development", 
    items: ["React", "Tailwind CSS", "Node.js", "Flask", "HTML5", "CSS3"],
    icon: Globe
  },
  { 
    category: "Specializations", 
    items: ["Machine Learning", "Cloud Computing (Edge/Fog)", "Blockchain", "Cybersecurity"],
    icon: Cpu
  },
  { 
    category: "Databases & Tools", 
    items: ["MySQL", "MongoDB", "Git", "Docker", "VS Code", "Tableau"],
    icon: Database
  }
];

export const projects = [
  {
    title: "Book-Your-Service-Online-",
    description: "A comprehensive platform for booking professional services online with real-time scheduling and secure payments.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/alexnikshith/Book-Your-Service-Online-",
    demo: "https://book-your-service-online.onrender.com/",
    category: "Web"
  },
  {
    title: "Federated-Decentralized-Social-Networking-Platform",
    description: "Implements Federated Learning for privacy-preserving machine learning across decentralized devices.",
    tags: ["Machine Learning", "Python", "Privacy", "Federated Learning"],
    github: "https://github.com/alexnikshith/Federated-Decentralized-Social-Networking-Platform",
    demo: "https://nexiverse.vercel.app/",
    category: "ML"
  },
  {
    title: "Financial-Market-Trend-Risk-Analysis",
    description: "Business analytics project analyzing stock market trends and risk using Streamlit and data science libraries.",
    tags: ["Data Science", "Python", "Streamlit", "Finance"],
    github: "https://github.com/alexnikshith/Financial-Market-Trend-Risk-Analysis",
    demo: "https://quantedgebusiness.streamlit.app/",
    category: "Web"
  },
  {
    title: "Secure-University-Exam-Portal--final",
    description: "A robust digital examination platform with proctoring features and end-to-end encryption for integrity.",
    tags: ["Cybersecurity", "Web Dev", "Encryption", "React"],
    github: "https://github.com/alexnikshith/Secure-University-Exam-Portal--final",
    demo: "#",
    category: "Cybersecurity"
  },
  {
    title: "UrbanBazaar_mini_e_commerce",
    description: "A sleek, responsive shopping experience with product management, cart functionality, and checkout flow.",
    tags: ["Full Stack", "JavaScript", "Tailwind CSS", "Express"],
    github: "https://github.com/alexnikshith/UrbanBazaar_mini_e_commerce",
    demo: "#",
    category: "Web"
  },
  {
    title: "smart_attendance_system",
    description: "AI-powered biometric or barcode-based attendance tracking for institutions with automated reporting.",
    tags: ["AI", "Python", "Automation", "Database"],
    github: "https://github.com/alexnikshith/smart_attendance_system",
    demo: "#",
    category: "ML"
  },
  {
    title: "A-cloud-fog-based-architecture-for-iot-applications-dedicated-to-healthcare",
    description: "Real-time patient monitoring using Edge/Fog computing for low latency and Cloud for big data analytics.",
    tags: ["IoT", "Cloud Computing", "Python", "MQTT"],
    github: "https://github.com/alexnikshith/A-cloud-fog-based-architecture-for-iot-applications-dedicated-to-healthcare",
    demo: "#",
    category: "IoT"
  }
];

export const experience = [
  {
    role: "SDE Intern",
    company: "Bluestock Fintech",
    period: "July 2025 - Sept 2025",
    description: "Worked on software development tasks, contributing to internal tools and fintech solutions.",
    icon: Briefcase,
    certificate: "/certificates/bluestock_certificate.pdf"
  }
];

export const extracurriculars = [
  {
    title: "NSS Coordinator",
    organization: "Amrita Vishwa Vidyapeetham",
    description: "Leading community service initiatives and organizing blood donation camps and awareness drives.",
    icon: Shield,
    certificate: "/certificates/NSS_camp.pdf"
  },
  {
    title: "Anokha Tech Fest Coordinator",
    organization: "Amrita Vishwa Vidyapeetham",
    description: "Coordinated events and managed logistics for one of India's largest technical festivals.",
    icon: Cpu
  },
  {
    title: "Music Competition Winner",
    organization: "Inter-College Events",
    description: "Multiple prize winner in various vocal and instrumental music competitions at university levels.",
    icon: Award
  },
  {
    title: "Inter-University Sports",
    organization: "Sports Department",
    description: "Participated and won in multiple inter-university sports competitions, demonstrating team leadership.",
    icon: Award
  }
];

export const education = [
  {
    degree: "B.Tech in Computer Science",
    institution: "Amrita Vishwa Vidyapeetham",
    period: "2023 - 2027",
    description: "Focusing on Software Engineering, ML, and Blockchain.",
    icon: BookOpen
  },
  {
    degree: "Intermediate Education",
    institution: "New Vision Junior College",
    period: "Completed",
    description: "Secured 95.5% in board examinations.",
    icon: BookOpen
  },
  {
    degree: "Schooling",
    institution: "Srividhya Vidhyalayam",
    period: "Completed",
    description: "Achieved a perfect CGPA of 10.0.",
    icon: BookOpen
  }
];

export const certifications = [
  {
    title: "Machine Learning Certification",
    issuer: "Internshala Trainings",
    date: "April 2025",
    icon: Award,
    link: "/certificates/Machine%20Learning%20Training%20-%20Certificate%20of%20Completion.pdf"
  },
  {
    title: "Adobe Hackathon Recognition",
    issuer: "Adobe",
    date: "August 2025",
    icon: Award,
    link: "/certificates/adobe_hackathon.pdf"
  }
];
