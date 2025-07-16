import { Divider } from "@mantine/core";
import PostJob from "../PostJob/PostJob";

const PostJobPage = () => {
    return(
        <div className="min-h-[90vh] flex items-center justify-center bg-blueblack1 font-['poppins'] p-4">
            <div className="w-full max-w-3xl bg-blueblack2/60 backdrop-blur-lg shadow-glass rounded-glass border border-glass p-8">
                <PostJob />
            </div>
        </div>
    )
}

export default PostJobPage;