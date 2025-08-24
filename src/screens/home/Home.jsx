import { 
    Leaf,
    Tree,
    UsersThree,
    CurrencyCircleDollar 
} from "@phosphor-icons/react";
import { messages } from "../../helpers/messages";

export const Home = () => {
    const products_examples = [
        messages.PRODUCT_1,
        messages.PRODUCT_2,
        messages.PRODUCT_3,
        messages.PRODUCT_4,
        messages.PRODUCT_5,
        messages.PRODUCT_6,
        messages.PRODUCT_7,
    ];
    
const icon_classes ="w-8 h-8 md:w-4 md:h-4 shrink-0 text-primary-200"
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
        icon: <CurrencyCircleDollar  className={icon_classes} />,
        text: messages.BENEFIT_3
    }
  ]

  return (
    <div className="flex flex-col gap-3 font-sans ">
      <p className="font-sans">{messages.PROBLEM}</p>
      <p className="font-sans">{messages.SOLUTION}</p>

      <b className="text-center text-primary-200">{messages.PRODUCTS_EXAMPLES}</b>

      <div>
        {products_examples.map((example, i) => (
          <span key={`example-${i}`} className="flex items-center gap-1.5">
          <Leaf className="w-4 h-4 shrink-0 text-primary-200" />
          <span className="text-sm">{example}</span>
        </span>
        ))}
      </div>

      <b className="text-center text-primary-200">{messages.IMPACTS}</b>

      <div>
      {impacts.map((impact, i) => (
          <span key={`impact-${i}`} className="flex items-center gap-1.5">
          {impact.icon}
          <span className="text-sm">{impact.text}</span>
        </span>
        ))}
      </div>

      <p className="font-sans">{messages.CALL_TO_ACTION_HOME_MESSAGE}</p>

    </div>
  );
};
