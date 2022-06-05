import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from "./components/Home";
import Chat from './components/Chat';

const App = () => {
    <Router>
        <Route path="/" exact component={Home}/>
    </Router>
}

export default App;