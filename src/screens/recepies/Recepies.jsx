import { Divider } from "antd"
import { Dot, DotOutline, Leaf, WarningCircle } from "@phosphor-icons/react"
import { messages } from "../../helpers/messages"
import { recepies } from "../../helpers/mocks"

export const Recepies = () => {
    return (
        <div className="flex flex-col gap-5">
            {recepies.map((recepy, i) => (<div key={`recepy-${i}`} className="flex flex-col gap-2">
                <Divider style={{borderColor: '#a4c1a6'}} variant="dashed" orientation="left"><b className="text-primary-200">{recepy.title}</b></Divider>
                
                {recepy.info && <p>{recepy.info}</p>}

                <div>
                    <p className="text-primary-200">{messages.MATERIALS}</p>
                    {recepy.materials.map((material, index_material) => <div key={`material-${i}-${index_material}`} className="pl-3"><span className="flex gap-2 items-center"><Leaf className="w-4 h-4 md:w-5 md:h-5 shrink-0 text-primary-200" />{material}</span></div>)}
                </div>
                <div>
                    <p className="text-primary-200">{messages.STEPS}</p>
                    {recepy.steps.map((step, index_step) => <div className="pl-3 " key={`step-${i}-${index_step}`}>
                        <div className="flex gap-2 items-center"><DotOutline className="w-4 h-4 md:w-5 md:h-5 shrink-0 text-primary-200" size={30} weight="fill" /><span>{step.text}</span></div>
                        {step.substeps.map((substep, index_substep) => <div key={`substep-${i}-${index_substep}`} className="pl-3"><div className="flex gap-2 items-center"><DotOutline className="w-4 h-4 md:w-5 md:h-5 shrink-0 text-primary-200" size={30} weight="light" /><span>{substep}</span></div></div>)}
                    </div>)}
                </div>

                {recepy.important_notes && <div>
                    {recepy.important_notes.map((important_note, index_note) => <div key={`note-${i}-${index_note}`} className="pl-3"><span className="flex gap-2 items-center"><WarningCircle className="w-4 h-4 md:w-5 md:h-5 shrink-0 text-primary-200" />{important_note}</span></div>)}
                </div>}


            </div>))}

        </div>
    )
}