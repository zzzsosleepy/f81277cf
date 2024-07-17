import React, { useEffect, useState, useTransition } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './Header.jsx';

// Components
import CallsPage from './components/Page/CallsPage.jsx';
import ArchivePage from './components/Page/ArchivePage.jsx';
import { CallsIcon, ArchiveIcon } from './components/Icons/Icons.jsx';

const App = () => {
  const [isPending, startTransition] = useTransition();
  const [currentPage, setCurrentPage] = useState('unarchived');

  const selectPage = (page) => {
    startTransition(() => {
      setCurrentPage(page);
    });
  }

  return (
    <div className='container'>
      <Header selectPage={selectPage} />
      <div className="container-view">
        {/* List of calls */}
        {currentPage === 'unarchived' && <><h1 className="text-light"><CallsIcon />Calls</h1><CallsPage /></>}
        {currentPage === 'archive' && <><h1 className="text-light"><ArchiveIcon />Archive</h1><ArchivePage /></>}
      </div>
      {/* https://aircall-backend.onrender.com */}
      {/* 
    GET - BASE_URL/activities: get calls to display in the Activity Feed
    GET - BASE_URL/activities/<call_id> retrieve a specific call details
    PATCH - BASE_URL/activities/<call_id> update a call. The only field updatable is is_archived (bool). You'll need to send a JSON in the request body:

{
  is_archived: true
}

    PATCH - BASE_URL/reset: Reset all calls to initial state (usefull if you archived all calls).

Call object

    id - unique ID of call
    created_at - creation date
    direction - inbound or outbound call
    from - caller's number
    to - callee's number
    via - Aircall number used for the call
    duration - duration of a call (in seconds)
    is_archived - call is archived or not
    call_type - can be a missed, answered or voicemail call.
 */}
    </div>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);

export default App;