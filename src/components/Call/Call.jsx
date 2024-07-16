import React from 'react'
import './Call.css';
import { AnsweredIcon, MissedIcon, VoicemailIcon, CalendarIcon, ClockIcon, InboundIcon, OutboundIcon } from '../Icons/Icons.jsx';

const Call = ({ call }) => {

    const getCallTypeIcon = () => {
        switch (call.call_type) {
            case 'answered':
                return <AnsweredIcon color="green" />
            case 'missed':
                return <MissedIcon color="red" />
            case 'voicemail':
                return <VoicemailIcon color="blue" />
            default:
                return <PhoneOutbound />
        }
    }

    const getCallDirectionIcon = () => {
        switch (call.direction) {
            case 'inbound':
                return <InboundIcon color="red" />
            case 'outbound':
                return <OutboundIcon color="green" />
            default:
                return <PhoneOutbound />
        }
    }

    // Determine the call type and direction icons
    const callDirectionIcon = getCallDirectionIcon();
    const callTypeIcon = getCallTypeIcon();
    const callDuration = call.duration > 0 ? Math.round(call.duration / 60) + ' min' : null;

    return (
        <div className="call" key={call.id}>
            <div className="call-title">
                <div className="call-icon">
                    {callDirectionIcon}
                </div>
                {callDuration && (
                    <div className="call-icon">
                        <ClockIcon />{callDuration}
                    </div>
                )}
            </div >
            <p>From: {call.from}</p>
            <p>To: {call.to}</p>
            <p><CalendarIcon />Date/Time: {call.created_at}</p>
            <p>{callTypeIcon} Result: {call.call_type}</p>
            {/* <p>{call.is_archived}</p> */}
        </div >
    )
}

export default Call