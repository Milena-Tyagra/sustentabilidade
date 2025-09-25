import { useContext, useState } from "react"
import { Spin } from "antd"
import { Context } from "../../../context/Context";

export const Photo = ({ img }) => {
    const { mobile_mode } = useContext(Context)
    const [loaded, setLoaded] = useState(false);

    return <>
        {(!img || !loaded) && <div className="w-full min-h-[200px] h-full flex items-center justify-center">
            <Spin />
        </div>}
        {img && <img
            src={img.default}
            style={{
                width: mobile_mode ? '90vw' : '30vw',
                display: loaded ? "block" : "none"
            }}
            onLoad={() => setLoaded(true)}
            onError={() => setLoaded(true)} // se quiser esconder o loader também no erro
        />}
    </>
}