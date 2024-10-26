import React from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Contact, Mail, Pen } from "lucide-react";
import { Label } from "./ui/label";
import AppliedJobTable from "./AppliedJobTable";

const skills = ["Html", "css", "Javascript", "React"];
const Profile = () => {
  const isResume = true;
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-centre gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src="" />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">Full Name</h1>
              <p>lorem ipsum</p>
            </div>
          </div>
          <Button className="text-right" variant="outline">
            <Pen />
          </Button>
        </div>
        <div className="my-5">
          <div className="flex items-centre gap-3">
            <Mail />
            <span>support@gmail.com</span>
          </div>
          <div className="flex items-centre gap-3">
            <Contact />
            <span>1234567890</span>
          </div>
        </div>
        <div className="my-5">
          <h1>Skills</h1>
          <div className="flex items-centre gap-1">
            {
              (skills.length = !0 ? (
                skills.map((item, index) => <Badge key={index}>item</Badge>)
              ) : (
                <span>NA</span>
              ))
            }
          </div>
        </div>
        <div className="grid w-full max-w-sm items-centre gap-1.5">
          <Label className="text-md font-bold">Resume</Label>
          {isResume ? (
            <a
              target="blank"
              href=""
              className="text-blue-500 w-full hover:underline cursor-pointer"
            >
              See Resume
            </a>
          ) : (
            <span>NA</span>
          )}
        </div>
      </div>
      <div className="max-w-xl mx-auto bg-white rounded-2xl">
        <h1 className="font-bold text-lg my-5">Applied Jobs</h1>
        {/*Application Table*/}
        <AppliedJobTable />
      </div>
    </div>
  );
};

export default Profile;