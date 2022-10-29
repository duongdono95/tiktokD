import Tippy from '@tippyjs/react/headless';
// eslint-disable-next-line
import styles from './DotsMenu.scss';
import PopperWrapper from '~/components/PopperWrapper/PopperWrapper';

import MenuItem from './MenuItem';

function DotsMenu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItem key={index} data={item} />);
    };
    return (
        <Tippy
            interactive
            visible={true}
            placement="bottom-end"
            render={(attrs) => (
                <PopperWrapper tabIndex="-1" {...attrs}>
                    <div className="menu_list">{renderItems()}</div>
                </PopperWrapper>
            )}
        >
            {children}
        </Tippy>
    );
}

export default DotsMenu;
