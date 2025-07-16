// import { TextInput } from '@mantine/core';
// import { IconSearch } from '@tabler/icons-react';
// import { Avatar } from '@mantine/core';

// const Dreamjob = () => {
//     return (
//         <section className="flex flex-col md:flex-row items-center px-4 md:px-20 py-12 bg-blueblack2 rounded-xl shadow-lg mt-8 mb-12 gap-8 md:gap-0">
//             {/* Left: Text */}
//             <div className="flex flex-col gap-4 w-full md:w-[45%]">
//                 <h1 className="text-4xl md:text-6xl font-bold text-bluegrey3 leading-tight">
//                     Find your <span className="text-bluegrey1">dream</span> <span className="text-bluegrey2">job</span> with us
//                 </h1>
//                 <p className="text-lg text-bluegrey2">
//                     Good life begins with a good company. Start exploring thousands of jobs in one place.
//                 </p>
//                 <p className="text-base text-bluegrey3/80 mt-2">
//                     <b>About Us:</b> We are dedicated to connecting talented individuals with top companies, making job searching easy, efficient, and inspiring. Join our growing community and take the next step in your career journey!
//                 </p>
//                 <div className="flex flex-col sm:flex-row gap-3 mt-4">
//                     <TextInput className="bg-blueblack3 rounded-lg px-2 text-bluegrey3 flex-1" variant="unstyled" label="Job Title" placeholder="Software Engineer" />
//                     <TextInput className="bg-blueblack3 rounded-lg px-2 text-bluegrey3 flex-1" variant="unstyled" label="Job Type" placeholder="Full Time" />
//                     <button className="flex items-center justify-center bg-bluegrey1 hover:bg-bluegrey2 transition-colors rounded-lg p-3 text-blueblack1 font-semibold shadow-md mt-2 sm:mt-0">
//                         <IconSearch className="h-5 w-5" />
//                     </button>
//                 </div>
//             </div>
//             {/* Right: Image & Avatars */}
//             <div className="w-full md:w-[55%] flex items-center justify-center mt-8 md:mt-0">
//                 <div className="w-full max-w-md relative">
//                     <img src="/boy.png" alt="boy" className="rounded-2xl shadow-xl border-4 border-bluegrey1" />
//                     <div className="absolute left-1/2 -translate-x-1/2 bottom-4 bg-blueblack3/80 border border-bluegrey1 rounded-lg p-3 backdrop-blur-md shadow-lg flex flex-col items-center min-w-[220px]">
//                         <div className="text-center mb-1 text-sm text-bluegrey2">10k+ got job</div>
//                         <Avatar.Group>
//                             <Avatar src="avatar-7.png" />
//                             <Avatar src="avatar-8.png" />
//                             <Avatar src="avatar-9.png" />
//                             <Avatar>+9k</Avatar>
//                         </Avatar.Group>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };
// export default Dreamjob;






import { TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { Avatar } from '@mantine/core';

const Dreamjob = () => {
    return (
        <section className="flex flex-col md:flex-row items-center px-4 md:px-20 py-12 bg-blueblack2 rounded-xl shadow-lg mt-8 mb-12 gap-8 md:gap-0">
            {/* Left: Text */}
            <div className="flex flex-col gap-4 w-full md:w-[45%]">
                <h1 className="text-4xl md:text-6xl font-bold text-bluegrey3 leading-tight">
                    Find your <span className="text-bluegrey1">dream</span> <span className="text-bluegrey2">job</span> with us
                </h1>
                <p className="text-lg text-bluegrey2">
                    Good life begins with a good company. Start exploring thousands of jobs in one place.
                </p>
                <p className="text-base text-bluegrey3/80 mt-2">
                    <b>About Us:</b> We are dedicated to connecting talented individuals with top companies, making job searching easy, efficient, and inspiring. Join our growing community and take the next step in your career journey!
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mt-4">
                    <TextInput className="bg-blueblack3 rounded-lg px-2 text-bluegrey3 flex-1" variant="unstyled" label="Job Title" placeholder="Software Engineer" />
                    <TextInput className="bg-blueblack3 rounded-lg px-2 text-bluegrey3 flex-1" variant="unstyled" label="Job Type" placeholder="Full Time" />
                    <button className="flex items-center justify-center bg-bluegrey1 hover:bg-bluegrey2 transition-colors rounded-lg p-3 text-blueblack1 font-semibold shadow-md mt-2 sm:mt-0">
                        <IconSearch className="h-5 w-5" />
                    </button>
                </div>
            </div>
            {/* Right: Image & Avatars */}
            <div className="w-full md:w-[55%] flex items-center justify-center mt-8 md:mt-0">
                <div className="w-full max-w-md relative">
                    <img src="/boy.png" alt="boy" className="rounded-2xl shadow-xl border-4 border-bluegrey1" />
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-4 bg-blueblack3/80 border border-bluegrey1 rounded-lg p-3 backdrop-blur-md shadow-lg flex flex-col items-center min-w-[220px]">
                        <div className="text-center mb-1 text-sm text-bluegrey2">10k+ got job</div>
                        <Avatar.Group>
                            <Avatar src="avatar-7.png" />
                            <Avatar src="avatar-8.png" />
                            <Avatar src="avatar-9.png" />
                            <Avatar>+9k</Avatar>
                        </Avatar.Group>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Dreamjob;