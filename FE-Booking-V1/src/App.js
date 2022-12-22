import './App.css';
import React from 'react';
import {Routes, Route} from "react-router-dom"

import routes from './routes';

function App() {
  return (
      <div className='App'>
        <Routes>
          {
            routes.map((route, index)=>{
              return (<Route key={index} path={route.path} element={route.element}/>)
            })
          }
        </Routes>
      </div>
  );
}

export default App;
