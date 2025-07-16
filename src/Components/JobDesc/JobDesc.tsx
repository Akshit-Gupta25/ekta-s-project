import { IconBookmark } from "@tabler/icons-react";
import { ActionIcon, Button } from "@mantine/core";
import { Link } from "react-router-dom";
import { card } from "../Data/JobDescData";

const JobDesc = () => {
  return (
    <div className="w-2/3 text-white space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        {/* Left Section */}
        <div className="flex gap-4 items-center">
          <div className="p-3 bg-mine-shaft-800 rounded-xl">
            <img src={`/job/google.png`} alt="Google" className="w-12 h-14 object-contain" />
          </div>

          <div>
            <h1 className="font-semibold text-2xl">Software Engineer III</h1>
            <p className="text-mine-shaft-300 text-sm">
              Google &bull; 3 days ago &bull; 48 Applicants
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center gap-2">
          <Link to="/apply-job">
            <Button color="cedar.4" size="sm" variant="filled" radius="md" className="font-semibold">
              Apply
            </Button>
          </Link>
          <IconBookmark className="text-amber-300 cursor-pointer" />
        </div>
      </div>

      {/* Card Info Section */}
      {card.map((item, index) => (
      <div key={index} className="flex">
          <ActionIcon  className="flex flex-col items-center gap-2 w-1/4">
              <item.icon className="h-5 w-5" stroke={1.5} />
              </ActionIcon>
            
            <div className="text-sm text-mine-shaft-300">{item.name}</div>
            <div className="font-semibold">{item.value}</div>
          </div>
    
  ))
}
</div>
  )
}

export default JobDesc ;
