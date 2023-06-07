import React from 'react';
import './App.css';
import {Main} from "../Main/Main";
import {Navigate, Route, Routes} from "react-router-dom";
import {SpeakingClock} from "../SpeakingClock/SpeakingClock";
import {Timer} from "../Timer/Timer";
import {Stopwatch} from "../Stopwatch/Stopwatch";
import {Error} from "../common/components/Error404/Error";
import {Header} from "../Header/Header";

function App() {
    return (
            <div className="App">
                <Header/>
                <Routes>
                    <Route path={'/'} element={<Main/>}/>
                    <Route path={'/timer'} element={<Timer/>}/>
                    <Route path={'/stopwatch'} element={<Stopwatch/>}/>
                    <Route path={'/speaking-clock'} element={<SpeakingClock/>}/>
                    <Route path={'/404'} element={<Error/>}/>
                    <Route path={'*'} element={<Navigate to='/404'/>}/>
                </Routes>
            </div>
    );
}

export default App;
