// Import necessary libraries and components
import React, { useState, useEffect } from 'react';
import './CallList.css'; // Importing styles for CallList
import Call from '../Call/Call.jsx'; // Importing Call component
import { CalendarIcon, ArchiveIcon } from '../Icons/Icons.jsx'; // Importing icons
import Button from '../Button/Button.jsx'; // Importing Button component

// Options for filtering the call list
const FILTER_OPTIONS = {
    UNARCHIVED: 'unarchived',
    ARCHIVED: 'archived',
};

// CallList Component
const CallList = ({ filter = 'unarchived' }) => {
    const [calls, setCalls] = useState([]); // State to store calls data

    const displayedDates = new Set(); // Set to keep track of displayed dates

    // Fetch calls data from the API on component mount
    useEffect(() => {
        fetch('https://aircall-backend.onrender.com/activities')
            .then((response) => response.json())
            .then((data) => setCalls(data))
            .catch((error) => console.error('Error fetching calls:', error));
    }, []);

    // Filter calls based on the selected filter option
    const filteredCalls = calls.filter(call => {
        if (filter === FILTER_OPTIONS.ARCHIVED) {
            return call.is_archived === true;
        }
        return call.is_archived === false;
    });

    // Function to archive all calls
    const archiveAllCalls = () => {
        const updatedCalls = calls.map(call => ({ ...call, is_archived: true }));
        setCalls(updatedCalls);

        updatedCalls.forEach(call => {
            fetch(`https://aircall-backend.herokuapp.com/activities/${call.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ is_archived: true })
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        });
    };

    // Function to reset all calls
    const resetCalls = () => {
        const updatedCalls = calls.map(call => ({ ...call, is_archived: false }));
        setCalls(updatedCalls);
        fetch(`https://aircall-backend.herokuapp.com/reset`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    // Function to unarchive all calls
    const unarchiveAllCalls = () => {
        const updatedCalls = calls.map(call => ({ ...call, is_archived: false }));
        setCalls(updatedCalls);

        updatedCalls.forEach(call => {
            fetch(`https://aircall-backend.herokuapp.com/activities/${call.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ is_archived: false })
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        });
    };

    return (
        <div className="call-list">
            {/* Render the appropriate button based on the filter */}
            {filter === 'unarchived' && (
                <Button className="archive-all-button" onClick={archiveAllCalls}>
                    <ArchiveIcon /> Archive all calls
                </Button>
            )}
            {filter === 'archived' && (
                <Button className="archive-all-button" onClick={unarchiveAllCalls}>
                    <ArchiveIcon /> Unarchive all calls
                </Button>
            )}

            {/* Render the list of filtered calls */}
            {filteredCalls.map((call, index) => {
                // Convert call.created_at to a formatted date string
                const date = new Date(call.created_at);
                const options = { year: 'numeric', month: 'long', day: 'numeric' };
                const formattedDate = date.toLocaleDateString('en-US', options);
                const showDate = !displayedDates.has(formattedDate);
                if (showDate) {
                    displayedDates.add(formattedDate);
                }
                return (
                    <div key={index}>
                        {/* Display date header if it's a new date */}
                        {showDate && (
                            <>
                                <h4><CalendarIcon color="white" /> {formattedDate}</h4>
                                <hr />
                            </>
                        )}
                        {/* Render Call component */}
                        <Call call={call} />
                    </div>
                );
            })}
        </div>
    );
};

export default CallList;
