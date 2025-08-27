import { useLayoutEffect, useState } from "react"
import { Context } from "./Context"

const useWindowSize = () => {
    const [size, setSize] = useState([window.innerWidth, window.innerHeight])

    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight])
        }

        window.addEventListener('resize', updateSize)
        updateSize()
        return () => window.removeEventListener('resize', updateSize)
    }, [])

    return size
}

export function ContextProvider({ children }) {
    const [windowWidth, windowHeight] = useWindowSize()

    const maxWidthMobileMode = 700 //px
    const mobile_mode = windowWidth <= maxWidthMobileMode
    return (
            <Context.Provider
                value={{
                    windowWidth,
                    windowHeight,
                    mobile_mode,
                }}
            >
                {children}
            </Context.Provider>
    )
}