import {Button, Anchor,Checkbox, PasswordInput, TextInput ,rem} from "@mantine/core";
import { IconAt , IconLock } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { loginUser } from "../../Services/UserService";

const form={
        email:"",
        password:"",
}

const Login=()=>{
        const [value, setValue] = useState('react');
        
            const [data , setData]=useState(form);
        
            const handleChange=(event:any)=>{
                setData({...data, [event.target.name]:event.target.value})
            }
        
            const handleSubmit=()=>{
                loginUser(data).then((res)=>{
                    console.log(res);
        
                }).catch((err)=>console.log(err.response.data));
            }
    return <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
            <div className=" text-2xl font-semibold text-gray-900 ">Login</div>
            <TextInput value={data.email} name="email" onChange={handleChange}  withAsterisk className="text-gray-900" leftSection={<IconAt style={{width: rem(16), height:rem(16)}}/>} label="Your email"
            placeholder="Your Email"/>
            <PasswordInput value={data.password} name="password" onChange={handleChange} withAsterisk className="text-gray-900" leftSection={<IconLock  style={{width: rem(18), height: rem(18)}} stroke={.5}/>} label="Password" placeholder="Password"/>
            <Checkbox className="text-gray-900" autoContrast label={<> accept{''}<Anchor> terms & conditions</Anchor></>}/>
            <Button  onClick={handleSubmit} autoContrast variant="filled">Login</Button>
             <div className="mx-auto text-gray-900"> Don't have an account?<Link to="/signup" className="text-cedar-400 hover:underline">signup</Link></div>
        </div>
    

}
export default Login;
