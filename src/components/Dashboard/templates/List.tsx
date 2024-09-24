import { WidgetComponentProps } from "../dashboard.model";

export function ListTemplate({content}: WidgetComponentProps) {
    const { title, items } = content.data

    return (
        <div className="widget__list">
            <h2 className="widget__title">{title}</h2>
            <ul className="widget__ul">
                {items!.map((item: any, index) => (
                    <li className="widget__li" key={index}>
                        <span>{item.title}</span>
                        <span>{item.value}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}