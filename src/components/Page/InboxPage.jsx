import React from 'react'
import CallList from '../CallList/CallList.jsx'
import './InboxPage.css';

const InboxPage = () => {
    return (
        <div className="inbox-container">
            <CallList filter={'incoming'} />
        </div>
    )
}

export default InboxPage