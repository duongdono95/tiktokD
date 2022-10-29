// eslint-disable-next-line
import styles from './Search.scss';
import SearchResultList from './SearchResultList';
import Tippy from '@tippyjs/react/headless';
import PopperWrapper from '~/components/PopperWrapper/PopperWrapper';

function Search() {
    return (
        <Tippy
            placement="bottom"
            interactive
            render={(attrs) => (
                <PopperWrapper tabIndex="-1" {...attrs}>
                    <SearchResultList />
                </PopperWrapper>
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
