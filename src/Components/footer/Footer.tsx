import { IconAnchor ,  IconBrandFacebookFilled, IconBrandInstagramFilled, IconBrandX} from "@tabler/icons-react";
import { FooterLinks } from "../Data/data";
import { useLocation } from "react-router-dom";

const Footer=()=>{
    const location=useLocation();
    return location.pathname!="/signup"&& location.pathname!="/login"? <div className="pt-20 pb-5 flex gap-5 justify-around  text-white font-['Poppins']">
        <div className="w-1/4 flex flex-col gap-4">
            <div className="flex gap-1 items-center text-cedar-800">
                        <IconAnchor className="h-7 w-7" stroke={2.5}/>
                        <div className ="text-xl font-semibold">JobSeek</div>
                     </div>
                     <div className="text-sm text-mine-shaft-700">Job portal with user profiles , skill updates , certifications , work experience and admin job postings</div>
                     <div className="flex gap-3 text-cedar-300 [&>div]:bg-mine-shaft-900 [&>div]:p-2.5 [&>div]:rounded-full [&>div]:hover:bg-cedar-400 [&>div]:hover:text-white">
                        <div><IconBrandFacebookFilled/></div>
                        <div><IconBrandInstagramFilled/></div>
                        <div><IconBrandX/></div>
        </div>
    </div>
    {
        FooterLinks.map((item,index)=><div key={index}>
            <div className="text-lg font-semibold text-cedar-800">{item.title}</div>
            {
                item.links.map((link,index)=><div key={index} className="text-sm text-mine-shaft-700 hover:text-cedar-700 cursor-pointer mb-1 hover:translate-x-2 transition duration-300">{link}</div>)
            }


            </div>)
            
    }
</div>:<></>
}
export default Footer;