import {
  mobile,
  backend,
  creator,
  web,
  carrent,
  jobit,
  tripguide,
  fakejob,
  hate,
  luggage,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "AI/ML Engineer", icon: backend },
  { title: "Full Stack Developer", icon: web },
  { title: "Data Analyst", icon: creator },
  { title: "Cloud Practitioner", icon: mobile },
];

const technologies = [
  { name: "Python", icon: "🐍" },
  { name: "Java", icon: "☕" },
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎨" },
  { name: "TensorFlow", icon: "🔶" },
  { name: "PyTorch", icon: "🔥" },
  { name: "Scikit-learn", icon: "📊" },
  { name: "SQL", icon: "🗄️" },
  { name: "Azure", icon: "☁️" },
  { name: "AWS", icon: "☁️" },
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
    name: "Simulation-Driven Autonomous Vehicle Navigation",
    description:
      "Used CNN-LSTM model to control self-driving car in simulated environment (CARLA), achieving 94.5% accuracy in lane-keeping.",
    tags: [
      { name: "TensorFlow", color: "blue-text-gradient" },
      { name: "PyTorch", color: "green-text-gradient" },
      { name: "CNN-LSTM", color: "pink-text-gradient" },
    ],
    image: project3,
    source_code_link: "https://github.com/tarun2809", // replace with actual link if hosted
  },
  {
    name: "Hate Speech Detection System",
    description:
      "Classified hate and violent speech using NLP and ML (LSTM, SVM, XGBoost) with 92% recall. Reduced false positives by 20%.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "NLP", color: "green-text-gradient" },
      { name: "LSTM", color: "pink-text-gradient" },
    ],
    image: hate,
    source_code_link: "https://github.com/tarun2809", // replace with actual link
  },
  {
    name: "Fake Job Post Detection",
    description:
      "Used NLP with TF-IDF and Gradio interface to build ML model with 97.6% accuracy. Used SMOTE for balancing dataset.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Gradio", color: "green-text-gradient" },
      { name: "Logistic Regression", color: "pink-text-gradient" },
    ],
    image: fakejob,
    source_code_link: "https://github.com/tarun2809", // replace with actual link
  },
  {
    name: "RF-Powered Luggage Geo-Tagging",
    description:
      "Used Arduino Uno and RF modules to design a real-time tracking + safety alert system with gas & water sensors.",
    tags: [
      { name: "Arduino", color: "blue-text-gradient" },
      { name: "IoT", color: "green-text-gradient" },
      { name: "ESP-01", color: "pink-text-gradient" },
    ],
    image: luggage,
    source_code_link: "https://github.com/tarun2809", // replace with actual link
  },
];

export { services, technologies, experiences, projects };
