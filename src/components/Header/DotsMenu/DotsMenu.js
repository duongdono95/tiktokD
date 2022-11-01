import Tippy from '@tippyjs/react/headless';
// eslint-disable-next-line
import styles from './DotsMenu.scss';
import PopperWrapper from '~/components/PopperWrapper/PopperWrapper';
import { useState } from 'react';
import MenuItem from './MenuItem';
import SubMenuHeader from './SubMenuHeader';

function DotsMenu({ children, items = [] }) {
    // create a state, which will store the current object(item of items) being rendered in the page
    // useState initial value = an array with data = items => current rendered menu =  the last menu of the menu.
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    const renderItems = () => {
        return current.data.map((item, index) => {
            // if the menu item comes with children -> true, if not -> undefined.
            // isParrent is the item which comes with child object.
            // isParent = !!item.children -> convert bolean of the object. -> isParent = item.child = true
            const isParent = !!item.children;
            // add prop onclick to MenuItem.js as well
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        }
                    }}
                />
            );
        });
    };
    return (
        <div>
            <Tippy
                interactive
                visible={true}
                placement="bottom-end"
                render={(attrs) => (
                    <PopperWrapper tabIndex="-1" {...attrs}>
                        {history.length > 1 && <SubMenuHeader />}
                        <div className="menu_list">{renderItems()}</div>
                    </PopperWrapper>
                )}
            >
                {children}
            </Tippy>
        </div>
    );
}

export default DotsMenu;
