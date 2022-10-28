// eslint-disable-next-line
import styles from './Search.scss';
import SearchPopup from './SearchPopup';
import Tippy from '@tippyjs/react/headless';

function Search() {
    return (
        <Tippy
            render={(attrs) => (
                <div className="search_result__container" tabIndex="-1" {...attrs}>
                    <SearchPopup />
                </div>
            )}
        >
            <div className="search">
                <input className="search__input" placeholder="Search Accounts and Videos" type="text" />
                <div className="search__divider"></div>
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
        </Tippy>
    );
}

export default Search;
