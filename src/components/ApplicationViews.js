import React from "react"
import { Route } from "react-router-dom"

import { FoodProvider } from "./food/FoodProvider.js"
import { FoodList } from "./food/FoodList.js"

export const ApplicationViews = () => {
  return <>
    <main style={{
      margin: "5rem 2rem"
    }}>
      <h1>Application views</h1>
      <FoodProvider>
        <Route exact path="/foods">
          <FoodList />
        </Route>
      </FoodProvider>
    </main>
  </>
}
