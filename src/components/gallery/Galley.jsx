import { useContext, useEffect, useState } from "react";
import { Carousel } from "antd";

import { Context } from "../../context/Context";
import { displayMessage } from "../../components/messages/Message";
const feira_images = import.meta.glob('../../assets/feiras/*.{png,jpg,jpeg,svg}', { eager: true });
const products_images = import.meta.glob('../../assets/products/*.{png,jpg,jpeg,svg}', { eager: true });
const process_images = import.meta.glob('../../assets/process/*.{png,jpg,jpeg,svg}', { eager: true });


export const Gallery = () => {
    console.log(feira_images)
  const { mobile_mode } = useContext(Context)
  const [feiraGroupedData, setFeiraGroupedData] = useState([])
  const [productsGroupedData, setProductsGroupedData] = useState([])
  const [processGroupedData, setProcessGroupedData] = useState([])
  const groupData = () => {
    const feiraGroupedData = []
    const productsGroupedData = []
    const processGroupedData = []
    const itemsPerPage = 1
    for (let i = 0; i < Object.values(feira_images).length; i += itemsPerPage) {
        feiraGroupedData.push(Object.values(feira_images).slice(i, i + itemsPerPage))
    }
    for (let i = 0; i < Object.values(products_images).length; i += itemsPerPage) {
        productsGroupedData.push(Object.values(products_images).slice(i, i + itemsPerPage))
    }
    for (let i = 0; i < Object.values(process_images).length; i += itemsPerPage) {
        processGroupedData.push(Object.values(process_images).slice(i, i + itemsPerPage))
    }
    setFeiraGroupedData(feiraGroupedData)
    setProductsGroupedData(productsGroupedData)
    setProcessGroupedData(processGroupedData)
    
  }

  useEffect(() => {
    groupData()
  }, [])
  return (
    <div className="flex flex-col gap-5">
      <b className="text-center text-primary-200">
        {displayMessage("EXPOSITIONS")}
      </b>

      <Carousel arrows={true} infinite>
        {
          feiraGroupedData.map((group, index) => (
            <div key={index}>
              <div className="flex justify-center items-center w-full h-[50vh]">{group.map((img, i) => <img key={i} src={img.default} alt={`img-${i}`} style={{ width: mobile_mode ? '90vw' : '30vw' }} />)}</div>
            </div>
          ))
        }
      </Carousel>

      <b className="text-center text-primary-200">
        {displayMessage("CREATED_PRODUCTS")}
      </b>

      <Carousel arrows={true} infinite>
        {
          productsGroupedData.map((group, index) => (
            <div key={index}>
              <div className="flex justify-center items-center w-full h-[50vh]">{group.map((img, i) => <img key={i} src={img.default} alt={`img-${i}`} style={{ width: mobile_mode ? '90vw' : '30vw' }} />)}</div>
            </div>
          ))
        }
      </Carousel>
      <b className="text-center text-primary-200">
        {displayMessage("STUDENTS_AND_PROCESSES")}
      </b>

      <Carousel arrows={true} infinite>
        {
          processGroupedData.map((group, index) => (
            <div key={index}>
              <div className="flex justify-center items-center w-full h-[50vh]">{group.map((img, i) => <img key={i} src={img.default} alt={`img-${i}`} style={{ width: mobile_mode ? '90vw' : '30vw' }} />)}</div>
            </div>
          ))
        }
      </Carousel>
    </div>
  );
};
