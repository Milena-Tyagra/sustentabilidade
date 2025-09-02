import { useContext } from "react";

import logo from '../../assets/logo.jpeg'

import { Context } from "../../context/Context";
import { displayMessage } from "../../components/messages/Message";
import { acknowledges, advisors, artisains, contact, developers, exhibitors, farmers, interpreters, managers, students, teachers } from "../../helpers/mocks";
import { Info } from "./components/Info";
import { Separator } from "../../components/separator/Separator";

export const AboutUs = () => {
    const { mobile_mode } = useContext(Context)
    return (
        <div className="flex flex-col gap-2 font-sans ">
            <div className="w-full flex justify-center">
                <img src={logo} style={{ width: mobile_mode ? "90vw" : "25vw" }} />
            </div>

            <p>{displayMessage("ABOUT_US_INFO")}</p>
            <Separator title={displayMessage("INVOLVED")} />


            <Info title={displayMessage("MANAGER")} info={managers} />
            <Info title={displayMessage("ADVISOR")} info={advisors} />
            <Info title={displayMessage("GUIDING_TEACHER")} info={teachers} />

            <Info title={displayMessage("EXHIBITORS")} info={exhibitors} />
            <Info title={displayMessage("STUDENTS")} info={students} />
            <Info title={displayMessage("ARTISANS")} info={artisains} />
            <Info title={displayMessage("FARMERS")} info={farmers} />
            <Info title={displayMessage("INTERPRETER")} info={interpreters} />
            <Info title={displayMessage("DEVELOPER")} info={developers} />

            <Separator title={displayMessage("ACKNOWLEDMENTS")} />
            <Info info={acknowledges} />
            <Separator title={displayMessage("CONTACT_US")} />
            <Info title={displayMessage("CONTACT")} info={contact.email} />
            <Info title={displayMessage("ADRESS")} info={contact.adress} />
            <Info title={displayMessage("PHONE")} info={contact.phone} />
            

        </div>
    )
}