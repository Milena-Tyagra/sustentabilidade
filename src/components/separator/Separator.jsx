import { Divider } from "antd"

export const Separator = ({ title }) => {
    return <Divider style={{ borderColor: '#a4c1a6' }} variant="dashed" orientation="left"><b className="text-primary-200">{title}</b></Divider>
} 