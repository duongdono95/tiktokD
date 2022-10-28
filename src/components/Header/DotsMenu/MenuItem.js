// eslint-disable-next-line
import styles from './DotsMenu.scss';
// have to have { } for parameter to keep the object type.
function MenuItem({ data }) {
    console.log(typeof data);
    return (
        <div className="menu_item">
            <div className="menu_item__icon">{data.icon}</div>
            <div className="menu_item__title">
                <span>{data.title}</span>
            </div>
        </div>
    );
}

export default MenuItem;
