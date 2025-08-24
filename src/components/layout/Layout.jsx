import { useState } from "react";
import { List } from "@phosphor-icons/react";

import { Sidebar } from "./Sidebar";

import { messages } from "../../helpers/messages";

export const Layout = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  const [contentAlwaysVisible, setContentAlwaysVisible] = useState(false);

  return (
    <div className="bg-secondary-100 w-screen min-h-screen  flex flex-col">
      <div className=" w-full py-3 bg-secondary-200 text-xl">
        <div className="font-script text-primary-200 flex flex-col items-center justify-center ">
          <List
            size={32}
            className="absolute top-1 left-1 cursor-pointer"
            onClick={() => setSidebar((current) => !current)}
          />
          <span>{messages.TITLE}</span>
          <span>{messages.SUBTITLE}</span>
        </div>
      </div>
      <div className="flex-1 w-full flex">
        {(sidebar || contentAlwaysVisible) && (
          <Sidebar onClick={() => setSidebar(false)} />
        )}
        {(!sidebar || contentAlwaysVisible) && (
          <div className="p-4 font-sans text-gray-700">{children}</div>
        )}
      </div>
      <div className=" w-full py-3 bg-secondary-200 text-xs">
        <div className="font-sans text-primary-200 flex flex-col items-center justify-center ">
          <p>
            &copy;
            {`${new Date().getFullYear()} 
            Sustentability Project. All rights reserved.`}
          </p>
        </div>
      </div>
    </div>
  );
};
