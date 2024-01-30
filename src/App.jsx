// App.jsx
import React, { useState } from 'react';
import { ProgressProvider } from './components/ProgressContext';  // Update the import statement
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Top from "./components/Top";
import Page1 from "./components/Page1";
import PageN from "./components/PageN";
import PageO from "./components/PageO";
import PageP from "./components/PageP";
import PageQ from "./components/PageQ";
import PageR from "./components/PageR";
import PageS from "./components/PageS";
import PageT from "./components/PageT";
import PageX from "./components/PageX";
import PageU from "./components/PageU";
import PageV from "./components/PageV";

// Import Tooltip CSS
import './components/ToolTip.css';

function App() {
  const [progress, setProgress] = useState(0);

  return (
    <ProgressProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Top />} />
            <Route path="/Top" element={<Top />} />
            <Route path="/Page1" element={<Page1 setProgress={setProgress} />} />
            <Route path="/PageN" element={<PageN />} />
            <Route path="/PageO" element={<PageO />} />
            <Route path="/PageP" element={<PageP />} />
            <Route path="/PageQ" element={<PageQ />} />
            <Route path="/PageR" element={<PageR />} />
            <Route path="/PageS" element={<PageS />} />
            <Route path="/PageT" element={<PageT />} />
            <Route path="/PageX" element={<PageX />} />
            <Route path="/PageU" element={<PageU />} />
            <Route path="/PageV" element={<PageV />} />
          </Routes>
        </Router>
      </div>
    </ProgressProvider>
  );
}

export default App;
