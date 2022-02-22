import { Routes, Route } from "react-router-dom"
import Header from "./header/Header";
import Main from "./main/Main";
import Home from "./main/sections/Home";
import Contacts from "./main/sections/Contacts";
import Menu from "./main/sections/Menu";
import Toppings from "./main/sections/Toppings";

const UnderRoot = () => {
    return (
        <div className="underroot">
            <Header />
            <Routes>
                <Route path="" element={ <Main /> }>
                    <Route index element={ <Home /> } />
                    <Route path="contacts" element={ <Contacts /> } />
                    <Route path="menu" element={ <Menu /> } />
                    <Route path="toppings" element={ <Toppings /> } />
                </Route>
            </Routes>
        </div>  
    )
}

export default UnderRoot;