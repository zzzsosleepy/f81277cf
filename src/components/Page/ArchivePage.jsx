import React from 'react'
import CallList from '../CallList/CallList.jsx'

const ArchivePage = () => {
    return (
        <>
            <CallList filter="archived" />
        </>
    )
}

export default ArchivePage