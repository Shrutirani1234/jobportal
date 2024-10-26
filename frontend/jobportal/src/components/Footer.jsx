import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="border-t border-t-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-centre">
            <div>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <a href="https://facebook.com">Facebook</a>
                <a href="https://linkedin.com">LinkedIn</a>
                <a href="https://twitter.com">Twitter</a>
              </div>
            </div>
            <div className="mb-4 md:mb-0">
              <p className="text-md font-bold">
                © 2024 Job Portal. All rights reserved.
              </p>
              <p className="text-sm">
                Empowering your career journey, one job at a time.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
