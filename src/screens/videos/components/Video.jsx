import { useContext, useState } from "react"
import { Separator } from "../../../components/separator/Separator"
import { Context } from "../../../context/Context"
import { Spin } from "antd"

export const Video = ({ video }) => {
    const { mobile_mode, windowWidth, windowHeight } = useContext(Context)

    const videosWidth = windowWidth * (mobile_mode ? 0.8 : 0.5)
    const videosHeight = windowHeight * (mobile_mode ? 0.4 : 0.5)
    return <div className="w-full">
        <Separator title={video.title} />
        <iframe width={videosWidth} height={videosHeight} src={video.media} title={`Vídeo ${video.title}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
}