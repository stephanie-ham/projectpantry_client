import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import "./ProjectPantry.css"
import { SafeFoodBanner } from "./safefood/SafeFoodBanner"
import { SafeFoodProvider } from "./safefood/SafeFoodProvider"

export const ProjectPantry = () => (
  <>
    <Route render={() => {
      if (localStorage.getItem("pp_token")) {
        return <>
          <Route>
            <NavBar />
          </ Route>
          <SafeFoodProvider>
            <Route>
              <SafeFoodBanner />
            </Route>
          </SafeFoodProvider>
          <Route>
            <ApplicationViews />
          </Route>
        </>
      } else {
        return <Redirect to="/login" />
      }
    }} />

    <Route path="/login">
      <Login />
    </Route>

    <Route path="/register">
      <Register />
    </Route>

  </>
)
