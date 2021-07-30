import React, { useState } from 'react'
import Homepage from './components/homepage/homepage'

import AppContext from './AppContext'

export default function App() {
    const [timerStatus,setTimerStatus] = useState(false)

    const globalState={
        timerStatus,setTimerStatus
    }

    return (
        <div>
            <AppContext.Provider value={globalState}>
            <Homepage/>
            </AppContext.Provider>

        </div>
    )
}
