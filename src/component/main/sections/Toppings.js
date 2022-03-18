import SectionWrapper from "../../../wrapper/SectionWrapper"
import Place from "./Place";
import './Toppings.css'

const Toppings = () => {
    return (
        <>
            <Place />
            <SectionWrapper sectionClass={ "toppings" }>
            </SectionWrapper>
        </>
    )
}

export default Toppings;