import React, { useState, useEffect } from 'react'
import './CallList.css';
import Call from '../Call/Call.jsx';

const CallList = () => {
    const [calls, setCalls] = useState([]);

    const callList = [
        {
            "direction": "inbound",
            "from": 1,
            "to": 2,
            "via": 1,
            "duration": 0,
            "is_archived": false,
            "call_type": "answered",
            "id": "6685a0df24a7a79ae0c50f8f",
            "created_at": "2024-07-03T19:05:03.506Z"
        },
        {
            "direction": "outbound",
            "from": 2,
            "to": 1,
            "via": 1,
            "duration": 0,
            "is_archived": true,
            "call_type": "answered",
            "id": "6685b79524326ad725d48041",
            "created_at": "2024-07-03T20:41:57.436Z"
        },
        {
            "direction": "inbound",
            "from": 1,
            "to": 2,
            "via": 1,
            "duration": 0,
            "is_archived": false,
            "call_type": "answered",
            "id": "66930c020cd8d574418d7b61",
            "created_at": "2024-07-13T23:21:38.961Z"
        },
        {
            "direction": "outbound",
            "from": 2,
            "to": 1,
            "via": 1,
            "duration": 30,
            "is_archived": true,
            "call_type": "answered",
            "id": "66930d1d0cd8d574418d7bb2",
            "created_at": "2024-07-13T23:26:21.652Z"
        },
        {
            "direction": "outbound",
            "from": 2,
            "to": 4,
            "via": 1,
            "duration": 647,
            "is_archived": false,
            "call_type": "answered",
            "id": "669318a70cd8d574418d802b",
            "created_at": "2024-07-14T00:15:35.243Z"
        },
        {
            "direction": "outbound",
            "from": 2,
            "to": 4,
            "via": 1,
            "duration": 112,
            "is_archived": true,
            "call_type": "answered",
            "id": "6694319b5385840729149738",
            "created_at": "2024-07-14T20:14:19.078Z"
        },
        {
            "direction": "inbound",
            "from": 4,
            "to": 2,
            "via": 1,
            "duration": 112,
            "is_archived": false,
            "call_type": "missed",
            "id": "669474f1ce54ad7fec42b1cb",
            "created_at": "2024-07-15T01:01:37.645Z"
        },
        {
            "direction": "inbound",
            "from": 4,
            "to": 2,
            "via": 1,
            "duration": 112,
            "is_archived": false,
            "call_type": "missed",
            "id": "66952b5a0d89c9a6ec7cc8cb",
            "created_at": "2024-07-15T13:59:54.717Z"
        },
        {
            "direction": "inbound",
            "from": 4,
            "to": 2,
            "via": 1,
            "duration": 806,
            "is_archived": false,
            "call_type": "answered",
            "id": "6695780e0d89c9a6ec7ce3a7",
            "created_at": "2024-07-15T19:27:10.703Z"
        },
        {
            "direction": "inbound",
            "from": 123456,
            "to": 2,
            "via": 1,
            "duration": 0,
            "is_archived": true,
            "call_type": "answered",
            "id": "66958aa70d89c9a6ec7ce718",
            "created_at": "2024-07-15T20:46:31.888Z"
        },
        {
            "direction": "inbound",
            "from": 13772301902,
            "to": 18742869541,
            "via": 19453102789,
            "duration": 10,
            "is_archived": true,
            "call_type": "answered",
            "id": "66958b950d89c9a6ec7ce74a",
            "created_at": "2024-07-15T20:50:29.315Z"
        },
        {
            "direction": "inbound",
            "from": 13772301902,
            "to": 18742869541,
            "via": 13772301902,
            "duration": 15,
            "is_archived": true,
            "call_type": "answered",
            "id": "66958c360d89c9a6ec7ce758",
            "created_at": "2024-07-15T20:53:10.018Z"
        },
        {
            "direction": "outbound",
            "from": 18742869541,
            "to": 13772301902,
            "via": 18742869541,
            "duration": 0,
            "is_archived": true,
            "call_type": "answered",
            "id": "66958c7d0d89c9a6ec7ce75b",
            "created_at": "2024-07-15T20:54:21.174Z"
        },
        {
            "direction": "inbound",
            "from": 123456,
            "to": 2,
            "via": 1,
            "duration": 0,
            "is_archived": true,
            "call_type": "answered",
            "id": "66958f920d89c9a6ec7ce7ec",
            "created_at": "2024-07-15T21:07:30.124Z"
        },
        {
            "direction": "outbound",
            "from": 18742869541,
            "to": 13772301902,
            "via": 18742869541,
            "duration": 0,
            "is_archived": true,
            "call_type": "answered",
            "id": "66958fd40d89c9a6ec7ce7f3",
            "created_at": "2024-07-15T21:08:36.127Z"
        },
        {
            "direction": "outbound",
            "from": 13772301902,
            "to": 15803554536,
            "via": 13772301902,
            "duration": 14,
            "is_archived": false,
            "call_type": "answered",
            "id": "669590b10d89c9a6ec7ce811",
            "created_at": "2024-07-15T21:12:17.593Z"
        },
        {
            "direction": "inbound",
            "from": 15803554536,
            "to": 18742869541,
            "via": 15803554536,
            "duration": 112,
            "is_archived": true,
            "call_type": "missed",
            "id": "6695939a0d89c9a6ec7ce916",
            "created_at": "2024-07-15T21:24:42.784Z"
        }
    ];

    useEffect(() => {
        // fetch('https://aircall-backend.onrender.com/activities')
        //   .then((response) => response.json())
        //   .then((data) => setCalls(data))
        setCalls(callList);
    }, []);

    return (
        <div className="call-list">
            <h1>Call List</h1>
            {calls.map((call, index) => {
                return (
                    <Call call={call} key={index} />
                )
            })}
        </div>
    )
}

export default CallList