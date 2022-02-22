import { Link, NavLink } from "react-router-dom";

const AnyList = ( { arrClass, arrList, fallBackString="" } ) => {
    return (
        <div className={ `anylist-con ${ arrClass }-list-con` }>
            {
                arrList.length ? 
                <ul className={ `actual-list fd ${ arrClass }-list` }>
                    {
                        arrList.map( ( item, i ) => {
                            return (
                                <li key={ i } { ...item?.parentsPara } >
                                    {
                                        // for p, and btn
                                        // btn needs p as it's parent
                                        // passPara is then send to it's button
                                        // p for now has no passPara
                                        ( item?.whichEl === "p" || item?.whichEl === "btn" ) && 
                                        <p>
                                            {
                                                item?.whichEl === "p" ?
                                                item?.label :
                                                <button { ...item?.passPara }>
                                                    {
                                                        item?.label
                                                    }
                                                </button>
                                            }
                                        </p>
                                    }
                                    {
                                        // for navlink
                                        // we just send passPara to NavLink
                                        item?.whichEl === "navlink" && <NavLink { ...item?.passPara } > { item?.label } </NavLink>
                                    }
                                    {
                                        // for link
                                        // we just send passPara to NavLink
                                        item?.whichEl === "link" && <Link > { item?.label } </Link>
                                    }
                                </li>
                            )
                        } )
                    }
                </ul>
                :
                <p>
                    { fallBackString }
                </p>
            }
        </div>
    )
}

export default AnyList;