import React from 'react'
import CallList from '../CallList/CallList.jsx'

const ArchivePage = () => {
    return (
        <>
            {/* List of all archived calls */}
            <CallList filter="archived" />
        </>
    )
}

export default ArchivePage