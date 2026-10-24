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
const profilePic = "https://github.com/alexnikshith.png?size=800";

export const personalInfo = {
  name: "Nikshith Gurram",
  title: "Software Engineer & AI/ML Developer",
  role: "Full-Stack Developer • Applied AI Enthusiast",
  bio: "Computer Science undergraduate at Amrita Vishwa Vidyapeetham with hands-on experience building AI-powered platforms, scalable full-stack applications, and cloud-fog architectures. Proficient in Python, React, Next.js, FastAPI, Docker, and Kubernetes, with a passion for building scalable, secure, and high-performance software solutions.",
  email: "nikshithgurram2006@gmail.com",
  phone: "+91 75697 78915",
  location: "Hyderabad, India",
  github: "https://github.com/alexnikshith",
  linkedin: "https://www.linkedin.com/in/nikshith-gurram-04027b1b7/",
  resumeUrl: "/resume_portfolio.pdf",
  profilePic: profilePic,
  status: "Open to Software Engineering & AI Roles",
  stats: [
    { label: "Production Platforms Deployed", value: "12+", icon: Sparkles },
    { label: "Financial Records Processed", value: "10K+", icon: BarChart3 },
    { label: "ML Model Prediction Accuracy", value: "90%+", icon: Activity },
    { label: "Docker Multi-Service Test Pass", value: "99.6%", icon: Shield }
  ]
};

export const skills = [
  {
    category: "Programming Languages",
    icon: Code2,
    color: "from-yellow-400 to-amber-500",
    description: "Core languages for systems, algorithmic problem solving & backend services",
    items: ["Python", "Go", "Java", "C", "TypeScript", "JavaScript", "Solidity", "SQL"]
  },
  {
    category: "AI & Machine Learning",
    icon: Cpu,
    color: "from-yellow-500 to-orange-500",
    description: "Predictive modeling, resume intelligence & intelligent automation",
    items: ["Scikit-learn", "Supervised Learning", "Regression & Classification", "Model Deployment", "Feature Engineering", "Time Series Analysis"]
  },
  {
    category: "Web & Frameworks",
    icon: Globe,
    color: "from-amber-400 to-yellow-500",
    description: "Modern reactive frontends, RESTful APIs & high-throughput backends",
    items: ["Next.js 14", "React.js", "FastAPI", "Node.js", "Express", "Flask", "Tailwind CSS", "RESTful APIs"]
  },
  {
    category: "DevOps & Cloud Systems",
    icon: Server,
    color: "from-zinc-800 to-black",
    description: "Containerization, cloud infrastructure & continuous integration",
    items: ["Docker", "Kubernetes", "AWS", "GitHub Actions", "CI/CD", "Linux", "VS Code"]
  },
  {
    category: "Data & Business Analytics",
    icon: BarChart3,
    color: "from-yellow-400 to-amber-600",
    description: "Exploratory data analysis, interactive reporting & business intelligence",
    items: ["Pandas", "NumPy", "Power BI", "Matplotlib", "Data Cleaning & EDA", "Tableau", "Statistical Analysis"]
  },
  {
    category: "Core Computer Science",
    icon: Layers,
    color: "from-black to-zinc-800",
    description: "Foundational computer science principles & architectural rigor",
    items: ["Data Structures & Algorithms", "Object-Oriented Programming (OOP)", "DBMS", "Computer Networks", "Operating Systems", "Agile (Scrum)"]
  }
];

export const projects = [
  {
    id: "talentscope",
    title: "TalentScope AI: Resume Intelligence Platform",
    shortTitle: "TalentScope AI SaaS",
    subtitle: "Next.js 14 & FastAPI Multi-Dimensional ATS Intelligence",
    period: "2025 - 2026",
    description: "A state-of-the-art AI-powered Resume Intelligence SaaS platform featuring automated ATS scoring, deep semantic job matching, bullet-point optimization, and dynamic learning roadmap generators for modern job seekers.",
    highlights: [
      "Built full-stack Next.js 14 & FastAPI SaaS platform delivering instant recruiter-level multi-dimensional resume feedback",
      "Engineered automated ATS scoring engine out of 100 with semantic job matching and interactive bullet-point optimizer",
      "Integrated candidate job tracking CRM, drag-and-drop resume parser supporting PDFs, and dynamic learning roadmaps"
    ],
    tags: ["Next.js 14", "FastAPI", "Python", "React", "TypeScript", "Tailwind CSS", "AI/ML"],
    github: "https://github.com/alexnikshith/HireSense",
    demo: "https://talentscopeai.vercel.app/",
    category: "AI/ML & Data",
    featured: true,
    metrics: "Next.js 14 + FastAPI • ATS Scoring & Semantic Matching"
  },
  {
    id: "finsage",
    title: "FinSage: AI-Powered Financial Intelligence",
    shortTitle: "FinSage Financial Platform",
    subtitle: "Full-Stack MERN Financial Advisory & Telemetry",
    period: "2025 - 2026",
    description: "A full-stack financial intelligence application built on the MERN stack with Redux Toolkit state management, interactive Recharts financial charts, and AI-driven portfolio insights.",
    highlights: [
      "Engineered full-stack financial intelligence platform using Node.js, Express, MongoDB, and React SPA",
      "Integrated interactive financial telemetry and portfolio analytics using Recharts & Redux Toolkit",
      "Incorporated AI financial advisory services, secure JWT authentication, and responsive modern dashboard"
    ],
    tags: ["React", "Node.js", "Express", "MongoDB", "Redux", "Recharts", "AI"],
    github: "https://github.com/alexnikshith/Finsage",
    demo: "https://finsage-gamma.vercel.app",
    category: "AI/ML & Data",
    featured: true,
    metrics: "Full-Stack MERN • Interactive Recharts & AI Advisory"
  },
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
    id: "campus-fetch",
    title: "CampusFetch: Student Resource Sharing",
    shortTitle: "CampusFetch Platform",
    subtitle: "Modern Campus Resource Exchange Platform",
    period: "2025",
    description: "A dynamic campus resource sharing web application built with TypeScript and Next.js, empowering students to search, list, and exchange study materials and campus essentials.",
    highlights: [
      "Built responsive student resource discovery platform in TypeScript & Next.js",
      "Integrated fast client-side indexing and category-based resource filtering",
      "Optimized for mobile campus accessibility with fluid responsive layouts"
    ],
    tags: ["TypeScript", "Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/alexnikshith/CampusFetch",
    demo: "https://campus-fetch.vercel.app",
    category: "Web & Systems",
    featured: false,
    metrics: "Next.js & TypeScript • Live Campus Deployment"
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
    id: "skylark",
    title: "Skylark: Reactive Web Platform",
    shortTitle: "Skylark Application",
    subtitle: "Modern Responsive Digital Experience",
    period: "2025",
    description: "A fast, responsive web application engineered with modern JavaScript and fluid UI components, featuring modular component architecture and high performance.",
    highlights: [
      "Designed clean interactive frontend architecture with responsive components",
      "Deployed on Vercel with automated build optimizations",
      "Zero-dependency micro-animations for high performance"
    ],
    tags: ["JavaScript", "React", "Tailwind CSS", "Vercel"],
    github: "https://github.com/alexnikshith/Skylark",
    demo: "https://skylark-sand-alpha.vercel.app",
    category: "Web & Systems",
    featured: false,
    metrics: "Vercel Deployed • Modern Component Architecture"
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
    title: "IoT & Embedded Systems",
    issuer: "University of California, Irvine (Coursera)",
    date: "October 2026",
    description: "Authorized by UC Irvine. Covers embedded microcontroller architectures, sensor and actuator interfacing, real-time operating concepts, and networked IoT device communication.",
    icon: Cpu,
    link: "/certificates/GO83_23620_OnlineCourse.pdf"
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
  }
];

export const extracurriculars = [
  {
    title: "NSS Coordinator",
    organization: "Amrita Vishwa Vidyapeetham",
    description: "Leading community service initiatives, organizing blood donation camps, rural literacy drives, and environmental sustainability campaigns.",
    icon: Shield,
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
