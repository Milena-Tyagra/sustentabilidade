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
        <iframe width="560" height="315" src={video.media} title={`Vídeo ${video.title}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
}