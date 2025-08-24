import React from "react";
import { Card } from "antd";

export const ArtCard = ({ title, description, image, bordered }) => (
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt={title} src={image} />}
    className={bordered && "outline-2 outline-offset-2 outline-dashed outline-secondary-300"}
  >
    <div className="flex flex-col">
      {title && <b className="text-center text-primary-200">{title}</b>}
      {description && <span >{description}</span>}
    </div>
  </Card>
);
