// import { Avatar } from "@mantine/core";
// import { work } from "../Data/data";

// const Working = () => {
//     return (
//         <section className="mt-16 pb-8 px-2 md:px-0">
//             <div className="text-3xl md:text-4xl text-center font-extrabold mb-3 text-bluegrey2">
//                 How it <span className="text-bluegrey1">Works</span>
//             </div>
//             <div className="text-lg mb-10 mx-auto text-bluegrey2 text-center max-w-2xl">
//                 Effortlessly navigate through the process and land your dream job!
//             </div>
//             <div className="flex flex-col md:flex-row px-2 md:px-16 justify-between items-center gap-10 md:gap-0">
//                 {/* Left: Illustration & Profile */}
//                 <div className="flex flex-col items-center gap-4 w-full md:w-auto">
//                     <img className="w-72 md:w-[28rem] rounded-2xl shadow-xl border-4 border-bluegrey1" src="/girl.png" alt="Working illustration" />
//                     <div className="w-36 flex flex-col items-center gap-1 bg-blueblack3/80 border border-bluegrey1 rounded-lg p-3 shadow-md -mt-8">
//                         <Avatar className="!h-16 !w-16" src="avatar-7.png" alt="Profile" />
//                         <div className="text-sm font-semibold text-bluegrey1 text-center">Complete your profile</div>
//                         <div className="text-xs text-bluegrey2 text-center">70% Completed</div>
//                     </div>
//                 </div>
//                 {/* Right: Steps */}
//                 <div className="flex flex-col gap-7 w-full md:w-2/3">
//                     {work.map((item, index) => (
//                         <div key={index} className="flex items-center gap-5 bg-blueblack2 rounded-xl shadow-md p-4 hover:bg-bluegrey1/10 transition-all">
//                             <div className="flex-shrink-0 p-2.5 bg-bluegrey3/10 rounded-full border-2 border-bluegrey1 flex items-center justify-center w-16 h-16">
//                                 <img className="h-10 w-10 object-cover rounded-full" src={`/Working/${item.name}.png`} alt={item.name} />
//                             </div>
//                             <div>
//                                 <div className="text-xl text-bluegrey3 font-bold capitalize">{item.name}</div>
//                                 <div className="text-bluegrey2 text-sm">{item.desc}</div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Working;


import { Avatar } from "@mantine/core";
import { work } from "../Data/data";

const Working = () => {
    return (
        <section className="mt-16 pb-8 px-2 md:px-0">
            <div className="text-3xl md:text-4xl text-center font-extrabold mb-3 text-bluegrey2">
                How it <span className="text-bluegrey1">Works</span>
            </div>
            <div className="text-lg mb-10 mx-auto text-bluegrey2 text-center max-w-2xl">
                Effortlessly navigate through the process and land your dream job!
            </div>
            <div className="flex flex-col md:flex-row px-2 md:px-16 justify-between items-center gap-10 md:gap-0">
                {/* Left: Illustration & Profile */}
                <div className="flex flex-col items-center gap-4 w-full md:w-auto">
                    <img className="w-72 md:w-[28rem] rounded-2xl shadow-xl border-4 border-bluegrey1" src="/girl.png" alt="Working illustration" />
                    <div className="w-36 flex flex-col items-center gap-1 bg-blueblack3/80 border border-bluegrey1 rounded-lg p-3 shadow-md -mt-8">
                        <Avatar className="!h-16 !w-16" src="avatar-7.png" alt="Profile" />
                        <div className="text-sm font-semibold text-bluegrey1 text-center">Complete your profile</div>
                        <div className="text-xs text-bluegrey2 text-center">70% Completed</div>
                    </div>
                </div>
                {/* Right: Steps */}
                <div className="flex flex-col gap-7 w-full md:w-2/3">
                    {work.map((item, index) => (
                        <div key={index} className="flex items-center gap-5 bg-blueblack2 rounded-xl shadow-md p-4 hover:bg-bluegrey1/10 transition-all">
                            <div className="flex-shrink-0 p-2.5 bg-bluegrey3/10 rounded-full border-2 border-bluegrey1 flex items-center justify-center w-16 h-16">
                                <img className="h-10 w-10 object-cover rounded-full" src={`/Working/${item.name}.png`} alt={item.name} />
                            </div>
                            <div>
                                <div className="text-xl text-bluegrey3 font-bold capitalize">{item.name}</div>
                                <div className="text-bluegrey2 text-sm">{item.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Working;