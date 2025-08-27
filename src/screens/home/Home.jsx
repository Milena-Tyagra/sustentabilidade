import {
  Leaf,
  Tree,
  UsersThree,
  CurrencyCircleDollar
} from "@phosphor-icons/react";
import { messages } from "../../helpers/messages";
import { products_examples } from "../../helpers/mocks";

import banner from '../../assets/banner.jpeg'
import { useContext } from "react";
import { Context } from "../../context/Context";

export const Home = () => {
  const { mobile_mode } = useContext(Context)
  const icon_classes = "w-8 h-8 md:w-6 md:h-6 shrink-0 text-primary-200"
  const impacts = [
    {
      icon: <Tree className={icon_classes} />,
      text: messages.BENEFIT_1
    },
    {
      icon: <UsersThree className={icon_classes} />,
      text: messages.BENEFIT_2
    },
    {
      icon: <CurrencyCircleDollar className={icon_classes} />,
      text: messages.BENEFIT_3
    }
  ]

  return (
    <div className="flex flex-col gap-5 font-sans ">
      <div className="w-full flex justify-center">
        <img src={banner} style={{ width: mobile_mode ? "90vw" : "40vw" }} />
      </div>

      <p>{messages.PROBLEM}</p>
      <p>{messages.SOLUTION}</p>


      <div>
        <div className="flex justify-center items-center mb-1">
          <b className="text-center text-primary-200">{messages.PRODUCTS_EXAMPLES}</b>
        </div>
        {products_examples.map((example, i) => (
          <span key={`example-${i}`} className="flex items-center gap-1.5">
            <Leaf className="w-4 h-4 md:w-5 md:h-5 shrink-0 text-primary-200" size={30} />
            <span>{example}</span>
          </span>
        ))}
      </div>


      <div>
        <div className="flex justify-center items-center mb-1">
          <b className="text-center text-primary-200">{messages.IMPACTS}</b>
        </div>
        {impacts.map((impact, i) => (
          <span key={`impact-${i}`} className="flex items-center gap-1.5">
            {impact.icon}
            <span >{impact.text}</span>
          </span>
        ))}
      </div>

      <p>{messages.CALL_TO_ACTION_HOME_MESSAGE}</p>

    </div>
  );
};
