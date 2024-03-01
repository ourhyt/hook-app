import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {TodoApp} from "./08-useReducer/TodoApp.jsx";

import './08-useReducer/intro-reducer.js'
import {MainApp} from "./09-useContext/MainApp.jsx";
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <React.StrictMode>
          <MainApp />
      </React.StrictMode>
  </BrowserRouter>,
)
