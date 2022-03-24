import { useCallback, useEffect, useMemo, useState } from "react"
import SectionWrapper from "../../../wrapper/SectionWrapper"
import './Place.css'

const Place = () => {
    const [ currentHighlightSrc, setHighlight ] = useState( null );

    const changeHighlightHandler = ( src, indexSrc ) => {
        setHighlight( { indexSrc, src } )
    }

    const classHandler = () => {
        const currentActive = document.querySelector( "li.-active-highlight" );

        if ( currentActive ) currentActive.classList.toggle("-active-highlight");

        const imageLists = document.querySelectorAll( "ul.place-list-con li" );
        imageLists[ currentHighlightSrc.indexSrc ].classList.toggle("-active-highlight")
    }

    useEffect( () => {
        // we'll handle activehighlight here
        if ( currentHighlightSrc ) classHandler();
        const carouselInterval = setInterval( intervalHandler, 5000);

        return () => clearInterval( carouselInterval )
    }, [ currentHighlightSrc ] )

    const itemsToCarousel = useMemo( () => {
        return [
            `https://i1.lensdump.com/i/rLoYAx.jpg`,
            `https://i.lensdump.com/i/rLopV0.jpg`,
            `https://i3.lensdump.com/i/rLoScQ.jpg`,
            `https://i2.lensdump.com/i/rLolEA.jpg`,
            `https://i1.lensdump.com/i/rLoO5q.jpg`,
            `https://i.lensdump.com/i/rLovse.jpg`,
            `https://i3.lensdump.com/i/rLo3uF.jpg`,
            `https://i2.lensdump.com/i/rLomZ7.jpg`,
            `https://i1.lensdump.com/i/rLoqUb.jpg`,
            `https://i.lensdump.com/i/rLo9Tz.jpg`,
            `https://i3.lensdump.com/i/rLoQy5.jpg`,
            `https://i2.lensdump.com/i/rLoCQv.jpg`
        ].map( ( src, i ) => {
            return <li key={ i } onClick={ () => {
                changeHighlightHandler( src, i )
            } }>
                <img src={ src } alt={ "plants" } />
            </li>
        } )
    }, [ ] )
    // obj
    // indexSrc, src

    const imgGetter = ( ope = 1 ) => {
        const imageLists = document.querySelectorAll( "ul.place-list-con li" );

        let newIndex = 0;
        let returnedGot = false;

        imageLists.forEach( ( item, i ) => {
            if ( item.classList.contains("-active-highlight") ) {
                if ( ope > 0 ) {
                    if ( i === ( imageLists.length - 1 ) ) {
                        newIndex = 0
                        returnedGot = true;
                    }
                } else {
                    if ( !i ) {
                        newIndex = imageLists.length - 1
                        returnedGot = true;
                    }
                }

                if ( !returnedGot ) newIndex = i + ope
            }
        } )

        return [ imageLists[ newIndex ].firstChild.src, newIndex ]
    }

    const intervalHandler = () => {
        if ( !currentHighlightSrc ) return

        changeHighlightHandler( ...imgGetter() )
    }

    useEffect( () => {
        // get the first item to show
        if ( itemsToCarousel?.length ) changeHighlightHandler( itemsToCarousel[0]?.props?.children?.props.src, 0 )
    }, [ itemsToCarousel ] )

    const prevBtnHandler = () => {
        changeHighlightHandler( ...imgGetter(-1) )
    }

    const nextBtnHandler = () => {
        changeHighlightHandler( ...imgGetter() )
    }

    return (
        <SectionWrapper sectionClass={ "fd place" }>
            <h2> <span> Plantito's </span> & <span> Plantita's </span> </h2>
            <div className="highlight-con">
                <span className="prev-btn" onClick={ prevBtnHandler }></span>
                <span className="next-btn" onClick={ nextBtnHandler }></span>
                { currentHighlightSrc && <div className="highlight-inside" style={ { backgroundImage: `url(${ currentHighlightSrc.src })` } } /> }
            </div>
            <ul className="fd place-list-con">
                { itemsToCarousel }
            </ul>
        </SectionWrapper>
    )
}

export default Place