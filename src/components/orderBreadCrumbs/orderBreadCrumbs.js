import './orderBreadCrumbs.scss';

const arrow = <svg className="arrow" width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0L6 4.03L0 8V0Z" fill="#999999"/>
</svg>;


const breadCrumbs = [
    {title: "Местоположение"},
    {title: "Модель"},
    {title: "Дополнительно"},
    {title: "Итого"}
]



const OrderBreadCrumbs = () => {
    return(
        <ul className="order-breadcrumbs-list">
            {
                breadCrumbs.map((item, index)=>
                <li className="order-breadcrumbs-list-item">
                    <span>{item.title}</span>
                    {index === breadCrumbs.length-1 ? "" : arrow}
                </li>
                )
            }
        </ul>
    )
}

export default OrderBreadCrumbs;