import React from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async () => {
    e.preventDefault();
    try{
      dispatchEvent(setLoading(true));
      const res = await axios.post('${USER_API_END_POINT}/login', input, {
        headers:{
          "Content-Type":"application/json"
        },
        withcredentials: true,
      });
      
      if(res.data.success){
        dispatchEvent(setUser(res.data.user));
        navigate("/");
        toast.success(res.data.message);
      }
      
    }catch (error){
        console.log(error);
        toast.error(error.response.data.message);
    } finally{
      
    }
    
  }


  return (
    <div>
      <Navbar />
      <div className="flex items-centre justify-centre max-w-7xl mx-auto">
        <form onSubmit={submitHandler}
          action=""
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Login</h1>

          <div className="my-2">
            <label>Email</label>
            <Input
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="abc@gmail.com"
            />
          </div>
          <div className="my-2">
            <label>Password</label>
            <Input
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder=""
            />
          </div>

          <div className="flex items-centre justify-between">
            <RadioGroup className="flex items-centre gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === "recruiter"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          <Button type="submit" className="w-full my-4">
            Login
          </Button>
          <span>
            Don't have an account?{" "}
            <Link to="/signup" className="font-red">
              Signup
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
