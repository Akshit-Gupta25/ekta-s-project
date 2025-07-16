import { IconBriefcase, IconMapPin, IconRecharging, IconSearch } from "@tabler/icons-react";
import { Certificate } from "crypto";

const searchFields = [
  {
    title: "Job Title",
    icon: IconSearch,
    options: [
      "Designer",
      "Developer",
      "Product Manager",
      "Marketing Specialist",
      "Data Analyst",
      "Sales Executive",
      "Content Writer",
      "Customer Support"
    ]
  },
  {
    title: "Location",
    icon: IconMapPin,
    options: [
      "Delhi",
      "New York",
      "San Francisco",
      "London",
      "Berlin",
      "Tokyo",
      "Sydney",
      "Toronto"
    ]
  },
  {
    title: "Skills",
    icon: IconRecharging,
    options: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Angular",
      "Node.js",
      "Python",
      "Java",
      "Ruby",
      "PHP",
      "SQL",
      "MongoDB",
      "PostgreSQL",
      "Git",
      "API Development",
      "Testing and Debugging",
      "Agile Methodologies",
      "DevOps",
      "AWS",
      "Azure",
      "Google Cloud"
    ]
  }
];

const talents = [
  {
    name: "Ekta Tyagi",
    role: "Software Engineer",
    company: "Google",
    topSkills:["React" , "SpringBoot","MongoDB"],
    about:"As a software Enginner at Google , I specialize in building scalable and high-performance applications . My expertise lies in integrating front-end and back-end technologies to deliver seamless user experiences.With a strong foundation in React and SpringBoot, and a focus on MongoDB for database solutions, I am passionate about leveraging the latest technologies to solve complex problems and drive innovation. My goal is to create impactful software that enhances productivity and meets user needs effectively",
    expectedCtc:"50-65 LPA",
    location:"Delhi , India",
    image:"avatar-7.png"
  },
  {
  name: "Jos Buttler",
  role: "Full Stack Developer",
  company: "Microsoft",
  topSkills: ["Angular", "Node.js", "PostgreSQL"],
  about:
    "Working as a Full Stack Developer at Microsoft, I focus on delivering enterprise-grade solutions using Angular and Node.js. I excel in writing scalable REST APIs, optimizing frontend performance, and managing relational databases with PostgreSQL. My work emphasizes clean code, security, and user-focused design to drive business outcomes.",
  expectedCtc: "45-55 LPA",
  location: "Bangalore, India",
  image: "avatar-8.png"
},
{
  name: "Sneha Kapoor",
  role: "Backend Engineer",
  company: "Amazon",
  topSkills: ["Java", "Spring", "MySQL"],
  about:
    "At Amazon, I engineer robust backend systems with a focus on performance, security, and scalability. With deep expertise in Java and Spring Framework, I work on microservices architecture and ensure seamless integration with data-driven components using MySQL. I’m driven by the challenge of optimizing systems and improving backend infrastructure.",
  expectedCtc: "40-50 LPA",
  location: "Hyderabad, India",
  image: "avatar-9.png"
}



];
const profile={
    name:"ekta tyagi",
    role:"Software Engineer",
    company:"Google",
    location:"Delhi , India",
    about:"As a software Enginner at Google , I specialize in building scalable and high-performance applications . My expertise lies in integrating front-end and back-end technologies to deliver seamless user experiences.With a strong foundation in React and SpringBoot, and a focus on MongoDB for database solutions, I am passionate about leveraging the latest technologies to solve complex problems and drive innovation. My goal is to create impactful software that enhances productivity and meets user needs effectively",
    skills:["React","SpringBoot","MongoDb" , "HTML","CSS","Python","MySQL"],
    experience:[
        {
            title: "Software Engineer III",
            company:"Google",
            location:"New York ,United States",
            startDate :"Apr 2022",
            endDate: "Present",
            description :"As a software Engineer at Google , I am responsible for designing , developing and maintaining scalable software solutions that enhance user experience . My role involves collaborating with cross-functional teams to define project requirements , develop technical specifications and implement robust applications."

        }
    ],
    certifications:[
        {
        name :"Google Professional Cloud Architect",
        issuer : "Google",
        issueDate:"Aug 2023",
        certificateId: "CB72982GG"
        }
    ]
}
export {searchFields , talents , profile};
