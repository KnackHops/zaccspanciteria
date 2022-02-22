import { useEffect, useMemo, useState } from 'react';
import useSizeMonitor from '../../hooks/useSizeMonitor';
import AnyList from '../../non-hooks/AnyList';
import './Header.css'

const Header = () => {
    const activeNav = ( { isActive  } ) => isActive  ? "-activeNav" : ""

    const [ openBurger, setBurger ] = useState( false );

    const burgerHandler = ( e = null ) => {
        if ( e ) e.preventDefault();

        setBurger( !openBurger );
    }

    const linkClicked = () => {
        if ( openBurger ) burgerHandler();
    }

    const navList = useMemo( () => {
        const _navList = [
            {
                label: "Home",
                whichEl: "navlink",
                passPara: {
                    to: "",
                    className: activeNav,
                    onClick: linkClicked
                }
            },
            {
                label: "Menu",
                whichEl: "navlink",
                passPara: {
                    to: "menu",
                    className: activeNav,
                    onClick: linkClicked
                }
            },
            {
                label: "Toppings",
                whichEl: "navlink",
                passPara: {
                    to: "toppings",
                    className: activeNav,
                    onClick: linkClicked
                }
            },
            {
                label: "Contacts",
                whichEl: "navlink",
                passPara: {
                    to: "contacts",
                    className: activeNav,
                    onClick: linkClicked
                }
            }
        ]

        return _navList
    }, [ linkClicked, activeNav ] )

    const { entryObserver, observedElements } = useSizeMonitor()

    useEffect( () => {
        entryObserver( document.querySelector( "body" ), "body" )
    }, [] )

    useEffect( () => {
        // do effect here
        if ( openBurger ) setBurger( false )
    }, [ observedElements ] )

    return (
        <div className="header-con">
            <header className='fd'>
                <div className="title-con">
                    <h1>
                        Zacc's
                    </h1>
                </div>
                <div className={ `nav-con ${ openBurger ? "-activeBurger" : "" }` }>
                    <div className='nav-burger fd' onClick={ burgerHandler }>
                        <span />
                        <span />
                        <span />
                    </div>
                    <nav>
                        <AnyList arrList={ navList } arrClass={ "nav" } />
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header;