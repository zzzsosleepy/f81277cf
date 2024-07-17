import React from 'react'
import './Call.css';
import { AnsweredIcon, MissedIcon, VoicemailIcon, CalendarIcon, ClockIcon, InboundIcon, OutboundIcon } from '../Icons/Icons.jsx';

const Call = ({ call }) => {

    const callTypeIcons = {
        'answered': <AnsweredIcon color="green" />,
        'missed': <MissedIcon color="red" />,
        'voicemail': <VoicemailIcon color="blue" />
    };

    const callDirectionIcons = {
        'inbound': <InboundIcon color="red" />,
        'outbound': <OutboundIcon color="green" />
    };

    const callTypeIcon = callTypeIcons[call.call_type] || <PhoneOutbound />;
    const callDirectionIcon = callDirectionIcons[call.direction] || <PhoneOutbound />;
    const callDuration = call.duration > 0 ? `${Math.ceil(call.duration / 60)} min` : null;

    // Convert the call.created_at to be formatted as: Month Day, Year
    const date = new Date(call.created_at);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);

    return (
        <div className="call-container">
            <h4><CalendarIcon />{formattedDate}</h4>
            <hr />
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
                <p>{callTypeIcon} Result: {call.call_type}</p>
                {/* <p>{call.is_archived}</p> */}
            </div >
        </div>
    )
}

export default Call