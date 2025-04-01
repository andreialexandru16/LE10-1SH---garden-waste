import React from "react";
import Selector from "./features/poc/bin/components/Selector";
import "./App.css";

function App() {
    return (
        <div>
            <Selector />
            <div className="app-navigation container d-flex justify-content-between py-4">
                <button className="btn btn-secondary">Back</button>
                <button className="btn btn-primary">Continue</button>
            </div>
        </div>
    );
}

export default App;
