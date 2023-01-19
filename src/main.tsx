import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {AllRoutes} from "./lib/file-based-router";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AllRoutes/>
  </React.StrictMode>,
)
