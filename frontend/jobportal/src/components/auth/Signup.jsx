import React from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Signup = () => {

  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phonenumber: "",
    password: "",
    role: "",
    file: "",
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file:e.target.files?.[e]});
  };

  const submitHandler = async () => {
    e.preventDefault();
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
              <label>Phone NUmber</label>
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
