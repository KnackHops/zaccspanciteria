import GoogleMapReact from 'google-map-react';
import { useContext, useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SectionWrapper from "../../../wrapper/SectionWrapper"
import { ScrollContext } from '../../UnderRoot';
import './Contacts.css'

const Contacts = () => {
    // zaccs panciteria
    // 16.981978895276384, 122.0175147617524
    // public market
    // 16.98172763559772, 122.01446545557926
    const googleMapData = useMemo( () => {
        return {
            center: {
                lat: 16.98185,
                lng: 122.0175147617524
            },
            zoom: 16,
            publicMarketCenter: {
                lat: 16.98172763559772,
                lng: 122.014521
            },
            layerTypes: [
                'TransitLayer'
            ]
        }
    }, [] )

    const [ seen, setSeen ] = useState( false );

    const { pathname } = useLocation();

    const { scroll } = useContext( ScrollContext )

    const seenHandler = () => {
        const body = document.querySelector("body");

        const animMultipler = body.clientWidth > 969 ? 3 : 3.3

        const whereStartAnim = ( body.clientHeight / 4 ) * animMultipler

        if ( scroll > whereStartAnim ) setSeen( true )
        else setSeen( false )
    }

    useEffect( () => {
        if ( pathname !== "/" ) setSeen( true )
        else seenHandler();
    }, [ pathname ] )

    useEffect( () => {
        if ( pathname === "/" ) seenHandler();
    }, [ scroll ] )
    console.log( process.env )
    return (   
        <SectionWrapper sectionClass={ "fd contacts" }>
                <div className={`contacts-info-con fd ${ seen && "-seen" }`}>
                    <div className='contacts-info-inside fd'>
                        <h2>
                            Contact
                        </h2>
                        <div className='contacts-info-body'>
                            <p style={ { fontWeight: "1000" } }>
                                Call us
                            </p>
                            <p>
                               0997 170 0167
                            </p>
                            <p style={ { fontWeight: "1000" } }>
                                Visit our facebook page
                            </p>
                            <ul>
                                <li>
                                    <a href='https://www.facebook.com/ZACCs-Shawarma-2327963654123657' target={"_blank"} rel="noreferrer" > Zacc's </a>
                                </li>
                                <li>
                                    <a href='https://www.facebook.com/cherrypie.nicolas' target={"_blank"} rel="noreferrer" >Cherry Pie Telan ( Owner )</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='address-info-body fd'>
                        <h3>Address</h3>
                        <p>Buensuceso st., Purok 5, Zone 2</p>
                        <p>San Mariano, Isabela</p>
                    </div>
                </div>
                <div className='map-container' style={ { height: '100%', width: '100%' } }>
                    <GoogleMapReact
                        bootstrapURLKeys={ { key: process.env.REACT_APP_MAP_API } }
                        defaultCenter={ googleMapData.center }
                        defaultZoom={ googleMapData.zoom }
                        layerTypes={ googleMapData.layerTypes }
                    >  
                        <div className='palengke-pin' { ...googleMapData.publicMarketCenter } >

                        </div>
                        <div className='zaccs-pin' { ...googleMapData.center }>
                            
                        </div>
                    </GoogleMapReact>
                </div>
        </SectionWrapper>
    )
}

export default Contacts;