import React, { useContext } from "react";
import { Card } from "antd";
import { Context } from "../../../context/Context";

export const ArtCard = ({ title, description, image, bordered }) => {
  const { mobile_mode } = useContext(Context)
  return (<Card
    hoverable
    style={{ width: mobile_mode ? '90vw' : '20vw' }}
    cover={<img alt={title} src={image} />}
    className={bordered && "outline-2 outline-offset-2 outline-dashed outline-secondary-300"}
  >
    <div className="flex flex-col">
      {title && <b className="text-center text-primary-200">{title}</b>}
      {description && <span >{description}</span>}
    </div>
  </Card>)

}
