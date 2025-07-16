import { Button, Textarea } from "@mantine/core";
import fields from "../Data/Profile";
import SelectInput from "./SelectInput";
import { useState } from "react";
import { MonthPickerInput } from '@mantine/dates';

const ExpInput= (props:any) =>{
    const select=fields;
    const [startDate, setStartDate]=useState <Date | null>(null);
     const [EndDate, setEndDate]=useState <Date | null>(null);


    const [desc , setDesc] = useState("As a software Engineer at Google , I am responsible for designing , developing and maintaining scalable software solutions that enhance user experience . My role involves collaborating with cross-functional teams to define project requirements , develop technical specifications and implement robust applications.")
    return <div className="flex flex-col gap-3">
        <div className="text-lg font-semibold">{props.add?"Add":"Edit"} Experience</div>
        <div className="flex gap-10 [&>*]:w-1/2">
        <SelectInput {...select[0]}/>
        <SelectInput {...select[1]}/>
        </div>
        <SelectInput {...select[2]}/>
        <Textarea withAsterisk label = "Summary" value={desc} placeholder="Enter summary..." autosize minRows={3} onChange={(event)=> setDesc(event.currentTarget.value)}/>
            <div className="flex gap-10 [&>*]:w-1/2">
            <MonthPickerInput withAsterisk label="start Date"
            placeholder="Pick date"
            value={startDate} onChange={(value) => {
    setStartDate(value ? new Date(value) : null);
  }}/>
   <MonthPickerInput withAsterisk label="End Date"
            placeholder="Pick date"
            value={EndDate} onChange={(value) => {
    setEndDate(value ? new Date(value) : null);
  }}/>
  
            </div>
            <div className="flex gap-5">
                <Button onClick={()=>props.setEdit(false)} color="cedar.4" variant="outline">Save</Button>
                <Button onClick={()=>props.setEdit(false)} color="red.8" variant="light">Cancel</Button>
            </div>
    </div>
}
export default ExpInput;