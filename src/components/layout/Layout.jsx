import { useLayoutEffect, useState } from "react";
import { List } from "@phosphor-icons/react";

import { Sidebar } from "./Sidebar";

import { messages } from "../../helpers/messages";

const useWindowSize = () => {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight])

  useLayoutEffect(() => {
      function updateSize() {
          setSize([window.innerWidth, window.innerHeight])
      }

      window.addEventListener('resize', updateSize)
      updateSize()
      return () => window.removeEventListener('resize', updateSize)
  }, [])

  return size
}
export const Layout = ({ children }) => {
  const [windowWidth, windowHeight] = useWindowSize()
  const maxWidthMobileMode = 700 //px
  const mobile_mode = windowWidth <= maxWidthMobileMode

  const [sidebar, setSidebar] = useState(false);
  const [contentAlwaysVisible, setContentAlwaysVisible] = useState(!mobile_mode);

  const headerHeigth = document.getElementById('header')?.offsetHeight || 0
  const footerHeigth = document.getElementById('footer')?.offsetHeight || 0

  const height = windowHeight - headerHeigth - footerHeigth
  console.log(height)

  return (
    <div className="bg-secondary-100 w-screen h-full flex flex-col">
      <div className="w-full py-3 bg-secondary-200 text-xl relative" id="header">
        <div className="font-script text-primary-200 flex flex-col items-center justify-center" >
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
          <Sidebar onClick={() => setSidebar(false)} mobile={mobile_mode} height={height}/>
        )}
        {(!sidebar || contentAlwaysVisible) && (
          <div className={`p-4 md:px-12 font-sans text-gray-700  overflow-auto `} style={mobile_mode ? null : {height}}>{children}</div>
        )}
      </div>
      <div className=" w-full py-3 bg-secondary-200 text-xs" id="footer">
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
