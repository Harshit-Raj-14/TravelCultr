import React from "react";
import { Card, Dropdown } from "flowbite-react";

const About = () => {
  return (
    <div className="mt-28 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center">THE TEAM</h2>
      <div className="grid gap-8 my-12 lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 justify-center items-center">
        <Card className="max-w-sm">
          <div className="flex justify-end px-4 pt-4"></div>
          <div className="flex flex-col items-center pb-10">
            <img
              alt="profile image"
              height="96"
              src="./profile/m.png"
              width="96"
              className="mb-3 rounded-full shadow-lg"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Bonnie Green
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Web Developer
            </span>
          </div>
        </Card>

        <Card className="max-w-sm">
          <div className="flex justify-end px-4 pt-4"></div>
          <div className="flex flex-col items-center pb-10">
            <img
              alt="profile image"
              height="96"
              src="./profile/m.png"
              width="96"
              className="mb-3 rounded-full shadow-lg"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Pushkar Joshi
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
            Web Developer
            </span>
          </div>
        </Card>

        <Card className="max-w-sm">
          <div className="flex justify-end px-4 pt-4"></div>
          <div className="flex flex-col items-center pb-10">
            <img
              alt="profile image"
              height="96"
              src="./profile/m.png"
              width="96"
              className="mb-3 rounded-full shadow-lg"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Sudhir Venkatesh
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
            Web Developer
            </span>
          </div>
        </Card>

        <Card className="max-w-sm">
          <div className="flex justify-end px-4 pt-4"></div>
          <div className="flex flex-col items-center pb-10">
            <img
              alt="profile image"
              height="96"
              src="./profile/f.png"
              width="96"
              className="mb-3 rounded-full shadow-lg"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            Shubhi Choudha
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
            Web Developer
            </span>
          </div>
        </Card>

        <Card className="max-w-sm">
          <div className="flex justify-end px-4 pt-4"></div>
          <div className="flex flex-col items-center pb-10">
            <img
              alt="profile image"
              height="96"
              src="./profile/f.png"
              width="96"
              className="mb-3 rounded-full shadow-lg"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            Mamta kumari
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
            Web Developer
            </span>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default About;
