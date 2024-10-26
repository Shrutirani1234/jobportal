import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Signup = () => {

  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phonenumber: "",
    password: "",
    role: "",
    file: "",
  });
  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file:e.target.files?.[e]});
  };

  const submitHandler = async () => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);

    if(input.file){
      formData.append("file", input.file);
    }
    try{
      const res = await axios.post('${USER_API_END_POINT}/register', formData, {
        headers:{
          "Content-Type":"multipart/form-data"
        },
        withcredentials: true,
      });
      if(res.data.success){
        navigate("/login");
        toast.success(res.data.message);
      }
      
    }catch (error){
      console.log(error);
      toast.error(error.response.data.message);
    }
    
  }

  return (
    <div>
      <Navbar />
      <div className="flex items-centre justify-centre max-w-7xl mx-auto">
        <form onSubmit ={submitHandler}
          action=""
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">SignUp</h1>

          <div className="my-2">
            <label>Fullname</label>
            <Input type="text"
            value={input.fullname}
            name="fullname"
            onChange={changeEventHandler} placeholder="name" />
          </div>
          <div className="my-2">
            <label>Email</label>
            <Input type="email"
            value={input.email}
            name="email"
            onChange={changeEventHandler} placeholder="abc@gmail.com" />

            <div className="my-2">
              <label>Phone Number</label>
              <Input type="text"
              value={input.phoneNumber}
            name="phoneNumber"
            onChange={changeEventHandler} placeholder="1234567890" />
            </div>
          </div>
          <div className="my-2">
            <label>Password</label>
            <Input type="password"
            value={input.password}
            name="password"
            onChange={changeEventHandler} placeholder="" />
          </div>

          <div className="flex items-centre justify-between">
            <RadioGroup className="flex items-centre gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input 
                type ="radio"
                name ="role"
                value ="student"
                checked ={input.role === 'student'}
                onChange ={changeEventHandler}
                className ="cursor-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
              <Input 
                type ="radio"
                name ="role"
                value ="recruiter"
                checked ={input.role === 'recruiter'}
                onChange ={changeEventHandler}
                className ="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
              
            </RadioGroup>

            <div className="flex items-centre gap-2">
              <Label>Profile</Label>
              <Input 
              accept="image/*"
              type="file"
              onChange="changeFileHandler"
              className="cursor-pointer"
              />
            </div>
          </div>
          <Button type="submit" className="w-full my-4">Signup</Button>
          <span>already have an account? <Link to="/login" className="text-red">Login</Link></span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
