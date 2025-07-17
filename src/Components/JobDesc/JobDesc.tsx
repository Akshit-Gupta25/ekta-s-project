import { IconBookmark } from "@tabler/icons-react";
import { ActionIcon, Button, Divider, Text } from "@mantine/core";
import { Link } from "react-router-dom";

interface Job {
  jobTitle: string;
  company: string;
  location: string;
  jobType: string;
  salary: string;
  postedDaysAgo: number;
  description: string;
  applicants: number;
  experience: string;
}

const JobDesc = ({ job }: { job: Job }) => {
  return (
    <div className="w-full max-w-3xl mx-auto bg-blueblack2/80 backdrop-blur-lg border border-bluegrey1/30 shadow-2xl rounded-2xl px-10 py-8 space-y-8 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-start">
        {/* Left Section */}
        <div className="flex gap-5 items-center">
          <div className="p-3 bg-bluegrey1/20 backdrop-blur-md rounded-xl shadow-lg flex items-center justify-center">
            <img src={`/job/${job.company}.png`} alt={job.company} className="w-14 h-14 object-contain rounded-lg" />
          </div>
          <div>
            <h1 className="font-bold text-3xl text-white tracking-tight">{job.jobTitle}</h1>
            <p className="text-bluegrey2 text-sm mt-1 font-medium">
              {job.company} &bull; <span className="text-blue-400">{job.postedDaysAgo} days ago</span> &bull; <span className="text-bluegrey1">{job.applicants} Applicants</span>
            </p>
          </div>
        </div>
        {/* Right Section */}
        <div className="flex flex-col items-center gap-3">
          <Link to="/apply-job">
            <Button size="md" radius="lg" className="font-semibold bg-gradient-to-r from-bluegrey1 via-blue-400 to-blueblack1 text-white shadow-md hover:scale-105 transition-transform duration-150">
              Apply
            </Button>
          </Link>
          <ActionIcon size="lg" className="bg-bluegrey1/20 hover:bg-blue-400/30 transition-colors duration-150 shadow-md rounded-full">
            <IconBookmark className="text-blue-400" size={28} />
          </ActionIcon>
        </div>
      </div>
      {/* Pills Section */}
      <div className="flex flex-wrap gap-3 items-center z-10 relative">
        <div className="bg-bluegrey3/80 text-blueblack2 font-semibold rounded-md border border-bluegrey1/30 text-xs px-3 py-1">
          {job.experience}
        </div>
        <div className="bg-bluegrey3/80 text-blueblack2 font-semibold rounded-md border border-bluegrey1/30 text-xs px-3 py-1">
          {job.jobType}
        </div>
        <div className="bg-bluegrey3/80 text-blueblack2 font-semibold rounded-md border border-bluegrey1/30 text-xs px-3 py-1">
          {job.location}
        </div>
      </div>
      {/* Description */}
      <div>
        <Divider size="xs" color="bluegrey1" className="z-10 relative mb-4" />
        <Text className="!text-base text-justify !text-bluegrey2 z-10 relative" >
          {job.description}
        </Text>
      </div>
      {/* Bottom: Salary and Time */}
      <div className="flex justify-between items-center z-10 relative">
        <div className="font-bold text-bluegrey1 text-xl">
          &#8377; {job.salary}
        </div>
        <div className="flex gap-1 text-sm text-bluegrey2 items-center">
          {job.postedDaysAgo} days ago
        </div>
      </div>
    </div>
  )
}

export default JobDesc;
