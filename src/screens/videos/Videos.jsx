import { useContext } from "react";
import { Spin } from "antd";

import { Context } from "../../context/Context";
import { videos } from "../../helpers/mocks";
import { Separator } from "../../components/separator/Separator";


export const Videos = () => {
    const { mobile_mode, windowWidth } = useContext(Context)
    const videosWidth = windowWidth * (mobile_mode ? 0.9 : 0.5)

    return (
        <div className="flex flex-wrap gap-5 w-full">
            {videos.map((video, i) => (
                <div key={`video-${i}`}>
                    <Separator title={video.title} />
                    {false ? <div className="w-full min-h-[200px] h-full flex items-center justify-center">
                        <Spin />
                    </div> : <video width={video.horizontal ? videosWidth : null} controls>
                        <source src={video.media} type="video/mp4" />
                        {/* <source src="movie.ogg" type="video/ogg" /> */}
                        Your browser does not support the video tag.
                    </video>}
                </div>
            ))}
        </div>
    );
};