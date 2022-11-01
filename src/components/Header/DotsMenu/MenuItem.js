// eslint-disable-next-line
import styles from './DotsMenu.scss';
// have to have { } for parameter to keep the object type.
function MenuItem({ data, onClick }) {
    return (
        <div className="menu_item" onClick={onClick}>
            <div className="menu_item__icon">{data.icon}</div>
            <div className="menu_item__title">
                <span>{data.title}</span>
            </div>
        </div>
    );
}

export default MenuItem;
