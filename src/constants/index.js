import {
  mobile,
  backend,
  creator,
  web,
  project2,
  project3,
  gearXpert,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI/ML Engineer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Data Analyst",
    icon: creator,
  },
  {
    title: "Cloud Practitioner",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "Python",
    icon: "🐍",
  },
  {
    name: "Java",
    icon: "☕",
  },
  {
    name: "HTML",
    icon: "🌐",
  },
  {
    name: "CSS",
    icon: "🎨",
  },
  {
    name: "TensorFlow",
    icon: "🔶",
  },
  {
    name: "PyTorch",
    icon: "🔥",
  },
  {
    name: "Scikit-learn",
    icon: "📊",
  },
  {
    name: "SQL",
    icon: "🗄️",
  },
  {
    name: "Azure",
    icon: "☁️",
  },
  {
    name: "AWS",
    icon: "☁️",
  },
];

const experiences = [
  {
    title: "Project Intern",
    company_name: "IBM SkillsBuild",
    icon: backend,
    iconBg: "#000000",
    date: "July 2024 - August 2024",
    points: [
      "Built and deployed an AI-powered chatbot using IBM Watson Assistant.",
      "Applied sentiment analysis and text mining to enhance user understanding.",
      "Improved support response time by 40% using real-time NLP workflows.",
    ],
  },
];

const projects = [
  {
    name: "Autonomous Vehicle Navigation (CARLA)",
    description:
      "Built a CNN-LSTM model for autonomous lane navigation in CARLA simulator with 94.5% accuracy.",
    tags: [
      {
        name: "TensorFlow",
        color: "blue-text-gradient",
      },
      {
        name: "CNN-LSTM",
        color: "green-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/tarun2809",
  },
  {
    name: "Hate Speech Detection System",
    description:
      "Text classification using NLP and ML (SVM, XGBoost, LSTM) with 92% recall rate to reduce hate/violent content.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "LSTM",
        color: "green-text-gradient",
      },
      {
        name: "NLP",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/tarun2809",
  },
  {
    name: "Fake Job Post Detection",
    description:
      "Built ML model with Gradio UI to detect fake job posts with 97.6% accuracy using TF-IDF, SMOTE, and logistic regression.",
    tags: [
      {
        name: "Gradio",
        color: "blue-text-gradient",
      },
      {
        name: "TF-IDF",
        color: "green-text-gradient",
      },
      {
        name: "Logistic Regression",
        color: "pink-text-gradient",
      },
    ],
    image: gearXpert,
    source_code_link: "https://github.com/tarun2809",
  },
  {
    name: "RF Luggage Tracking System",
    description:
      "IoT-based real-time luggage tracker with gas, fire, water sensors and alerts using Arduino, ESP-01 and RF modules.",
    tags: [
      {
        name: "IoT",
        color: "blue-text-gradient",
      },
      {
        name: "Arduino",
        color: "green-text-gradient",
      },
      {
        name: "ESP-01",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/tarun2809",
  },
];

export { services, technologies, experiences, projects };
