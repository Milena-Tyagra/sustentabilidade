import { Carousel } from "antd";
import { messages } from "../../helpers/messages";
import { arts } from "../../helpers/mocks";

export const Art = () => {
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
