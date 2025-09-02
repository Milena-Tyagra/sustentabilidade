import { displayMessage } from "../../components/messages/Message"

export const Summary = () => {
    return <div className="text-justify whitespace-normal">
    {displayMessage("SUMMARY_INFO")}
    </div>
} 