import { useState, useEffect } from "react";
import { throttle } from "throttle-debounce";

const useScrollMonitor = () => {
    const [ scroll, setScroll ] = useState()

    const scrollHandler = e => {
        // get the current scroll value of the html
        const st = document.querySelector( "html" ).scrollTop;

        setScroll( st )
    }

    useEffect( () => {
        const throttled = throttle( 500, scrollHandler )
        window.addEventListener( "scroll", throttled );

        return () => window.removeEventListener( "scroll", throttled )
    }, [] )

    return { scroll }
}

export default useScrollMonitor;