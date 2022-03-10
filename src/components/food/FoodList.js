import React, { useContext, useEffect } from "react";
import { FoodContext } from "./FoodProvider";
import { Header } from "../header/header";
import Table from "react-bootstrap/Table";

import "./food.css"


export const FoodList = (props) => {
  const { foods, getFoods } = useContext(FoodContext);

  useEffect(() => {
    getFoods();
  }, []);

  return (
    <>
      <Header 
        header={`Stocked Foods`}
      />
      <section className="body__container">
        <Table className="food__table">
          <thead>
            <tr>
              <th className="table__cell">Name</th>
              <th className="table__cell">Location</th>
              <th className="table__cell">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {foods.map((food) => {
              return (
                <tr className="table__row">
                  <td className="table__cell name">
                    {food.name}
                  </td>
                  <td className="table__cell location">
                    {food.location.title}
                  </td>
                  <td className="table__cell quantity">
                    {food.quantity.title}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </section>
    </>
  )
}