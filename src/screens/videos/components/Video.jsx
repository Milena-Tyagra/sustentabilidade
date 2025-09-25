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
        <iframe src="https://youtu.be/APAbZ_e9cqM" title="W3Schools Free Online Web Tutorials"></iframe>
    </div>
}