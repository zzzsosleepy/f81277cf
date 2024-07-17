import React from 'react'
import CallList from '../CallList/CallList.jsx'

const CallsPage = () => {
    return (
        <>
            <CallList filter={'unarchived'} />
        </>
    )
}

export default CallsPage