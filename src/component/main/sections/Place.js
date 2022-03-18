import { useCallback, useEffect, useMemo, useState } from "react"
import SectionWrapper from "../../../wrapper/SectionWrapper"
import './Place.css'

const Place = () => {
    // we can separate this whole thing as its own component, but I don't see any extra use for now
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
        ].map( src => {
            return {
                src,
                alt: `plants`
            }
        } )
    }, [ ] )

    return (
        <SectionWrapper sectionClass={ "home-place" }>
        </SectionWrapper>
    )
}

export default Place