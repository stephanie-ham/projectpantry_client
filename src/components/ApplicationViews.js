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
          <Route exact path="/foods/new">
            <FoodList form={true} />
          </Route>
          <Route exact path="/tags">
            <TagList />
          </Route>
          <Route exact path="/tags/new">
            <TagList form={true} />
          </Route>
          <Route exact path="/tags/:tagId(\d+)/edit">
            <TagList form={true} />
          </Route>
        </FoodProvider>
      </TagProvider>
    </main>
  </>
}
