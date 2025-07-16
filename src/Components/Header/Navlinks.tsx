
import { url } from "inspector";
import { Link, useLocation } from "react-router-dom";

const Navlinks= () => {
    const links = [
        { name: "Find Jobs", url: "find-jobs" },
        { name: "Post Job", url: "post-job" },
        { name: "About Us", url: "about" },
        {name:"Posted Jobs" ,url:"posted-jobs"},
        {name:"SignUp",url:"signup"}

    ]
    const location = useLocation();
    return <div className="flex gap-5 text-bluegrey2 h-full items-center">
        { links.map((link, index)  =>
            <div
                key={index}
                className={`h-full flex items-center rounded transition-all duration-200 ${location.pathname === "/" + link.url ? "border-b-2 border-bluegrey1 text-white" : ""}`}
            >
                <Link
                    className="px-3 py-1 hover:bg-bluegrey1/10 hover:text-white rounded transition-all duration-200"
                    to={`/${link.url}`}
                >
                    {link.name}
                </Link>
            </div>
        )}
    </div>
    }
export default Navlinks;