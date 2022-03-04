import { useCallback, useEffect, useMemo, useState } from "react"
import SectionWrapper from "../../../wrapper/SectionWrapper"
import './Place.css'

const Place = () => {
    const middleIndexGetter = ( _mid = 0 ) => {
        return Math.floor( ( _mid ? _mid : lastIndex ) / 2 );
    }

    // we can separate this whole thing as its own component, but I don't see any extra use for now
    const itemsToCarousel = useMemo( () => {
        return [...Array( 11 ).keys() ].map( num => {
            return {
                src: "",
                alt: `item no. ${ num }`
            }
        } )
    }, [ ] )

    const [ lastIndex, setLastIndex ] = useState( 0 );

    const [ selectedImg, setSelected ] = useState( 0 );

    const prevHandler = e => {

        if ( selectedImg === 0 ) setSelected( lastIndex )
        else setSelected( selectedImg - 1 )
    }

    const nextHandler = e => {

        if ( selectedImg === lastIndex ) setSelected( 0 )
        else setSelected( selectedImg + 1 )
    }

    useEffect( () => {
        // get the initial middle index
        const mid = middleIndexGetter( itemsToCarousel.length - 1 );

        setSelected( mid )
        setLastIndex( itemsToCarousel.length - 1 )
    }, [ itemsToCarousel ] )

    const loopReturner = ( start, cond, changeIndexFunc, posKey, additional=0 ) => {
        const returnedVal = [];

        let _heightNum = 98;
        let _pos = 700;
        let _zIndex = 4;

        if ( additional ) {
            // if this is in addition to a pre existing array
            // we deduct the necessary values before looping again
            // this creates a flow for different indexes involved
            _heightNum = _heightNum - ( 4 * additional );
            _pos = _pos - ( 50 * additional );
            _zIndex = _zIndex - additional;
        }

        for ( let i = start, pos=_pos, heightNum=_heightNum, zIndex=_zIndex; cond( i ); i = changeIndexFunc( i ), pos-=50, heightNum-=4, zIndex-=1 ) {
            let posStr = "";

            if ( pos < 0 ) {
                // if position is 0 or less
                // it means we are going on the positive for the position
                posStr = `${ pos }px`
            } else {
                posStr = `-${ pos }px`
            }

            returnedVal.push( {
                src: itemsToCarousel[ i ].src,
                alt: itemsToCarousel[ i ].alt,
                style: {
                    [ posKey ]: posStr,
                    "height": `${ heightNum }%`,
                    zIndex
                }
            } )
        }

        return returnedVal;
    }

    const prevReturner = useMemo( () => {
        const difference = selectedImg - middleIndexGetter();
        const changeIndexFunc = i => i-=1
        const cond = i => i >= 0;

        if ( difference > 0 ) {
            const greaterCond = i => i >= difference;
            
            return loopReturner( ( selectedImg - 1 ), greaterCond, changeIndexFunc, "right" )
        } else {
            let returnedVal = loopReturner( ( selectedImg - 1 ), cond, changeIndexFunc, "right" );
            // first we get the items from the first half
            // if difference is less than 0
            // we continue to the next loop
            // else, we just return

            if ( difference < 0 ) {
            
                // then we deduct the difference
                // first we turn that difference to positive number
                // then we get the full length of the items
                // and proceed to deduct
                // due to how index, and length works
                // we actually don't need lastIndex here
                // just the purest length of the item
                // for example, 11 item ( 10 last index ), deducted by 1 ( let's say the mid is on 6, so we have 1 difference between 5 and 6 )
                // side note: we get the mid by round down, hence 11 gets 5 as middle instead of 7
                // we get 10 which would be the last index
                // remember since this is the prevItems
                // we form the array from right to left
                // so we start with 10 and end with 10 for 1, for 2 difference, we start with 10 and end with 9 being the last item
                const deducttedIndex = itemsToCarousel.length - Math.abs( difference )
    
                // if i is still bigger than the deductedIndex
                // we continue the loop
                const deductCond = i => i >= deducttedIndex
                const _changeIndexFunc = i => i-=1
                    
                returnedVal = returnedVal.concat( loopReturner( lastIndex, deductCond, _changeIndexFunc, "right", returnedVal.length ) )
            }

            return returnedVal
        }
    }, [ selectedImg ] )

    const nextReturner = useMemo( () => {
        const difference = selectedImg - middleIndexGetter();
        const cond = i => i <= lastIndex
        const changeIndexFunc = i => i+=1
        console.log( difference )

        if ( difference < 0 ) {
            const lesserCond = i => i <= lastIndex - ( Math.abs( difference ) )

            return loopReturner( ( selectedImg + 1 ), lesserCond, changeIndexFunc, "left" )
        } else {
            let returnedVal = loopReturner( ( selectedImg + 1 ), cond, changeIndexFunc, "left" )

            if ( difference > 0 ) {

                const greaterCond = i => i <= ( difference - 1 )

                returnedVal = returnedVal.concat( loopReturner( 0, greaterCond, changeIndexFunc, "left", returnedVal.length ) )
            }

            return returnedVal
        }
    }, [ selectedImg ] )

    return (
        <SectionWrapper sectionClass={ "home-place" }>
            <div className="carousel-con fd">
                <div className="carousel-mid">
                    <img src={ `${ itemsToCarousel[ selectedImg ].src }` } alt={ itemsToCarousel[ selectedImg ].alt } />
                </div>
                <div className="carousel-items fd">
                    <div className="carousel-prev-items" onClick={ prevHandler }>
                        <ul className="carousel-list fd">
                            {
                                itemsToCarousel?.length && prevReturner.map( ( item, i ) => {
                                    return <li key={ i } style={ item.style } className="fd">
                                        <img src={ item.src } alt={ item.alt } />
                                    </li>
                                } )
                            }
                        </ul>
                    </div>
                    <div className="carousel-next-items" onClick={ nextHandler }>
                        <ul className="carousel-list fd">
                            {
                                itemsToCarousel?.length && nextReturner.map( ( item, i ) => {
                                    return <li key={ i } style={ item.style } className="fd">
                                        <img src={ item.src } alt={ item.alt } />
                                    </li>
                                } )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default Place