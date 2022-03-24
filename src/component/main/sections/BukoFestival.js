import { useEffect } from "react"
import SectionWrapper from "../../../wrapper/SectionWrapper"
import './BukoFestival.css'

const BukoFestival = () => {
    // buko links
    // https://i1.lensdump.com/i/rXTuQa.jpg
    // https://i2.lensdump.com/i/rXTDne.jpg
    // https://i3.lensdump.com/i/rXTN5k.jpg
    // https://i.lensdump.com/i/rXTfTx.jpg
    // https://i1.lensdump.com/i/rXEigC.jpg
    // https://i2.lensdump.com/i/rXEjs5.jpg

    return (
        <SectionWrapper sectionClass={ "buko-festival" }>
            <h2>{ `Buko Halo & Salad` }</h2>
            <div className="buko-list-con">
                <ul className="fd">
                    <li>
                        <img src="https://i2.lensdump.com/i/rXTDne.jpg" />
                    </li>
                    <li>
                        <img src="https://i3.lensdump.com/i/rXTN5k.jpg" />
                    </li>
                    <li>
                        <img src="https://i.lensdump.com/i/rXTfTx.jpg" />
                    </li>
                    <li>
                        <img src="https://i1.lensdump.com/i/rXTuQa.jpg" />
                    </li>
                    <li>
                        <img src="https://i2.lensdump.com/i/rXEjs5.jpg" />
                    </li>
                    <li>
                        <img src="https://i1.lensdump.com/i/rXEigC.jpg" />
                    </li>
                </ul>
            </div>
        </SectionWrapper>
    )
}

export default BukoFestival;