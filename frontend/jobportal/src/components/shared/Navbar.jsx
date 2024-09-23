import { Link, LogOut, User2 } from "lucide-react";
import React from "react";

const Navbar = () => {
  const user = false;
  return (
    <div className="bg-white">
      <div className="flex items-centre justify-between ">
        <div>
          <h1 className="text-2xl font-bold">
            Job<span className="text-red">Portal</span>
          </h1>
        </div>
        <div className="flex items-centre gap-12">
          <ul className="flex font-medium items-centre gap-5">
            <li>Home</li>
            <li>Jobs</li>
            <li>Browse</li>
          </ul>
          {
            !user ?Link(
              <div className="flex items-centre gap-2">
              <Link to= "/login"><Button>Login</Button></Link>
              <Link to= "/signup"><Button>SignUp</Button></Link>
              </div>
            ) : (
              <Popover>
            <PopoverTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="flex gap-4">
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
                <div>
                <h4 className="font-medium">GROUP- 5</h4>
                <p></p>
                </div>
              </div>
              <div className="flex w-fit items-centre gap-2 cursor-pointer">
                <User2/>
                <Button variant="link">view profile</Button>
              </div>
              <div className="flex w-fit items-centre gap-2 cursor-pointer">
                <LogOut/>
                <Button variant="link">logout</Button>
              </div>
            </PopoverContent>
          </Popover>

            )
          }
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
