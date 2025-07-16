import { IconBriefcase, IconMapPin , IconRecharging , IconSearch } from "@tabler/icons-react";
import { jobTitles } from "./data";
import exp from "constants";


const dropdownData = [
    {title :"Job Title" , icon: IconSearch, options:['Designer' , 'Developer' , 'Product Manager',
    'Data Scientist', 'Marketing Specialist', 'Sales Executive', 'Customer Support']},
    {title :"Location" , icon: IconMapPin, options:['New York','Delhi', 'Gurgaon' , 'Noida' , 'Bangalore', 'San Francisco', 'Los Angeles',
    'Chicago', 'Austin', 'Seattle', 'Boston', 'Miami']},
    {title :"Job Type" , icon: IconBriefcase, options:['Entry-level',  'Internship', 'Freelance']},
    {title :"Job Type" , icon: IconRecharging, options:['Full Time', 'Part-time', 'Contract', 'Temporary', 'Remote', 'On-site']},
    
    ];

    const jobList=[
        {
            jobTitle: "Designer",
            company: "microsoft",
            location: "San Francisco, CA",
            jobType: "Full Time",
            salary: "32 LPA",
            postedDaysAgo:12,
            description: "We are looking for a skilled Software Engineer to join our team.",
            applicants: 25,
            experience: "Entry Level"
            
        }
        ,
        {
            jobTitle: "Data Analyst",
            company: "amazon",
            location: "New York, NY",
            jobType: "Part-time",
            salary: "20 LPA",
            postedDaysAgo:5,
            description: "Join our team as a Data Analyst to help us make data-driven decisions.",
            applicants: 15,
            experience: "Intermediate"
        },
        {
            jobTitle: "Product Manager",
            company: "spotify",
            location: "Austin, TX",
            jobType: "Contract",
            salary: "20LPA",
            postedDaysAgo: 2,
            description: "Seeking a Product Manager to lead product development and strategy.",
            applicants: 30,
            experience: "Entry Level"
            
        },
        {
            jobTitle: "Sales Executive",
            company: "google",
            location: "Gurugram",
            jobType: "Freelance",
            salary: "7 LPA",
            postedDaysAgo: 3,
            description: "Looking for a UX Designer to create user-friendly interfaces.",
            applicants: 20,
            experience: "Intermediate"
            
        },
        {
            jobTitle: "Marketing Specialist",
            company: "walmart",
            location: "Chicago, IL",
            jobType: "Full Time",
            salary: "14 LPA",
            postedDaysAgo: 1,
            description: "Join our marketing team as a Marketing Specialist.",
            applicants: 10,
            experience: "Internship"
        },
        {
            jobTitle: "Customer Support Representative",
            company: "netflix",
            location: "Gurgaon",
            jobType: "Remote",
            salary: "20 LPA",
            postedDaysAgo:5,
            description: "We are hiring a Customer Support Representative to assist our clients.",
            applicants: 5,
            experience: "senior"
        },
        {
            jobTitle: "Software Engineer",
            company: "nestle",
            location: "Bangalore",
            jobType: "On-site",
            salary: "25 LPA",
            postedDaysAgo: 10,
            description: "Join our team as a Software Engineer to develop innovative solutions.",
            applicants: 40,
            experience: "Entry Level"
        },
        {
            jobTitle: "Marketing Specialist",
            company: "flipkart",
            location: "Delhi",
            jobType: "Full Time",
            salary: "30 LPA",
            postedDaysAgo: 7,
            description: "We are looking for a Marketing specialist to analyze and interpret complex data.",
            applicants: 35,
            experience: "Intermediate"
        }
        
       
    ];

    export { dropdownData, jobList };