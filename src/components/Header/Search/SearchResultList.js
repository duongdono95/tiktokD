// eslint-disable-next-line
import styles from './Search.scss';

import SearchUser from '../Account/Account';

function SearchPopup() {
    return (
        <div className="search_results">
            <SearchUser />
            <SearchUser />
        </div>
    );
}

export default SearchPopup;
