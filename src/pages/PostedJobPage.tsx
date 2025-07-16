import PostJob from "../Components/PostJob/PostJob";
import { Divider } from "@mantine/core";

const PostJobPage=()=>{
    return <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins']">
        <Divider size="xs" mx="md"/>
        <PostJob/>
    </div>
}
export default PostJobPage;