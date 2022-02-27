import { useContext, useEffect, useMemo, useState } from "react"
import { useLocation } from "react-router-dom"
import SectionWrapper from "../../../wrapper/SectionWrapper"
import { ScrollContext } from "../../UnderRoot"
import './Menu.css'

const MenuPriceItem = ( { label, price } ) => {
    return <li> <p> <span> { label } </span> <span> ------------------ </span> <span> { price } ₱ </span> </p> </li>
}

const Menu = () => {

    const conchaPrices = useMemo( () => {
        return [
            {
                label: "Regular",
                price: 60
            },
            {
                label: "Special",
                price: 80
            }
        ]
    }, [] )

    const patongPrices = useMemo( () => {
        return [
            {
                label: "Regular",
                price: 60
            },
            {
                label: "Special",
                price: 80
            },
            {
                label: "Jumbo",
                price: 100
            },
            {
                label: "Overload",
                price: 150
            }
        ]
    }, [] )

    const lomiPrices = useMemo( () => {
        return [
            {
                label: "Regular",
                price: 60
            },
            {
                label: "Overload",
                price: 120
            }
        ]
    }, [] )

    const sisigPrices = useMemo( () => {
        return [
            {
                label: "Regular",
                price: 100
            }
        ]
    }, [])

    const sidePrices = useMemo( () => {
        return [
            {
                label: "Lumpia",
                price: 5
            },
            {
                label: "Fresh Lumpia",
                price: "2pcs, 100"
            },
            {
                label: "Buko Halo",
                price: 60
            }
        ]
    }, [] )

    const bilaoPrices = useMemo( () => {
        return [
            {
                label: "Small",
                price: 330
            },
            {
                label: "Medium",
                price: 530
            },
            {
                label: "Large",
                price: 1030
            }
        ]
    }, [] )

    const [ animClass, setdAnimClass ] = useState( "" );
    const { scroll } = useContext( ScrollContext );
    const { pathname } = useLocation();

    useEffect( () => {
        // on home
        // picture height is 2850px TOTAL
        // the header doesn't count since it's fixed, positioned
        // we deduct 200 for smoother transition
        // we can't deduct too much because of smaller viewports
        // the sc is the top of the viewable screen

        if ( scroll > 2650 && pathname === "/" ) {
            console.log( "hey!" )
        } 
    }, [ scroll ] )

    return (
        <SectionWrapper sectionClass={ "menu" }>
            <h2>
                Menu
            </h2>
            <ul className="menu-level">
                <li>
                    <h3>
                        Pancit
                    </h3>
                    <ul className="item-level">
                        <li>
                            <p> Pancit Concha </p>
                            <ul className="price-level">
                                {
                                    conchaPrices?.length &&
                                    conchaPrices.map( ( item, i ) => {
                                        return <MenuPriceItem key={ i } { ...item } />
                                    } )
                                }
                            </ul>
                        </li>
                        <li>
                            <p> Batil Patong </p>
                            <ul className="price-level">
                                {
                                    patongPrices?.length &&
                                    patongPrices.map( ( item, i ) => {
                                        return <MenuPriceItem key={ i } { ...item } />
                                    } )
                                }
                            </ul>
                        </li>
                        <li>
                            <p> Lomi </p>
                            <ul className="price-level">
                                {
                                    lomiPrices?.length &&
                                    lomiPrices.map( ( item, i ) => {
                                        return <MenuPriceItem key={ i } { ...item } />
                                    } )
                                }
                            </ul>
                        </li>
                        <li>
                            <p> Pancit Sisig </p>
                            <ul className="price-level">
                                {
                                    sisigPrices?.length &&
                                    sisigPrices.map( ( item, i ) => {
                                        return <MenuPriceItem key={ i } { ...item } />
                                    } )
                                }
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <h3>
                        Sides
                    </h3>
                    <ul className="price-level">
                        {
                            sidePrices.length &&
                            sidePrices.map( ( item, i ) => {
                                return <MenuPriceItem key={ i } { ...item } />
                            } )
                        }
                    </ul>
                </li>
                <li>
                    <h3>
                        Bilao
                    </h3>
                    <ul className="item-level">
                        <li>
                            <p>
                                Batil Patong
                            </p>
                            <ul className="price-level">
                                {
                                    bilaoPrices.length &&
                                    bilaoPrices.map( ( item, i ) => {
                                        return <MenuPriceItem key={ i } { ...item } />
                                    } )
                                }
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </SectionWrapper>
    )
}

export default Menu;