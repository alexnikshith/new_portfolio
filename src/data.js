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
  Briefcase,
  BarChart3,
  Server,
  Terminal,
  Activity,
  Layers,
  Sparkles
} from 'lucide-react';

// Using actual GitHub profile picture
const profilePic = "https://github.com/alexnikshith.png?size=400";

export const personalInfo = {
  name: "Nikshith Gurram",
  title: "Software Engineer & AI/ML Developer",
  role: "Full-Stack Developer • Applied AI Enthusiast",
  bio: "Computer Science undergraduate at Amrita Vishwa Vidyapeetham with hands-on experience in full-stack development, applied AI systems, and cloud-fog architectures. Proficient in Python, React, FastAPI, Docker, and Kubernetes, with a passion for building scalable, secure, and high-performance software solutions.",
  email: "nikshithgurram2006@gmail.com",
  phone: "+91 75697 78915",
  location: "Hyderabad, India",
  github: "https://github.com/alexnikshith",
  linkedin: "https://www.linkedin.com/in/nikshith-gurram-04027b1b7/",
  resumeUrl: "/resume.pdf",
  profilePic: profilePic,
  status: "Open to Software Engineering & AI Roles",
  stats: [
    { label: "Software Solutions Deployed", value: "10+", icon: Sparkles },
    { label: "Financial Records Processed", value: "10K+", icon: BarChart3 },
    { label: "ML Model Prediction Accuracy", value: "90%+", icon: Activity },
    { label: "Docker Multi-Service Test Pass", value: "99.6%", icon: Shield }
  ]
};

export const skills = [
  {
    category: "Programming Languages",
    icon: Code2,
    color: "from-violet-500 to-indigo-500",
    description: "Core languages for systems, algorithmic problem solving & backend services",
    items: ["Python", "Go", "Java", "C", "Solidity", "SQL", "JavaScript"]
  },
  {
    category: "AI & Machine Learning",
    icon: Cpu,
    color: "from-cyan-500 to-blue-500",
    description: "Predictive modeling, feature engineering & intelligent automation",
    items: ["Scikit-learn", "Supervised Learning", "Regression & Classification", "Model Deployment", "Feature Engineering", "Time Series Analysis"]
  },
  {
    category: "Web & Frameworks",
    icon: Globe,
    color: "from-emerald-500 to-teal-500",
    description: "Modern reactive frontends, RESTful APIs & high-throughput backends",
    items: ["React.js", "FastAPI", "Node.js", "Flask", "Tailwind CSS", "RESTful APIs", "HTML5/CSS3"]
  },
  {
    category: "DevOps & Cloud Systems",
    icon: Server,
    color: "from-fuchsia-500 to-pink-500",
    description: "Containerization, cloud infrastructure & continuous integration",
    items: ["Docker", "Kubernetes", "AWS", "GitHub Actions", "CI/CD", "Linux", "VS Code"]
  },
  {
    category: "Data & Business Analytics",
    icon: BarChart3,
    color: "from-amber-500 to-orange-500",
    description: "Exploratory data analysis, interactive reporting & business intelligence",
    items: ["Pandas", "NumPy", "Power BI", "Matplotlib", "Data Cleaning & EDA", "Tableau", "Statistical Analysis"]
  },
  {
    category: "Core Computer Science",
    icon: Layers,
    color: "from-purple-500 to-cyan-500",
    description: "Foundational computer science principles & architectural rigor",
    items: ["Data Structures & Algorithms", "Object-Oriented Programming (OOP)", "DBMS", "Computer Networks", "Operating Systems", "Agile (Scrum)"]
  }
];

export const projects = [
  {
    id: "eduanalytics",
    title: "EduAnalytics: AI Student Marks Analyser",
    shortTitle: "EduAnalytics SaaS",
    subtitle: "AI-Powered Full-Stack Student Analytics Platform",
    period: "Jan - Apr 2026",
    description: "A production-grade SaaS analytics dashboard built with React and FastAPI that transforms raw student examination data into actionable academic insights, generating 100+ automated diagnostic reports with AI-powered feedback.",
    highlights: [
      "Built an AI-driven React & FastAPI dashboard capable of generating 100+ automated diagnostic student reports",
      "Leveraged Pandas & Recharts to process 1,000+ student records with real-time interactive performance visualizations",
      "Integrated automated strengths/weaknesses identification engine for faculty and mentors"
    ],
    tags: ["React", "FastAPI", "Python", "Pandas", "Recharts", "AI/ML"],
    github: "https://github.com/alexnikshith/student-exam-performance-analytics",
    demo: "https://student-exam-performance-analytics.vercel.app",
    category: "AI/ML & Data",
    featured: true,
    metrics: "1,000+ Records Analyzed • 100+ Reports Generated"
  },
  {
    id: "federated-social",
    title: "Federated Social Networking Platform",
    shortTitle: "Federated Identity Network",
    subtitle: "Decentralized Identities & Federated Learning",
    period: "Jan - Apr 2026",
    description: "A privacy-preserving decentralized social platform utilizing Go and React with the ActivityPub protocol, incorporating federated machine learning for on-device content moderation without compromising user data.",
    highlights: [
      "Engineered a federated social platform utilizing Go and React with ActivityPub protocol support",
      "Integrated decentralized identity verification and AI-driven client-side content moderation",
      "Optimized a multi-service Docker container ecosystem on AWS achieving 99.6% test pass rate across 260+ automated test cases"
    ],
    tags: ["Go", "React", "Docker", "AWS", "ActivityPub", "Machine Learning", "Privacy"],
    github: "https://github.com/alexnikshith/Federated-Decentralized-Social-Networking-Platform",
    demo: "https://nexiverse.vercel.app/",
    category: "Web & Systems",
    featured: true,
    metrics: "99.6% Pass Rate • 260+ Automated Tests"
  },
  {
    id: "smart-healthcare",
    title: "Smart Healthcare System with Cloud-Fog & Edge",
    shortTitle: "Cloud-Fog Healthcare IoT",
    subtitle: "Real-Time Telemetry & Low-Latency Patient Diagnostics",
    period: "Jul - Sep 2025",
    description: "An IoT-based healthcare telemetry system employing a 3-tier Cloud-Fog-Edge computing architecture that performs edge sensor ingestion and fog filtering to minimize emergency response latency by up to 60%.",
    highlights: [
      "Built an IoT-based healthcare telemetry system for real-time biometric tracking and rapid emergency alerts",
      "Engineered a 3-tier Cloud-Fog-Edge computing architecture that reduced end-to-end response latency by up to 60%",
      "Implemented MQTT lightweight protocol for resilient data streaming under low-bandwidth network constraints"
    ],
    tags: ["IoT", "Cloud Computing", "Fog Computing", "Python", "MQTT", "Edge AI"],
    github: "https://github.com/alexnikshith/A-cloud-fog-based-architecture-for-iot-applications-dedicated-to-healthcare",
    demo: "#",
    category: "Cloud & IoT",
    featured: true,
    metrics: "60% Latency Reduction • 3-Tier Architecture"
  },
  {
    id: "secure-exam",
    title: "Secure University Exam Portal",
    shortTitle: "Cyber-Secure Exam Portal",
    subtitle: "Cryptographic Integrity & Proctoring Platform",
    period: "Jan - Feb 2026",
    description: "A hardened digital examination web portal engineered with Flask featuring Role-Based Access Control (RBAC), military-grade AES-256 cryptographic encryption, and HMAC integrity hashes to safeguard confidential evaluation data.",
    highlights: [
      "Architected secure online examination workflow using Flask with strict Role-Based Access Control (RBAC)",
      "Implemented AES-256 encryption and HMAC-based integrity verification to protect sensitive assessment data against tampering",
      "Engineered automated audit logging and session token enforcement for tamper-proof test integrity"
    ],
    tags: ["Cybersecurity", "Flask", "Python", "AES-256", "HMAC", "RBAC", "React"],
    github: "https://github.com/alexnikshith/Secure-University-Exam-Portal--final",
    demo: "#",
    category: "Cybersecurity",
    featured: true,
    metrics: "AES-256 Encryption • HMAC Tamper-Proofing"
  },
  {
    id: "service-booking",
    title: "Book-Your-Service-Online Platform",
    shortTitle: "Service Booking Hub",
    subtitle: "Full-Stack On-Demand Services Marketplace",
    period: "2025",
    description: "A comprehensive on-demand service booking marketplace built with React, Node.js, and MongoDB, complete with real-time schedule management, dynamic pricing, and secure Stripe payment gateway integration.",
    highlights: [
      "Full-stack marketplace with customer and vendor dashboards",
      "Real-time appointment slotting and scheduling engine",
      "Stripe payment gateway integration with webhook transaction verification"
    ],
    tags: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    github: "https://github.com/alexnikshith/Book-Your-Service-Online-",
    demo: "https://book-your-service-online.onrender.com/",
    category: "Web & Systems",
    featured: false,
    metrics: "Real-Time Scheduling • Stripe Integrated"
  },
  {
    id: "financial-market",
    title: "Financial Market Trend & Risk Analysis (QuantEdge)",
    shortTitle: "QuantEdge Financial Analytics",
    subtitle: "Algorithmic Risk Profiling & Market Forecaster",
    period: "2025",
    description: "Quantitative analytics application developed in Streamlit and Python utilizing statistical models, volatility indexes, and historical market feeds to analyze equity risk metrics and forecast movement corridors.",
    highlights: [
      "Built interactive Streamlit financial dashboard for equity risk metrics",
      "Processed multi-year time-series market datasets with statistical indicators",
      "Formulated risk evaluation heuristics and interactive charts"
    ],
    tags: ["Python", "Streamlit", "Pandas", "Finance", "Time Series", "Data Science"],
    github: "https://github.com/alexnikshith/Financial-Market-Trend-Risk-Analysis",
    demo: "https://quantedgebusiness.streamlit.app/",
    category: "AI/ML & Data",
    featured: false,
    metrics: "Time Series Modeling • Interactive Streamlit"
  },
  {
    id: "urban-bazaar",
    title: "UrbanBazaar Mini E-Commerce Platform",
    shortTitle: "UrbanBazaar E-Commerce",
    subtitle: "Modern Reactive Shopping Experience",
    period: "2025",
    description: "A sleek, responsive digital storefront featuring dynamic product catalog filtering, client-side cart persistence, checkout flow simulations, and an Express.js product API.",
    highlights: [
      "Responsive UI with instant client-side cart and state synchronization",
      "Clean REST API backend powering product catalogs and order summaries",
      "Fluid micro-interactions and mobile-first design"
    ],
    tags: ["JavaScript", "Tailwind CSS", "Node.js", "Express", "REST API"],
    github: "https://github.com/alexnikshith/UrbanBazaar_mini_e_commerce",
    demo: "#",
    category: "Web & Systems",
    featured: false,
    metrics: "Full Cart State • Mobile-First Responsive"
  },
  {
    id: "smart-attendance",
    title: "Smart Biometric & Barcode Attendance System",
    shortTitle: "Smart Attendance System",
    subtitle: "Automated Presence Verification",
    period: "2025",
    description: "An automated attendance tracking platform built with Python that streamlines check-ins via optical barcode decoding and biometric matching with automated institutional report generation.",
    highlights: [
      "Automated optical barcode / biometric presence verification system",
      "Exportable institutional attendance summary sheets and automated emails",
      "Persistent database synchronization preventing duplicate entries"
    ],
    tags: ["AI", "Python", "Automation", "OpenCV", "MySQL"],
    github: "https://github.com/alexnikshith/smart_attendance_system",
    demo: "#",
    category: "AI/ML & Data",
    featured: false,
    metrics: "Automated Optical Recognition • Real-Time DB"
  }
];

export const experience = [
  {
    role: "Software Developer Intern",
    company: "Bluestock Fintech (Bluestock.in)",
    period: "Jul 2025 - Sep 2025",
    location: "Remote / Hybrid",
    type: "Internship",
    description: "Contributed to high-throughput financial software tools and algorithmic intelligence platforms.",
    achievements: [
      "Developed stock market analysis tools using Python, SQL, and Pandas to process 10,000+ financial records, significantly boosting analysis throughput.",
      "Implemented and evaluated machine learning models achieving 90%+ prediction accuracy for recommendation tasks and investment intelligence tools.",
      "Engineered automated data ingestion and preprocessing routines to clean high-volatility financial feeds.",
      "Collaborated in an Agile development environment to ship reliable internal developer solutions."
    ],
    technologies: ["Python", "SQL", "Pandas", "Scikit-learn", "Machine Learning", "Financial Analytics"],
    icon: Briefcase,
    certificate: "/certificates/bluestock_certificate.pdf"
  }
];

export const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Amrita Vishwa Vidyapeetham, Coimbatore",
    period: "2023 - 2027",
    description: "Focusing on Software Engineering, Machine Learning, Cloud Systems, and Blockchain. Active participant in technical symposiums and university coding initiatives.",
    score: "Currently Pursuing (3rd Year)",
    icon: BookOpen
  },
  {
    degree: "Intermediate Education (HSC - Class XII)",
    institution: "New Vision Junior College",
    period: "2021 - 2023",
    description: "Rigorous curriculum focused on Mathematics, Physics, and Chemistry.",
    score: "Secured 95.5% in Board Examinations",
    icon: BookOpen
  },
  {
    degree: "Secondary School Certificate (SSC - Class X)",
    institution: "Srividya Vidyalayam",
    period: "Completed",
    description: "Comprehensive foundational education with academic excellence.",
    score: "Achieved Perfect 10.0 CGPA",
    icon: BookOpen
  }
];

export const certifications = [
  {
    title: "Adobe Hackathon Recognition",
    issuer: "Adobe",
    date: "August 2025",
    description: "Recognized for innovative problem-solving and rapid software prototyping during Adobe Hackathon.",
    icon: Award,
    link: "/certificates/adobe_hackathon.pdf"
  },
  {
    title: "Machine Learning Training",
    issuer: "Internshala Trainings",
    date: "April 2025",
    description: "Comprehensive practical training covering Supervised Learning, Regression, Classification, Model Evaluation, and Scikit-learn.",
    icon: Cpu,
    link: "/certificates/Machine%20Learning%20Training%20-%20Certificate%20of%20Completion.pdf"
  },
  {
    title: "Microsoft Certified Data Analysis",
    issuer: "Coursera",
    date: "April 2026",
    description: "Specialized in data cleaning, exploratory data analysis, time-series analysis, statistical modeling, and dashboard creation.",
    icon: BarChart3,
    link: "/certificates/DA_Coursera.pdf"
  },
  {
    title: "National Service Scheme (NSS) Leadership Camp",
    issuer: "Amrita Vishwa Vidyapeetham / Ministry of Youth Affairs",
    date: "2024",
    description: "Certification of leadership and coordination for community welfare camps, blood donation drives, and public education campaigns.",
    icon: Shield,
    link: "/certificates/NSS_camp.pdf"
  }
];

export const extracurriculars = [
  {
    title: "NSS Coordinator",
    organization: "Amrita Vishwa Vidyapeetham",
    description: "Leading community service initiatives, organizing blood donation camps, rural literacy drives, and environmental sustainability campaigns.",
    icon: Shield,
    certificate: "/certificates/NSS_camp.pdf",
    badge: "Leadership"
  },
  {
    title: "Anokha Tech Fest Coordinator",
    organization: "Amrita Vishwa Vidyapeetham",
    description: "Coordinated competitive events, vendor partnerships, and logistics for one of South India's largest technical festivals.",
    icon: Cpu,
    badge: "Event Lead"
  },
  {
    title: "Music & Public Speaking",
    organization: "Inter-College Cultural Meets",
    description: "Multiple prize winner in vocal and instrumental music competitions; experienced speaker in university-level forums and seminars.",
    icon: Award,
    badge: "Arts & Speaking"
  },
  {
    title: "Inter-University Sports",
    organization: "Sports Department",
    description: "Active member in inter-university athletic competitions, fostering resilience, tactical decision-making, and high-performance team spirit.",
    icon: Activity,
    badge: "Athletics"
  }
];
