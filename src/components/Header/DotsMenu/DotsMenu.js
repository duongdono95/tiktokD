import Tippy from '@tippyjs/react/headless';
// eslint-disable-next-line
import styles from './DotsMenu.scss';

import MenuItem from './MenuItem';

function DotsMenu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItem key={index} data={item} />);
    };
    return (
        <Tippy
            visible={true}
            placement="bottom-end"
            render={(attrs) => (
                <div className="menu__wrapper" tabIndex="-1" {...attrs}>
                    {renderItems()}
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default DotsMenu;
