import { useContext } from "react";

import banner from '../../assets/banner.jpeg'

import { Context } from "../../context/Context";
import { displayMessage } from "../../components/messages/Message";

export const Home = () => {
  const { mobile_mode } = useContext(Context)

  return (
    <div className="flex flex-col gap-5 font-sans">
      <div className="w-full justify-center">
        <div className="w-full flex justify-center">
          <img src={banner} style={{ width: mobile_mode ? "90vw" : "40vw" }} />
        </div>
        <div className="w-full flex justify-center" >
          <span style={{ width: mobile_mode ? "90vw" : "40vw" }} className={`text-end ${mobile_mode ? 'text-[8px]' : 'text-sm'}`}>{displayMessage("ILUSTRATIVE")}</span>
        </div>
      </div>
      <p>{displayMessage("HOME_DEVELOPED_BY")}</p>
      <p>{displayMessage("HOME_OBJECTIVES")}</p>
      <p>{displayMessage("HOME_INTRODUCTION")}</p>
      <p>{displayMessage("HOME_CALL_TO_ACTION_MESSAGE")}</p>
    </div>
  );
};
