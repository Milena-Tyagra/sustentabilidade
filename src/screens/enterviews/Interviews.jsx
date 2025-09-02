
import { Separator } from "../../components/separator/Separator"
import { displayMessage } from "../../components/messages/Message"
import { artisains_entreviews, comunity_entreviews, farmers_entreviews } from "../../helpers/mocks"
import { Info } from "../../components/info/Info"

export const Interviews = () => {
    return (
        <div className="flex flex-col gap-5">
            <Separator title={displayMessage("FARMERS")}/>
            {farmers_entreviews.map((farmer,i) => <Info key={`farmer-${i}`} title={farmer.question} info={farmer.answers} />)}
            <Separator title={displayMessage("ARTISANS")}/>
            {artisains_entreviews.map((artisain,i) => <Info key={`artisain-${i}`} title={artisain.question} info={artisain.answers} />)}
            <Separator title={displayMessage("COMUNITY")}/>
            {comunity_entreviews.map((people,i) => <Info key={`people-${i}`} title={people.question} info={people.answers} />)}
        </div>
    )
}