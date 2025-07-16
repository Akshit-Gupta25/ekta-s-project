import { IconUser } from "@tabler/icons-react";
import SignUp from "../Components/SignUpLogin/SignUp";
import Login from "../Components/SignUpLogin/Login";
import { useLocation } from "react-router-dom";
import {IconAnchor} from "@tabler/icons-react";

const SignUpPage = () => {
  const location=useLocation()
  return <div className="min-h-[90vh]  font-['poppins'] bg-white overflow-hidden">
    <div className={`w-[100vw] h-[100vh]transition-all ease-in-out duration-1000 flex [&>*]:flex-shrink-0 ${location.pathname=='/signup'?'-translate-x-1/2':'translate-x-0'}`}>
    <Login/>
      <div className={`w-1/2 h-full transition-all duration-1000 ease-in-out ${location.pathname=="/signup"?"rounded-r-[200px]":"rounded-l-[200px]"} bg-white flex items-center gap-5 justify-center flex-col`}>
      <div className="flex gap-1 items-center text-cedar-400">
        <IconAnchor className="h-16 w-16" stroke={2.5}/>
        <div className="text-6xl  font-semibold">JobSeek</div>
        </div>
        
        </div>

      </div>
      <SignUp/>
    </div>
}

export default SignUpPage;