import { useContext, useEffect, useState } from "react";

import { ArtCard } from "./components/ArtCard";
import { messages } from "../../helpers/messages";
import { arts, artSteps } from "../../helpers/mocks";
import { Context } from "../../context/Context";
import { Carousel } from "antd";

export const Art = () => {
  const { mobile_mode } = useContext(Context)
  const [artGroupedData, setArtGroupedData] = useState([])
  const [stepsGroupedData, setStepsGroupedData] = useState([])
  const groupData = () => {
    const groupedData = []
    const groupedDataSteps = []
    const itemsPerPage = mobile_mode ? 1 : 3
    for (let i = 0; i < arts.length; i += itemsPerPage) {
      groupedData.push(arts.slice(i, i + itemsPerPage))
    }
    for (let i = 0; i < artSteps.length; i += itemsPerPage) {
      groupedDataSteps.push(artSteps.slice(i, i + itemsPerPage))
    }
    setArtGroupedData(groupedData)
    setStepsGroupedData(groupedDataSteps)
    
  }

  useEffect(() => {
    groupData()
  }, [])
  return (
    <div className="flex flex-col gap-5">
      <p>{messages.ART_OPENING_TEXT}</p>
      <b className="text-center text-primary-200">
        {messages.CREATED_PRODUCTS}
      </b>

      <Carousel arrows={true} infinite>
        {
          artGroupedData.map((group, index) => (
            <div key={index}>
              <div className="flex justify-around px-10 py-3 w-full">{group.map((art, i) => <ArtCard
                key={`artesanato-${index}-${i}`}
                title={art.title}
                description={art.description}
                image={art.image}
                bordered
              />)}</div>
            </div>
          ))
        }
      </Carousel>
      <b className="text-center text-primary-200">
        {messages.ART_PROCESS}
      </b>
      <Carousel arrows={true} infinite>
        {
          stepsGroupedData.map((group, index) => (
            <div key={index}>
              <div className="flex justify-around px-10 py-3 w-full">{group.map((art, i) => <ArtCard
                key={`steps-${index}-${i}`}
                description={art.description}
                image={art.image}
              />)}</div>
            </div>
          ))
        }
      </Carousel>

      <p>{messages.CALL_TO_ACTION_ART_MESSAGE}</p>
    </div>
  );
};
