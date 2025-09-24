import React, { useContext, useState } from "react";
import { Card, Spin } from "antd";
import { Context } from "../../../context/Context";

export const ArtCard = ({ title, description, image, bordered }) => {
  const { mobile_mode } = useContext(Context);
  const [loaded, setLoaded] = useState(false);

  return (
    <Card
      hoverable
      style={{ width: mobile_mode ? "90vw" : "20vw" }}
      cover={
        <div className="relative">
          {!loaded && (
            <div className="w-full min-h-[200px] h-full flex items-center justify-center">
              <Spin />
            </div>
          )}
          <img
            alt={title}
            src={image}
            onLoad={() => setLoaded(true)}
            onError={() => setLoaded(true)} // se quiser esconder o loader também no erro
            style={{ display: loaded ? "block" : "none" }}
          />
        </div>
      }
      className={
        bordered &&
        "outline-2 outline-offset-2 outline-dashed outline-secondary-300"
      }
    >
      <div className="flex flex-col">
        {title && <b className="text-center text-primary-200">{title}</b>}
        {description && <span>{description}</span>}
      </div>
    </Card>
  );
};
