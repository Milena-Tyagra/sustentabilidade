import { videos } from "../../helpers/mocks";
import { Video } from "./components/Video";

export const Videos = () => {

    return (
        <div className="flex flex-wrap gap-5 w-full">
            {videos.map((video, i) => (
                <div key={`video-${i}`}>
                    <Video video={video} key={`video-${i}`} />
                </div>
            ))}
        </div>
    );
};