import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { ProjectPantry } from "./components/ProjectPantry.js"
import "./index.css"

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <ProjectPantry />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
)
