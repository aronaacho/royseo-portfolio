import React from 'react';
import { NavLink } from 'react-router-dom';

export function MobileHeader() {

    function handleMenu() {
        const menuButton = document.querySelector('.menu-button')
        const menuItems = document.querySelector('.navbar')
        const pageContent = document.querySelector('.home-container')
        const isExpanded = menuButton.getAttribute('aria-expanded');
        if (isExpanded != null & isExpanded == 'false') {
            menuButton.setAttribute('aria-expanded', 'true')
            menuItems.setAttribute('aria-expanded', 'true')
            pageContent.setAttribute('aria-expanded', 'true')

        } else {
            menuButton.setAttribute('aria-expanded', 'false')
            menuItems.setAttribute('aria-expanded', 'false')
            pageContent.setAttribute('aria-expanded', 'false')


        }
    }

    return (
        <div className='header'>
            <div className='logo-wrapper'>
                <a className='name-logo' href="/">ROY SEO</a>
                <label htmlFor='hamburger-stack' className='menu-button hamburger-menu' aria-expanded='false' onClick={handleMenu}>
                    <input id='hamburger-stack' type='checkbox' aria-expanded='false' onClick={handleMenu}/>

                </label>
                {/* <button className='menu-button' aria-controls='primary-navigation' aria-expanded='false' onClick={handleMenu}> */}

                    {/* <svg className='hamburger-icon' viewBox='0 0 10 10' width='25.0'>
                        <rect className='top hamburger-line' width='8.0' height='1.0' x='1.0' y='2.5' rx='.5'></rect>
                        <rect className='middle hamburger-line' width='8.0' height='1.0' x='1.0' y='4.5' rx='.5'></rect>
                        <rect className='bottom hamburger-line' width='8.0' height='1.0' x='1.0' y='6.5' rx='.5'></rect>
                    </svg> */}
                {/* </button> */}
            </div>

            <nav className='fading-menu'>
                <ul className='navbar' aria-expanded='false'>
                    <li><a className='menu-item' href="/about">ABOUT</a></li>
                    <li><a className='menu-item' href="/publications">PUBLICATIONS</a></li>
                    {/* <li><a className='menu-item' href="/contact" onClick={handleMenu}>CONTACT</a></li> */}
                    {/* <li><a className='menu-item' href="/cv" onClick={handleMenu}>CV</a></li> */}
                </ul>
            </nav>
        </div>
    )
}