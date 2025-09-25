import { useContext, useState } from "react"
import { Separator } from "../../../components/separator/Separator"
import { Context } from "../../../context/Context"
import { Spin } from "antd"

export const Video = ({ video }) => {
    const { mobile_mode, windowWidth } = useContext(Context)
    const [loaded, setLoaded] = useState(false);

    const videosWidth = windowWidth * (mobile_mode ? 0.9 : 0.5)
    return <div className="w-full">
        <Separator title={video.title} />
        {(!video || !loaded) && <div className="w-full min-h-[200px] h-full flex items-center justify-center">
            <Spin />
        </div>}
         <video width={video.horizontal ? videosWidth : null} onLoadedData={() => setLoaded(true)} controls style={{
            display: loaded ? 'block' : 'none' 
         }}>
            <source src={video.media} type="video/mp4" />
            {/* <source src="movie.ogg" type="video/ogg" /> */}
            Your browser does not support the video tag.
        </video>
    </div>
}