import { messages } from "../../helpers/messages"
import ReactMarkdown from "react-markdown";


export function displayMessage(index, params) {
    try {
        let message = messages[index]

        if (params && params.length > 0) {
            for (let i = 0; i < params.length; i++) {
                const param = params[i]
                message = message.split(`{${i}}`).join(param)
            }
        }
        
        return <ReactMarkdown>{message}</ReactMarkdown>
    } catch (error) {
        console.log(error)
        return '-'
    }
}