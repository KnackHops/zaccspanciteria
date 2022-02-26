import { createContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom"
import Header from "./header/Header";
import Main from "./main/Main";
import Home from "./main/sections/Home";
import Contacts from "./main/sections/Contacts";
import Menu from "./main/sections/Menu";
import Toppings from "./main/sections/Toppings";
import Footer from "./main/Footer";
import useScrollMonitor from "../hooks/useScrollMonitor";

const ScrollContext = createContext( null );

const UnderRoot = () => {
    const { scroll } = useScrollMonitor();

    return (
        <div className="underroot">
            <ScrollContext.Provider value={ { scroll } } >
                <Header />
                <Routes>
                    <Route path="" element={ <Main /> }>
                        <Route index element={ <Home /> } />
                        <Route path="contacts" element={ <Contacts /> } />
                        <Route path="menu" element={ <Menu /> } />
                        <Route path="toppings" element={ <Toppings /> } />
                    </Route>
                </Routes>
                <Footer />
            </ScrollContext.Provider>
        </div>  
    )
}

export default UnderRoot;
export { ScrollContext };