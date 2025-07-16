
import Companies from "../Components/LandingPage/Companies";
import Dreamjob from "../Components/LandingPage/Dreamjob";

import Working from "../Components/LandingPage/Working";
import Subscribe from "../Components/LandingPage/Subscribe";



const HomePage = () => {
    return (
        <div className="min-h-[100vh] bg-mineshaft-950 font-['Poppins'] overflow-x-hidden">
        
        <Dreamjob />
        <Companies />
        <Working/>
        <Subscribe /> 
        </div>
    );
}

export default HomePage;