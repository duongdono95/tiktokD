// eslint-disable-next-line
import styles from '../Header/Header.scss';
// import { useState } from 'react';
import Search from './Search/Search';
import DotsMenu from './DotsMenu/DotsMenu';

// declare the MenuItem
const MENU__ITEMS = [
    {
        icon: <i className="fa-solid fa-earth-americas"></i>,
        title: 'English',
        children: {
            header: 'Languages',
            data: [
                {
                    type: 'language',
                    icon: 'En',
                    title: 'English',
                },
                {
                    type: 'language',
                    icon: 'Fr',
                    title: 'French',
                },
                {
                    type: 'language',
                    icon: 'Sp',
                    title: 'Spanish',
                },
                {
                    type: 'language',
                    icon: 'Vi',
                    title: 'Vietnamese',
                },
            ],
        },
    },
    {
        icon: <i className="fa-solid fa-circle-info"></i>,
        title: 'Feedback and Help',
    },
    {
        icon: <i className="fa-solid fa-keyboard"></i>,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;
    // const handleMenuChange = (menuItem) => {
    //     switch (menuI)
    // }
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

                <Search />
                <div className="header__items">
                    {currentUser ? (
                        <>
                            <div className="header__item3">
                                <div className="item3__container">
                                    <i className="fa-solid fa-cloud-arrow-up"></i>
                                </div>
                                <div className="item3__container message__icon">
                                    <p className="message__quantity">99+</p>
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                                <div className="item3__container">
                                    <i className="fa-solid fa-comments"></i>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="header__item1">
                                <div className="item1__group">
                                    <i className="fa-solid fa-plus"></i>
                                    <p className="upload__btn">Upload</p>
                                </div>
                                <button className="header__item2" type="button">
                                    Login
                                </button>
                            </div>
                        </>
                    )}
                    <DotsMenu items={MENU__ITEMS}>
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                    </DotsMenu>
                </div>
            </div>
        </header>
    );
}

export default Header;
