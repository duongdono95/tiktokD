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
                <div className="header__items">
                    <div className="header__item1">
                        <i class="fa-solid fa-plus"></i>
                        <p className="upload__btn">Upload</p>
                    </div>
                    <button className="header__item2" type="button">
                        Login
                    </button>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
            </div>
        </header>
    );
}

export default Header;
