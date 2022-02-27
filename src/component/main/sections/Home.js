import SectionWrapper from "../../../wrapper/SectionWrapper"
import Gallery from "./Gallery";
import Menu from "./Menu";
import './Home.css';
import Place from "./Place";

const Home = () => {
    return (
        <>
            <Gallery />
            <Menu />
            <Place />
        </>
    )
}

export default Home;