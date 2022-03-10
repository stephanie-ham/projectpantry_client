import React, { useContext, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import { FoodContext } from "./FoodProvider";
import { List, ListHeader } from "../list/list";


export const FoodList = (props) => {
  const { foods, getFoods } = useContext(FoodContext);
  
  useEffect(() => {
    getFoods();
  }, []);
  
  return (
    <>
      <h2>Food List</h2>
      <section className="food__list">
        <ListHeader />
        {foods.map(food => {
          return (
            <List
              key={`food--${food.id}`}
              list={food}
            />
          )
        })}
      </section>
    </>
  )
}