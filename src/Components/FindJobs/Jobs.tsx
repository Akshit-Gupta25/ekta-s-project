import Sort from "./Sort";
import JobCard from "./JobCard";
import { jobList } from "../Data/JobsData";


const Job=()=>{
    return <div className="p-5">
       
        <div className="flex justify-between">
            <div className="text-2xl font-semibold">Recommended Jobs</div>
            <Sort />
        </div>
        <div className="mt-10 w-full flex flex-wrap justify-center gap-x-6 gap-y-8">
        {
            jobList.map((Job,index)=> <JobCard key={index} {...Job} />)
        }
        </div>
        
        </div>

}
export default Job;