// Import necessary libraries and components
import React, { useEffect, useState, useTransition } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './Header.jsx';

// Import other components and icons
import CallsPage from './components/Page/CallsPage.jsx';
import ArchivePage from './components/Page/ArchivePage.jsx';
import { CallsIcon, ArchiveIcon } from './components/Icons/Icons.jsx';

// Main App Component
const App = () => {
  // useTransition hook for handling transitions, useful for state updates
  const [isPending, startTransition] = useTransition();
  // State for tracking the current page ('unarchived' or 'archive')
  const [currentPage, setCurrentPage] = useState('unarchived');

  // Function to handle page selection, wrapped in a transition for smoother updates
  const selectPage = (page) => {
    startTransition(() => {
      setCurrentPage(page); // Update the current page state
    });
  };

  return (
    <div className="container">
      {/* Header component with a prop to handle page selection */}
      <Header selectPage={selectPage} />

      <div className="container-view">
        {/* Conditionally render the CallsPage component if currentPage is 'unarchived' */}
        {currentPage === 'unarchived' && (
          <>
            <h1 className="text-light"><CallsIcon /> Calls</h1>
            <CallsPage />
          </>
        )}
        {/* Conditionally render the ArchivePage component if currentPage is 'archive' */}
        {currentPage === 'archive' && (
          <>
            <h1 className="text-light"><ArchiveIcon /> Archive</h1>
            <ArchivePage />
          </>
        )}
      </div>
    </div>
  );
};

// Get the root container from the DOM
const container = document.getElementById('app');
// Create a root for React rendering
const root = createRoot(container);
// Render the App component into the root
root.render(<App />);

// Export the App component as the default export
export default App;
