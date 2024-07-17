import React from 'react'
import CallList from '../CallList/CallList.jsx'

const CallsPage = () => {
    return (
        <>
            {/* List of all unarchived calls */}
            <CallList filter={'unarchived'} />
        </>
    )
}

export default CallsPage