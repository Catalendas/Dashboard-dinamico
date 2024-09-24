import { WidgetComponentProps } from "../dashboard.model";

export function BlockTemplate({content}: WidgetComponentProps) {
    const {value, prev, current, title} = content.data

    const handleInfo = () => (prev ? `${prev} - ${current}` : current)
    
    return (
        <>
            <h2 className="widget_title">{title}</h2>
            <p className="widget__value">{value}</p>
            <p className="widget__info">{handleInfo()}</p>
        </>
    )
}