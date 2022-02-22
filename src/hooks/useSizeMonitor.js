import { useState } from "react";

const useSizeMonitor = () => {
    const [ observedElements, setObserveElements ] = useState( [] );

    const resObserver = new ResizeObserver( entries => {
        const _observedElements = entries.map( ( { target, contentRect } ) => {
            return {
                el: target,
                height: contentRect.height,
                width: contentRect.width
            }
        } )

        setObserveElements( _observedElements )
    } )

    const entryObserver = ( el ) => {
        resObserver.observe( el );
    }

    const removeObserver = el => {
        resObserver.unobserve( el )
    }

    return { entryObserver, removeObserver, observedElements }
}

export default useSizeMonitor;