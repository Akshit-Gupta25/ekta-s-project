import { Divider, Text } from "@mantine/core";
import { IconBookmark, IconClockHour3 } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const JobCard = (props: any) => {
  return (
    <Link
      to="/jobs"
      className="relative bg-blueblack2/90 border border-white/10 shadow-2xl rounded-2xl w-80 p-6 flex flex-col gap-3 transition-all duration-200 text-bluegrey2 hover:shadow-3xl hover:scale-105 hover:border-bluegrey1/40 overflow-hidden"
    >
      {/* Radial Gradient Overlay */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl z-0"
        style={{
          background: "radial-gradient(circle at 20% 10%, rgba(0,123,255,0.18) 0%, rgba(0,0,0,0) 70%)"
        }}
      />
      {/* Top: Logo and Title */}
      <div className="flex justify-between items-center z-10 relative">
        <div className="flex gap-3 items-center">
          <div className="p-2 bg-bluegrey3/30 rounded-lg">
            <img
              src={`/job/${props.company}.png`}
              alt={`${props.company} logo`}
              className="w-12 h-12 object-contain"
            />
                </div>
                <div className="flex flex-col w-full">
            <div className="font-bold text-lg text-white w-fit">{props.jobTitle}</div>
            <div className="text-xs text-bluegrey2">
              {props.company} &#x2022; {props.applicants} Applicant
            </div>
          </div>
        </div>
        <IconBookmark className="text-bluegrey1 cursor-pointer hover:text-white transition-colors" />
      </div>

      {/* Pills */}
      <div className="flex flex-wrap gap-2 items-center mb-2 z-10 relative">
        <div className="bg-bluegrey3/80 text-blueblack2 font-semibold rounded-md border border-bluegrey1/30 text-xs px-3 py-1">
          {props.experience}
        </div>
        <div className="bg-bluegrey3/80 text-blueblack2 font-semibold rounded-md border border-bluegrey1/30 text-xs px-3 py-1">
          {props.jobType}
        </div>
        <div className="bg-bluegrey3/80 text-blueblack2 font-semibold rounded-md border border-bluegrey1/30 text-xs px-3 py-1">
          {props.location}
        </div>
      </div>

      {/* Description */}
      <Text className="!text-sm text-justify !text-bluegrey2 z-10 relative" lineClamp={2}>
        {props.description}
      </Text>

      <Divider size="xs" color="bluegrey1" className="z-10 relative" />

      {/* Bottom: Salary and Time */}
      <div className="flex justify-between items-center z-10 relative">
        <div className="font-bold text-bluegrey1 text-base">
            &#8377; {props.salary} 
        </div>
        <div className="flex gap-1 text-xs text-bluegrey2 items-center">
          <IconClockHour3 className="h-5 w-5" stroke={1.5} /> {props.postedDaysAgo} days ago
        </div>
      </div>
    </Link>
  );
};
    
export default JobCard;
