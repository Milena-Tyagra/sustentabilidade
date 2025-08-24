import { Carousel } from "antd";
import { messages } from "../../helpers/messages";
import { ArtCard } from "./components/ArtCard";

export const Art = () => {
  const arts = [
    {
      title: messages.ART_TITLE_1,
      description: messages.ART_PRODUCT_1,
      image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
      title: messages.ART_TITLE_2,
      description: messages.ART_PRODUCT_2,
      image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
      title: messages.ART_TITLE_3,
      description: messages.ART_PRODUCT_3,
      image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
      title: messages.ART_TITLE_4,
      description: messages.ART_PRODUCT_4,
      image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
      title: messages.ART_TITLE_5,
      description: messages.ART_PRODUCT_5,
      image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
      title: messages.ART_TITLE_6,
      description: messages.ART_PRODUCT_6,
      image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
      title: messages.ART_TITLE_7,
      description: messages.ART_PRODUCT_7,
      image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
  ];

  const artSteps = [
    {
        description: messages.ART_STEP_1,
        image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      },
      {
        description: messages.ART_STEP_2,
        image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      },
      {
        description: messages.ART_STEP_3,
        image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      },
      {
        description: messages.ART_STEP_4,
        image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      },
      {
        description: messages.ART_STEP_5,
        image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      },
  ]
  return (
    <div className="flex flex-col gap-5">
      <p>{messages.ART_OPENING_TEXT}</p>
      <b className="text-center text-primary-200">
        {messages.CREATED_PRODUCTS}
      </b>

      <div className="flex flex-wrap gap-4 justify-around">
        {arts.map((art, i) => (
          <ArtCard
            key={`artesanato-${i}`}
            title={art.title}
            description={art.description}
            image={art.image}
            bordered
          />
        ))}
      </div>

      <b className="text-center text-primary-200">
        {messages.ART_PROCESS}
      </b>

      <div className="flex flex-wrap gap-4 justify-around">
        {artSteps.map((art, i) => (
          <ArtCard
            key={`etapa-${i}`}
            description={art.description}
            image={art.image}
          />
        ))}
      </div>

      <p>{messages.CALL_TO_ACTION_ART_MESSAGE}</p>
    </div>
  );
};
