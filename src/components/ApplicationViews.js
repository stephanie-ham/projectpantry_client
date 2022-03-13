import React from "react"
import { Route } from "react-router-dom"

import { FoodProvider } from "./food/FoodProvider.js"
import { FoodList } from "./food/FoodList.js"
import { TagProvider } from "./tag/TagProvider.js"
import { TagList } from "./tag/TagList.js"

export const ApplicationViews = () => {
  return <>
    <main id="bootstrap-overrides">
      <TagProvider>
      <FoodProvider>
        <Route exact path="/foods">
          <FoodList />
        </Route>
        <Route exact path="/tags">
          <TagList />
        </Route>
      </FoodProvider>
      </TagProvider>
    </main>
  </>
}
