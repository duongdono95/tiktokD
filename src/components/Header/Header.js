// eslint-disable-next-line
import styles from '../Header/Header.scss';

function Header() {
    return (
        <header className="header">
            <div className="header__wrapper">
                <div className="logo__container">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg"
                        alt="/log"
                        className="logo"
                    />
                </div>
                <div className="search">
                    <input className="search__input" placeholder="Search Accounts and Videos" type="text" />
                    <div className="search__divider"></div>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
        </header>
    );
}

export default Header;
