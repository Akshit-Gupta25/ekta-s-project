const companies = ["google", "microsoft", "amazon",  "netflix", "pinterest" , "spotify"];

const jobTypes = ["Full Time", "Part Time", "Internship", "Contract", "Temporary"];

const jobCategory =["Digital Marketing" , "finance" ,"content creation" ,"it"];
const jobTitles = ["Software Engineer", "Data Scientist", "Product Manager", "UX Designer", "DevOps Engineer"];

 const work = [
    {
        "name": "build your resume",
        "desc": "Create a professional resume that stands out to employers."
        
    },
    {
        "name":"apply for job",
        "desc": "Search and apply for jobs that match your skills and interests."
    },
    {
        "name": "Get Hired",
        "desc": "Connect with employers and land your dream job."
    }
]


const FooterLinks=[
    {title: "Product", links: ["Find Job" , "Find Company" , "FInd Employee"]},
    {title: "Company", links: ["About Us" , "Contact Us" , "Privacy Policy" , "Terms & Conditions"]},
    {title: "Support", links: ["Help & Support" , "Feedback" , "FAQs"]},
]

export {FooterLinks , companies , jobTypes , jobTitles  , jobCategory , work};