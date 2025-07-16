import {Button, Anchor,Checkbox, PasswordInput, TextInput ,rem, Grid, Group} from "@mantine/core";
import { IconAt , IconLock } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { Radio } from '@mantine/core';
import { useState } from 'react';
import { registerUser } from "../../Services/UserService";

const form={
    name:"",
    email:"",
    password:"",
    confirmPassword:"",
    accountType:"APPLICANT",
}

const SignUp=(props:any)=>{
    const [value, setValue] = useState('react');

    const [data , setData]=useState(form);

    const handleChange=(event:any)=>{
        if(typeof(event)=="string")setData({...data,accountType:event});
        else setData({...data, [event.target.name]:event.target.value})
    }

    const handleSubmit=()=>{
        registerUser(data).then((res)=>{
            console.log(res);

        }).catch((err)=>console.log(err));
    }


    return <div className="w-1/2 px-20 flex flex-col justify-center gap-3 ">
        <div className=" text-2xl font-semibold text-gray-900 ">Create Account</div>
        <TextInput value={data.name} name="name" onChange={handleChange} withAsterisk className="text-gray-900" label="Full Name" placeholder="Your Name"/>
        <TextInput value={data.email} name="email" onChange={handleChange} withAsterisk className="text-gray-900" leftSection={<IconAt style={{width: rem(16), height:rem(16)}}/>} label="Your email"
        placeholder="Your Email"/>
        <PasswordInput value={data.password} name="password" onChange={handleChange} withAsterisk className="text-gray-900" leftSection={<IconLock  style={{width: rem(18), height: rem(18)}} stroke={.5}/>} label="Password" placeholder="Password"/>
        <PasswordInput value={data.confirmPassword} name="confirmPassword" onChange={handleChange} withAsterisk className="text-gray-900" leftSection={<IconLock  style={{width: rem(18), height: rem(18)}} stroke={.5}/>} label=" Confirm Password" placeholder=" Confirm Password"/>
         <Radio.Group
      value={data.accountType}
      onChange={handleChange}
      
      label="you are ?"
      description="This is anonymous"
      withAsterisk
    >
        <Group  mt="xs">
      <Radio className="px-6 py-4 border hover:bg-mine-shaft-900 has-[:checked]:bg-cedat-400/5 has-[:checked]:border-cedar-400 border-mine-shaft-800 rounded-lg" autoContrast value="APPLICANT" label="Applicant" />
      <Radio className="px-6 py-4 border hover:bg-mine-shaft-900 has-[:checked]:bg-cedat-400/5 has-[:checked]:border-cedar-400 border-mine-shaft-800 rounded-lg" autoContrast value="EMPLOYER" label="Employer" />
      </Group>
      
    </Radio.Group>
        <Checkbox className="text-gray-900" autoContrast label={<> accept{''}<Anchor> terms & conditions</Anchor></>}/>
        <Button onClick={handleSubmit} autoContrast variant="filled">Signup</Button>
         <div className="mx-auto text-gray-900">Have an account?<Link to="/login" className="text-cedar-400 hover:underline">Login</Link></div>
    </div>

}
export default SignUp ;