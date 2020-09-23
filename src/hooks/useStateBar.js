import { useState } from 'react'

export const useStateBar = ({initialState}) => {

    const [state, setState] = useState(initialState)

    const open = () => setState(!state)
    const reset = () => setState(false)
    const close = () => setState(!state)

    return {
        state,
        open,
        reset,
        close
}
}
