import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useSizeMonitor from '../../hooks/useSizeMonitor';
import AnyList from '../../non-hooks/AnyList';
import { ScrollContext } from '../UnderRoot';
import './Header.css'

const Header = () => {
    const { pathname } = useLocation();
    // className for active navigations
    const activeNav = ( { isActive  } ) => isActive  ? "-activeNav" : ""

    // the burger for used on smaller viewports
    const [ openBurger, setBurger ] = useState( false );

    // self explanatory
    // e = null, for manual calls
    const burgerHandler = useCallback( ( e = null ) => {
        if ( e ) e.preventDefault();

        setBurger( !openBurger );
    }, [ setBurger ] )

    // whenever a link is clicked we close the burger if it's open
    const linkClicked = () => {
        if ( openBurger ) burgerHandler();

        window.scrollTo( { top: 0 } )
    }

    // the navigation lists for easier readability
    const navList = [
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
            label: "Contact Us",
            whichEl: "navlink",
            passPara: {
                to: "contacts",
                className: activeNav,
                onClick: linkClicked
            }
        }
    ]

    // observer for resizing
    // and burger
    const { entryObserver, observedElements } = useSizeMonitor()

    useEffect( () => {
        entryObserver( document.querySelector( "body" ), "body" )
    }, [] )

    useEffect( () => {
        // do effect here, whenever observer sees a resize
        // we set openBurger to false
        if ( openBurger ) setBurger( false )
    }, [ observedElements ] )

    // animation delay for smokes
    const [ animDelay, setAnimDelay ] = useState( false );

    const animDelaySupply = () => {
        const actualSmokeNum = 7;

        const _animDelay = []
        
        for ( let x = 1; x <= actualSmokeNum; x++ ) {
            _animDelay.push( x * .75 );
        }

        setAnimDelay( _animDelay )
    }

    useEffect( () => {
        if ( !animDelay ) animDelaySupply()
    }, [] )

    // scroll

    // we use the hideDesign to hide when the user is not on top of the page
    const [ hideDesign, setHide ] = useState( false )
    const { scroll } = useContext( ScrollContext );

    const headerScrollHandler = ( manualHide = false ) => {
        if ( manualHide ) {
            // we can manually hide through manualHide
            setHide( manualHide )
            return
        }

        if ( !scroll ) setHide( false )
        else setHide( true )
    }

    useEffect( () => {
        // whenever we scroll we fire the handler for header
        if ( pathname === "/" ) headerScrollHandler()
    }, [ scroll ] )

    // separate useEffect for initialization
    // if the page is loaded with the user not being on top we do the hidin'
    useEffect( () => {
        const html = document.querySelector( "html" );

        if ( html.scrollTop ) headerScrollHandler( true )
    }, [] )

    // if pathname is not home
    // we disable design altogether    
    useEffect( () => {
        if ( pathname !== "/" ) headerScrollHandler( true )
        else if ( hideDesign && !scroll ) setHide( false )
    }, [ pathname ] )

    return (
        <div className={ `header-con ${ ( hideDesign || ( pathname !== "/" ) ) ? "-hide-design" : "" }` }>
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
                <div className='header-design-con'>
                    <div className='noodles-con'>
                        <div className='smoke-con fd'>
                            {
                                animDelay?.length > 0 &&
                                animDelay.map( ( item, i ) => {
                                    return <div key={ i } className='actual-smoke' style={ { animationDelay: `${item}s` } } />
                                } )
                            }
                            {/* <div className='actual-smoke'/>
                            <div className='actual-smoke'/>
                            <div className='actual-smoke'/>
                            <div className='actual-smoke'/>
                            <div className='actual-smoke'/>
                            <div className='actual-smoke'/> */}
                        </div>
                        <div className='noodles-toppings'>
                             <div className='egg-con'>
                                <div className='egg-white' />
                                <div className='egg-yellow' />
                             </div>
                        </div>
                        <div className='noodles-inside fd'>
                            <div />
                            <div />
                            <div />
                            <div />
                            <div />
                            <div />
                            <div />
                            <div />
                            <div />
                            <div />
                            <div />
                            <div />
                        </div>
                    </div>
                    <div className='bowl-con'>
                        <div className='bowl-upper' />
                        <div className='bowl-side' />
                        <div className='bowl-bottom' />
                    </div>
                </div>
        </div>
    )
}

export default Header;