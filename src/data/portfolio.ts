export const portfolioData = {
  personal: {
    name: "Lakshmi Inchara M",
    role: "Trainee Decision Scientist",
    company: "Mu Sigma",
    location: "Bengaluru, India",
    email: "lakshmiincharam@gmail.com",
    linkedin: "https://www.linkedin.com/in/lakshmiinchara/",
    github: "https://github.com/incharareddy",
    resumeUrl: "https://drive.google.com/file/d/1Zv5w1jscfkpEwFy22vq4MHfke4aHcN2g/view?usp=sharing",
    photoUrl: "/profile.jpg", // Image should be placed in public/profile.jpg
    heroStatement: "I build intelligent, data-driven solutions at the intersection of decision science, AI, and software engineering.",
    about: "With a strong foundation in Computer Science and an intrinsic curiosity for problem-solving, I bridge the gap between complex data and practical software. Currently working as a Decision Scientist, I bring an analytical approach to building intelligent systems, blending machine learning with robust software engineering practices to deliver meaningful, real-world impact."
  },
  experience: [
    {
      id: "mu-sigma",
      role: "Trainee Decision Scientist",
      company: "Mu Sigma",
      location: "Bengaluru, India",
      period: "August 2026 — Present",
      description: "Applying analytical problem-solving and decision science methodologies to complex data challenges. Leveraging data-driven decision making and structured problem solving to build robust solutions."
    },
    {
      id: "mindmatrix",
      role: "Android Application Development Intern (Gen AI)",
      company: "MindMatrix.io",
      location: "Remote",
      period: "February 2026 — May 2026",
      description: "Completed a structured training program including foundational bridge coursework and hands-on Android development workshops using Gen AI tools. Developed applications encompassing feature implementation, testing, and documentation as part of guided learning modules. Collaborated with peers and mentors to deliver an assigned project within a structured development environment."
    }
  ],
  projects: [
    {
      id: "diabetic-retinopathy",
      title: "Automated Disease Severity Grading from Diabetic Retinopathy Classification",
      category: "Computer Vision & Applied AI",
      technologies: ["Python", "PyTorch", "Deep Learning", "Computer Vision", "CNN", "React", "Flask"],
      description: "Developed an AI-powered diabetic retinopathy detection system using retinal image classification. Built a deep learning model based on Convolutional Neural Network techniques to predict severity levels with confidence scoring. Designed a web application for image upload, inference, and real-time prediction display.",
      motif: "ai-vision"
    },
    {
      id: "workflow-engine",
      title: "Intelligent Workflow Automation Engine",
      category: "Backend Systems",
      technologies: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "APScheduler"],
      description: "Built a workflow automation backend supporting scheduled and webhook-triggered execution with modular action processing. Designed workflow lifecycle management APIs, retry mechanisms, execution logging, and monitoring endpoints using a scalable service-layer architecture.",
      motif: "backend-architecture"
    },
    {
      id: "arogya-sahaya",
      title: "ArogyaSahayaLocal",
      category: "Mobile Intelligence",
      technologies: ["Kotlin", "MVVM", "Room Database", "WorkManager", "Gemini API"],
      description: "Developed an offline-first healthcare management Android application for medication tracking, vitals monitoring, and AI-assisted health support. Built intelligent workflows for medication reminders, prescription interpretation, and personal health record management using a scalable MVVM architecture.",
      motif: "mobile-health"
    }
  ],
  skills: [
    {
      category: "Languages & Core",
      items: ["Python", "SQL", "Bash", "C", "Object-Oriented Programming", "PostgreSQL", "Computer Networks", "Machine Learning"]
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "GitHub", "Linux", "VS Code", "Android Studio"]
    },
    {
      category: "Project Technologies",
      items: ["PyTorch", "FastAPI", "SQLAlchemy", "APScheduler", "React", "Flask", "Kotlin", "MVVM", "Room", "WorkManager", "Gemini API"]
    }
  ],
  education: {
    institution: "Gopalan College of Engineering and Management",
    degree: "Bachelor of Engineering in Computer Science Engineering",
    location: "Bengaluru, Karnataka",
    period: "2022 — 2026",
    cgpa: "8.45"
  },
  certifications: [
    "Google Cybersecurity Professional Certificate",
    "Infosys Springboard MOOC Certifications"
  ],
  languages: ["English", "Kannada", "Telugu"]
};
