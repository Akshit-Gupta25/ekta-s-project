    import { ActionIcon, Button, Divider, TagsInput, Textarea } from "@mantine/core";
    import { IconBriefcase, IconDeviceFloppy, IconMapPin, IconPencil, IconPlus } from "@tabler/icons-react";

    import ExpCard from "./ExpCard";
    import CertiCard from "./CertiCard";
    import { talents , searchFields , profile as profileData} from "../Data/TalentData";
    import { useState } from "react";
    import SelectInput from "./SelectInput";

    import fields from "../Data/Profile";
import ExpInput from "./ExpInput";

    const Profile=()=>{
        const select=fields;
        const [skills , setSkills]=useState(["react","SpringBoot" , "MongoDB","HTML","CSS","Docker","Python"]);
        const [edit, setEdit]= useState([false , false , false , false , false]);
        const[addExp , setAddExp] = useState(false)
        const [about , setAbout] = useState('')
        const handleEdit=(index:any)=>{
            const newEdit=[...edit];
            newEdit[index]=!newEdit[index];
            setEdit(newEdit);
            
        }
        return <div className="w-4/5 mx-auto">
            <div className="">
                <div className="relative">
                    
                </div>
                <div className="px-3 mt-16">
                    <div className="text-3xl font-semibold flex justify-between "> Ekta Tyagi<ActionIcon onClick={()=>handleEdit(0)} size="lg" color = "cedar.4" variant="subtle">
                        {edit[0]?<IconDeviceFloppy className="h-4'5 w-4/5"/>:<IconPencil className="h-4/5 w-4/5 " />}
                        </ActionIcon></div>
                        {
                        edit[0]?<><></><div className="flex gap-10 [&>*]:w-1/2">
                            <SelectInput {...select[0]} />
                            <SelectInput {...select[1]} />
                        </div><SelectInput {...select[2]} /></>:<><div className="text-xl flex gap-1 items-center"><IconBriefcase className="h-5 w-5" stroke={1.5 } /> Software Engineer &bull; google</div>
                    <div className="text-lg flex gap-1 items-center text-mine-shaft-300">
                        <IconMapPin className="h-5 w-5 stroke={1.5}"/> Delhi , India
                    </div></>
                        }
                    
                    
                    <Divider my="xl" />
                </div>
                <div className="text-2xl font-semibold mb-3 flex justify-between ">About <ActionIcon onClick={()=>handleEdit(1)} size="lg" color = "cedar.4" variant="subtle">
                        {edit[1]?<IconDeviceFloppy className="h-4'5 w-4/5"/>:<IconPencil className="h-4/5 w-4/5 " />}
                        </ActionIcon></div>
                        {
                            edit[1]?<Textarea value={about}
                        onChange={(event)=> setAbout(event.currentTarget.value)}/>:<div className="text-sm text-mine-shaft-300 text-justfiy"> As a software Enginner at Google , I specialize in building scalable and high-performance applications. 
    My expertise lies in integrating front-end and back-end technologies to deliver seamless user experiences. 
    With a strong foundation in React and SpringBoot, and a focus on MongoDB for database solutions, I am 
    passionate about leveraging the latest technologies to solve complex problems and drive innovation. 
    My goal is to create impactful software that enhances productivity and meets user needs effectively.</div>
                        }
                        
                
    <Divider my="xl" />
    <div>
    <div className="text-2xl font-semibold mb-3 flex justify-between">Skills<ActionIcon onClick={()=>handleEdit(2)} size="lg" color = "cedar.4" variant="subtle">
                        {edit[2]?<IconDeviceFloppy className="h-4'5 w-4/5"/>:<IconPencil className="h-4/5 w-4/5 " />}
                        </ActionIcon></div>
                        {
                            edit[2]?<TagsInput value={skills} onChange={setSkills} placeholder="Add skill" splitChars={[',', '' , '|']}/>:<div className="flex flex-wrap gap-2">
                                {
        skills.map((skill, index) => 
            <div key={index} className="bg-cedar-300 rounded-3xl px-3 py-1 text-sm font-medium bg-opacity-15 text-cedar-400">{skill}</div>)
        }
        </div>
    
                        }
                        
                        
        
        </div>
        <Divider my="xl"/>
        <div>
            <div className="text-2xl  font-semibold mb-4 flex justify-between">Experience <div className="flex gap-2"><ActionIcon onClick={()=> setAddExp(true)} size="lg" color="cedar.4" variant="subtle"><IconPlus className="h-4/5 w-4/5"/></ActionIcon>
                <ActionIcon onClick={()=>handleEdit(3)} size="lg" color = "cedar.4" variant="subtle">
                        {edit[3]?<IconDeviceFloppy className="h-4'5 w-4/5"/>:<IconPencil className="h-4/5 w-4/5 " />}
                        </ActionIcon></div></div>
                        
            <div className="flex flex-col gap-8">
                {
                    profileData.experience.map((exp,index)=><ExpCard key={index} {...exp} edit={edit[3]}/>)
                }
                {addExp&&<ExpInput setEdit={setAddExp}/>}
            </div>
        </div>
        <Divider my="xl"/>
        <div>
            <div className="text-2xl  font-semibold mb-4 flex justify-between">Certifications<ActionIcon onClick={()=>handleEdit(4)} size="lg" color = "cedar.4" variant="subtle">
                        {edit[4]?<IconDeviceFloppy className="h-4'5 w-4/5"/>:<IconPencil className="h-4/5 w-4/5 " />}
                        </ActionIcon></div>
            <div className="flex flex-col gap-8">
                {
                    profileData.certifications.map((certi,index)=><CertiCard key={index} {...certi}/>)
                }
            </div>
        </div>
        </div>
        </div>

    }
    export default Profile;