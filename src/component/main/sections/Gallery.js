import { useContext } from "react";
import SectionWrapper from "../../../wrapper/SectionWrapper"
import { ScrollContext } from "../../UnderRoot";

const Gallery = () => {
    const { scroll } = useContext( ScrollContext );

    return (
        <SectionWrapper sectionClass={ `${ scroll ? "-hide-design" : "" } home-gallery` }>
            <div className="paragraph-con fd">
                <h2> Pancit </h2>
                <p> A warm reminder, of comfort and delight, from times passed. </p>
                <p> But, the north remembers </p>
            </div>
            <div className="actual-gallery-con fd">
                <div className="actual-gallery-inside">
                    <ul className="fd">
                        <li>
                            <span className="gallery-img-con">
                                <img src="https://i1.lensdump.com/i/gdCwnM.jpg" alt="Pancit gisado with pork chop, egg, and ilocano dish igado on top" />
                            </span>
                            <span className="gallery-descrip-con">
                                <h4>
                                    Concha's Pancit
                                </h4>
                                <p>
                                    The classic pancit gisado, this time with Inno Concha's legacy intact. Decorated with lechon kawali and the Ilocano dish Igado!
                                </p>
                            </span>
                        </li>
                        <li>
                            <span className="gallery-img-con">
                                <img src="https://i.lensdump.com/i/gdCbVA.jpg" alt="Pancit batil patong, with poached egg, pork chop, meatballs, siomai, lumpia and pan fried vegetables with grounded meat on top" />
                            </span>
                            <span className="gallery-descrip-con">
                                <h4>
                                    Pancit Batil Patong
                                </h4>
                                <p>
                                    Enjoy Tuguegarao's specialty. A poached egg on top, and teeming with, different toppings to make your day just a tad fuller!
                                </p>
                            </span>
                        </li>
                        <li>
                            <span className="gallery-img-con">
                                <img src="https://i2.lensdump.com/i/gdCx5Q.jpg" alt="Lomi, noodle soup dish, with thick broth. Egg, pork chop, calamarie, and siomai on top"/>
                            </span>
                            <span className="gallery-descrip-con">
                                <h4>
                                    Lomi
                                </h4>
                                <p>
                                    Day is too cold for you? Need something to bring you back to life? Well, here it is, the pancit to eat for warming needs!
                                </p>
                            </span>
                        </li>
                        <li>
                            <span className="gallery-img-con">
                                <img src="https://i3.lensdump.com/i/gdC5Ta.jpg" alt="pancit sisig, a pancit batil patong that has an poached egg, and sisig on top" />
                            </span>
                            <span className="gallery-descrip-con">
                                <h4>
                                    Pancit Sisig
                                </h4>
                                <p>
                                    An original twist! Who doesn't love sisig? Who doesn't love pancit? NO ONE, EVERYONE LOVES THEM. So, why not both!
                                </p>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default Gallery;