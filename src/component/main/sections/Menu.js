import SectionWrapper from "../../../wrapper/SectionWrapper"
import './Menu.css'

const Menu = () => {
    return (
        <SectionWrapper sectionClass={ "menu" }>
            <h2>
                Menu
            </h2>
            <ul>
                <li>
                    <p>
                        Pancit Concha
                    </p>
                </li>
                <li>
                    <p>
                        Batil Patong
                    </p>
                </li>
                <li>
                    <p>
                        Lomi
                    </p>
                </li>
                <li>
                    <p>
                        Pancit Sisig
                    </p>
                </li>
            </ul>
        </SectionWrapper>
    )
}

export default Menu;