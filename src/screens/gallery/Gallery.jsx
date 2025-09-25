import { useEffect, useState } from "react";
import { Carousel, Spin } from "antd";

import { displayMessage } from "../../components/messages/Message";
import { Photo } from "./components/Photo";
import { Separator } from "../../components/separator/Separator";
const feira_images = import.meta.glob('../../assets/feiras/*.{png,jpg,jpeg,svg}', { eager: true });
const products_images = import.meta.glob('../../assets/products/*.{png,jpg,jpeg,svg}', { eager: true });
const process_images = import.meta.glob('../../assets/process/*.{png,jpg,jpeg,svg}', { eager: true });


export const Gallery = () => {
  const [feiraGroupedData, setFeiraGroupedData] = useState([])
  const [productsGroupedData, setProductsGroupedData] = useState([])
  const [processGroupedData, setProcessGroupedData] = useState([])
  const [loadingImages, setLoadingImages] = useState(true)

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

  useEffect(() => {
    const images = [feiraGroupedData, productsGroupedData, processGroupedData]
    setLoadingImages(!images.every(group => group.length))
  }, [feiraGroupedData, productsGroupedData, processGroupedData])
  return (
    <div className="flex flex-col gap-5">
      <Separator title={displayMessage("EXPOSITIONS")} />

      {loadingImages ? <div className="w-full min-h-[200px] h-full flex items-center justify-center">
        <Spin />
      </div> : <Carousel arrows={true} infinite>
        {
          feiraGroupedData.map((group, index) => (
            <div key={index}>
              <div className="flex justify-center items-center w-full h-[50vh]">{group.map((img, i) => <Photo key={i} img={img} />)}</div>
            </div>
          ))
        }
      </Carousel>}

      <Separator title={displayMessage("CREATED_PRODUCTS")} />


      {loadingImages ? <div className="w-full min-h-[200px] h-full flex items-center justify-center">
        <Spin />
      </div> : <Carousel arrows={true} infinite>
        {
          productsGroupedData.map((group, index) => (
            <div key={index}>
              <div className="flex justify-center items-center w-full h-[50vh]">{group.map((img, i) => <Photo key={i} img={img} />)}</div>
            </div>
          ))
        }
      </Carousel>}

      <Separator title={displayMessage("STUDENTS_AND_PROCESSES")} />

      {loadingImages ? <div className="w-full min-h-[200px] h-full flex items-center justify-center">
        <Spin />
      </div> : <Carousel arrows={true} infinite>
        {
          processGroupedData.map((group, index) => (
            <div key={index}>
              <div className="flex justify-center items-center w-full h-[50vh]">{group.map((img, i) => <Photo key={i} img={img} />)}</div>
            </div>
          ))
        }
      </Carousel>}


    </div>
  );
};
