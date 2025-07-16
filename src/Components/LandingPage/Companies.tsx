// import Marquee from "react-fast-marquee";
// import { companies } from "../Data/data";

// const Companies = () => {
//     return (
//         <section className="mt-16 pb-8 px-2 md:px-0">
//             <div className="text-3xl md:text-4xl text-center font-extrabold mb-10 text-bluegrey2">
//                 Trusted by <span className="text-bluegrey1">1000+</span> Companies
//             </div>
//             <div className="bg-blueblack3/80 rounded-2xl shadow-lg py-6">
//                 <Marquee pauseOnHover={true} gradient={false} speed={40} className="">
//                     {companies.map((company, index) => (
//                         <div
//                             key={index}
//                             className="flex items-center justify-center mx-8 px-4 py-2 bg-blueblack2 hover:bg-bluegrey1/30 hover:scale-105 hover:shadow-xl transition-all duration-300 rounded-xl border border-bluegrey1"
//                         >
//                             <img className="h-14 w-auto object-contain rounded-lg bg-blueblack3" src={`/Companies/${company}.png`} alt={company} />
//                         </div>
//                     ))}
//                 </Marquee>
//             </div>
//         </section>
//     );
// };

// export default Companies;




import Marquee from "react-fast-marquee";
import { companies } from "../Data/data";

const Companies = () => {
    return (
        <section className="mt-16 pb-8 px-2 md:px-0">
            <div className="text-3xl md:text-4xl text-center font-extrabold mb-10 text-bluegrey2">
                Trusted by <span className="text-bluegrey1">1000+</span> Companies
            </div>
            <div className="bg-blueblack3/80 rounded-2xl shadow-lg py-6">
                <Marquee pauseOnHover={true} gradient={false} speed={40} className="">
                    {companies.map((company, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center mx-8 px-4 py-2 bg-blueblack2 hover:bg-bluegrey1/30 hover:scale-105 hover:shadow-xl transition-all duration-300 rounded-xl border border-bluegrey1"
                        >
                            <img className="h-14 w-auto object-contain rounded-lg bg-blueblack3" src={`/Companies/${company}.png`} alt={company} />
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default Companies;