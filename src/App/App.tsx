import React from 'react';
import './App.css';
import {Main} from "../Main/Main";
import {Navigate, Route, Routes} from "react-router-dom";
import {SpeakingClock} from "../SpeakingClock/SpeakingClock";
import {Timer} from "../Timer/Timer";

function App() {
  return (

    <div className="App">
        <Routes>
            <Route path={'/'} element={<Main/>} />
            <Route path={'/timer'} element={<Timer/>} />
            <Route path={''} element={''} />
            <Route path={'/speaking-clock'} element={<SpeakingClock/>} />
            <Route path={'/404'} element={<h2>404: Page not found</h2>}/>
            <Route path={'*'} element={<Navigate to='/404'/>}/>
        </Routes>
    </div>
  );
}

export default App;
