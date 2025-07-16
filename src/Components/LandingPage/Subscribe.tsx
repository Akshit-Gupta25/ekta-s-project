// import { TextInput, Button } from "@mantine/core";
// import { IconBell } from '@tabler/icons-react';

// const Subscribe = () => {
//     return (
//         <section className="mt-20 flex flex-col md:flex-row items-center bg-blueblack2 mx-4 md:mx-20 py-8 rounded-2xl shadow-lg justify-between gap-8 md:gap-0">
//             <div className="text-2xl md:text-4xl w-full md:w-2/5 text-center font-extrabold text-bluegrey3">
//                 Never want to miss any <span className="text-bluegrey1">Job News?</span>
//             </div>
//             <form className="flex flex-col sm:flex-row gap-4 rounded-xl bg-blueblack3 px-4 py-3 items-center w-full md:w-auto max-w-xl mx-auto">
//                 <TextInput
//                     className="flex-1 [&_input]:text-bluegrey3 font-semibold"
//                     variant="unstyled"
//                     placeholder="your@email.com"
//                     size="xl"
//                 />
//                 <Button
//                     size="lg"
//                     color="bluegrey2"
//                     variant="filled"
//                     className="font-bold shadow-md flex items-center gap-2 bg-bluegrey2 hover:bg-[#FF0000] transition-colors duration-200"
//                 >
//                     <IconBell size={20} />
//                     Subscribe
//                 </Button>
//             </form>
//         </section>
//     );
// };
// export default Subscribe;



import { TextInput, Button } from "@mantine/core";
import { IconBell } from '@tabler/icons-react';

const Subscribe = () => {
    return (
        <section className="mt-20 flex flex-col md:flex-row items-center bg-blueblack2 mx-4 md:mx-20 py-8 rounded-2xl shadow-lg justify-between gap-8 md:gap-0">
            <div className="text-2xl md:text-4xl w-full md:w-2/5 text-center font-extrabold text-bluegrey3">
                Never want to miss any <span className="text-bluegrey1">Job News?</span>
            </div>
            <form className="flex flex-col sm:flex-row gap-4 rounded-xl bg-blueblack3 px-4 py-3 items-center w-full md:w-auto max-w-xl mx-auto">
                <TextInput
                    className="flex-1 [&_input]:text-bluegrey3 font-semibold"
                    variant="unstyled"
                    placeholder="your@email.com"
                    size="xl"
                />
                <Button
                    size="lg"
                    color="bluegrey2"
                    variant="filled"
                    className="font-bold shadow-md flex items-center gap-2 bg-bluegrey2 hover:bg-[#FF0000] transition-colors duration-200"
                >
                    <IconBell size={20} />
                    Subscribe
                </Button>
            </form>
        </section>
    );
};
export default Subscribe;