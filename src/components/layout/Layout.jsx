import { useContext, useState } from "react";
import { List } from "@phosphor-icons/react";

import { Sidebar } from "./Sidebar";

import { messages } from "../../helpers/messages";
import { Context } from "../../context/Context";

export const Layout = ({ children }) => {
  const {mobile_mode, windowHeight} = useContext(Context)
 

  const [sidebar, setSidebar] = useState(false);
  const [contentAlwaysVisible, setContentAlwaysVisible] = useState(!mobile_mode);

  const headerHeigth = document.getElementById('header')?.offsetHeight || 0
  const footerHeigth = document.getElementById('footer')?.offsetHeight || 0

  const height = windowHeight - headerHeigth - footerHeigth

  return (
    <div className="bg-secondary-100 w-screen h-full flex flex-col">
      <div className="w-full py-3 bg-secondary-200 text-xl relative" id="header">
        <div className={`font-script text-primary-200 flex flex-col items-center justify-center ${!mobile_mode && 'text-3xl'}`}  >
          {mobile_mode && <List
            size={32}
            className="absolute top-1 left-1 cursor-pointer"
            onClick={() => setSidebar((current) => !current)}
          />}
          <span>{messages.TITLE}</span>
          <span>{messages.SUBTITLE}</span>
        </div>
      </div>
      <div className="flex-1 w-full flex h-full">
        {(sidebar || contentAlwaysVisible) && (
          <Sidebar onClick={() => setSidebar(false)} height={height}/>
        )}
        {(!sidebar || contentAlwaysVisible) && (
          <div className={`p-4 md:px-12 font-sans text-gray-700  overflow-auto ${mobile_mode ? "text-xs" : "text-xl"}`} style={mobile_mode ? null : {height}}>{children}</div>
        )}
      </div>
      <div className=" w-full py-3 bg-secondary-200 text-xs" id="footer">
        <div className={`font-script text-primary-200 flex flex-col items-center justify-center ${!mobile_mode && 'text-xl'}`}>
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
