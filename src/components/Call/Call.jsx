import React from 'react'
import './Call.css';
import { AnsweredIcon, MissedIcon, VoicemailIcon, CalendarIcon, ClockIcon, InboundIcon, OutboundIcon } from '../Icons/Icons.jsx';
import Button from '../Button/Button.jsx';
const Call = ({ call, prevCall = null }) => {

    const callTypeIcons = {
        'answered': <AnsweredIcon color="white" />,
        'missed': <MissedIcon color="red" />,
        'voicemail': <VoicemailIcon color="blue" />
    };

    const callDirectionIcons = {
        'inbound': <InboundIcon color="white" />,
        'outbound': <OutboundIcon color="white" />
    };

    const callTypeIcon = callTypeIcons[call.call_type] || <InboundIcon />;
    const callDirectionIcon = callDirectionIcons[call.direction] || <OutboundIcon />;
    const callDuration = call.duration > 0 ? `${Math.ceil(call.duration / 60)} min` : null;

    const timeCreated = new Date(call.created_at);
    timeCreated.setHours(timeCreated.getHours() - 5);
    timeCreated.setMinutes(timeCreated.getMinutes() - 30);
    const formattedTime = timeCreated.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });

    const archiveCall = (id) => {
        fetch(`https://aircall-backend.herokuapp.com/activities/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                is_archived: true
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const unarchiveCall = (id) => {
        fetch(`https://aircall-backend.herokuapp.com/activities/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                is_archived: false
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    return (
        <div className="call" key={call.id}>
            <div className="call-info">
                <div className="call-info-inner">
                    <div className="call-type-icon">
                        {callDirectionIcon}
                    </div>
                    <div className="number-info">
                        <div className="call-from">+{call.from}</div>
                    </div>
                </div>
                <div className="call-time"><ClockIcon color="white" />{formattedTime}</div>
                <div className="archive-button">
                    {call.is_archived === false ? <Button onClick={() => archiveCall(call.id)}>Archive</Button> : <Button onClick={() => unarchiveCall(call.id)}>Unarchive</Button>}
                </div>
            </div>
        </div >
    )
}

export default Call