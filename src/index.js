import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { ProjectPantry } from "./components/ProjectPantry.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
import "./styles/form.css"
import "./styles/button.css"

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <ProjectPantry />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
)
