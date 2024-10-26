import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Job = () => {
  const navigate = useNavigate();
  const jobId = "qwerty";
  return (
    <div className="p-5 rounded-md shadow xl bg-white border border-gray-100">
      <div className="flex items-centre justify-between">
      <p>2 adys ago</p>
      <Button variant="outline" className="rounded-full" size="icon">
        <Bookmark />
      </Button>
      </div>

      <div className="flex items-centre gap-2 my-2">
        <Button className="p-6" variant="outline" sixe="icon">
          <Avatar>
            <AvatarImage src="" />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">Company Name</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">Title</h1>
        <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className='flex items-centre gap-2 mt-4'>
        <Badge className={'text-blue-700 font-bold'} variant="ghost">12 Positions</Badge>
        <Badge className={'text-red-700 font-bold'} variant="ghost">Part Time</Badge>
        <Badge className={'text-violet-700 font-bold'} variant="ghost">6LPA</Badge>
    </div>
    <div className="flex items-centre gap-4 mt-4">
        <Button onclick={()=> navigate('/description/${jobId}')}variant="outline">Details</Button>
        <Button className="bg-violet">Save For Later</Button>
    </div>
    </div>
  );
};

export default Job;
