import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
  const history = useHistory()
  return (
    <article className="nav">
      <section className="nav__section nav__logo">
        logo
      </section>
      <section className="nav__section nav__links">
        <ul className="nav__list">
          <li className="navbar__item">
            <Link className="nav__link" to="/">Dashboard</Link>
          </li>
          <li className="navbar__item">
            <Link className="nav__link" to="/foods">Stocked Foods</Link>
          </li>
          <li className="navbar__item">
            <Link className="nav__link" to="/safe-foods">Safe Foods</Link>
          </li>
          <li className="navbar__item">
            <Link className="nav__link" to="/tags">Tags</Link>
          </li>
        </ul>
        <ul className="nav__section nav__logout">
          {
            (localStorage.getItem("pp_token") !== null) ?
              <li className="navbar__item">
                <button className="nav__link btn-3 fakeLink"
                  onClick={() => {
                    localStorage.removeItem("pp_token")
                    history.push({ pathname: "/" })
                  }}
                >Logout</button>
              </li> :
              <>
                <li className="navbar__item">
                  <Link className="nav__link" to="/login">Login</Link>
                </li>
                <li className="navbar__item">
                  <Link className="nav__link" to="/register">Register</Link>
                </li>
              </>
          }
        </ul>
      </section>
    </article>
  )
}
