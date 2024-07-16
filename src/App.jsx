import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';

// Components
import CallPage from './components/Page/CallPage.jsx';
import ArchivePage from './components/Page/ArchivePage.jsx';
import CallList from './components/CallList/CallList.jsx';

const App = () => {

  const [currentPage, setCurrentPage] = useState('calls');

  useEffect(() => {
    console.log('Current page:', currentPage);
  }
    , [currentPage]);

  return (
    <div className='container'>
      <Header />
      <div className="container-view">
        {/* List of calls */}
        {currentPage === 'calls' && <CallPage />}
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

ReactDOM.render(<App />, document.getElementById('app'));

export default App;