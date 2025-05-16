if (typeof global === 'undefined') {
  window.global = window;
}
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SideProv } from './context/SideProv.jsx';
import { DataProvider } from './context/dataContext.jsx';
import { EditorProvider } from './context/editorFunctions.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SideProv>
      <DataProvider>
        <EditorProvider>
          <App />
        </EditorProvider>
      </DataProvider>
    </SideProv>
  </React.StrictMode>
)
