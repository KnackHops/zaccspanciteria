import SectionWrapper from "../../../wrapper/SectionWrapper"
import Gallery from "./Gallery";
import Menu from "./Menu";
import './Home.css';

const Home = () => {
    return (
        <>
            <Gallery />
            <Menu />
            <SectionWrapper sectionClass={ "home-testimony" }>

            </SectionWrapper>
        </>
    )
}

export default Home;