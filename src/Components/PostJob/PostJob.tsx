import { TagsInput, Text } from "@mantine/core";
import { field } from "../Data/PostJob";
import SelectInput from "./SelectInput";
import TextEditor from "./TextEditor";
import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";

const PostJob=()=>{
    const select=field;
    return <div className="w-full">
        <div className="text-2xl font-semibold mb-6 text-bluegrey3 drop-shadow-xl">Post a Job</div>
        <div className="flex flex-col gap-6">
            <div className="flex gap-10 [&>*]:w-1/2">
                <SelectInput{...select[0]}/>
                <SelectInput{...select[1]}/>
            </div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <SelectInput{...select[2]}/>
                <SelectInput{...select[3]}/>
            </div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <SelectInput{...select[4]}/>
                <SelectInput{...select[5]}/>
            </div>
            <TagsInput withAsterisk label="Skills" placeholder="Enter skill" splitChars={[',','','|']} clearable acceptValueOnBlur/>
            <div className="[&_button[data-active='true']]:!text-cedar-400 [&_button[data-active='true']]:!bg-cedarr-400/20">
                <div className="text-sm font-medium"> Job Description</div>
                <TextEditor/>
            </div>
            <div className="flex gap-4 mt-4">
                <Button color="cedar.4" variant="light" className="shadow-soft rounded-glass px-6">Publish Job</Button>
                <Button color="cedar.4" variant="outline" className="shadow-soft rounded-glass px-6">Save as Draft</Button>
            </div>
        </div>
    </div>
}

export default PostJob;