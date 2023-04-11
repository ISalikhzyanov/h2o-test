import React from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import SomeList from "./pages/SomeList";
import Box from "./pages/Box";
import EmployeeDatabase from "./pages/employee/EmployeeDatabase";
import Balance from "./pages/Balance";
import Diagram from "./pages/Diagram";
import Settings from "./pages/Settings";
import Navigation from "./components/navigation/Navigation";
import PageTabbar from "./components/page-tabbar/PageTabbar";

function App() {
    return (
        <div className="app">
            <Navigation />
            <div className="app_page">
                {useLocation().pathname === '/employee' && <PageTabbar/>}
                <Routes>
                    <Route path="/" element={ <Home /> } />
                    <Route path="/calendar" element={ <Calendar /> } />
                    <Route path="/some-list" element={ <SomeList /> } />
                    <Route path="/box" element={ <Box /> } />
                    <Route path="/employee" element={ <EmployeeDatabase /> } />
                    <Route path="/balance" element={ <Balance /> } />
                    <Route path="/diagram" element={ <Diagram /> } />
                    <Route path="/settings" element={ <Settings /> } />
                </Routes>
            </div>
        </div>
    );
}

export default App;
