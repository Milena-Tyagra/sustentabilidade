import { Flower } from "@phosphor-icons/react"

export const Info = ({ title, info }) => {
    return (info?.length ? <div className="flex flex-col">
        {title && <b className="text-primary-200">{title}</b>}

        {info.map((person, i) => <div key={`person-${title}-${i}`} className="flex gap-2 items-start mt-1">
            <Flower weight="duotone" className="w-4 h-4 md:w-5 md:h-5 shrink-0 text-primary-200" size={30} /><span>{person}</span>
        </div>)}
    </div> : null)
}