import React, { useContext, useEffect } from "react";
import { FoodContext } from "./FoodProvider";
import { FoodForm } from "./FoodForm";
import { Header } from "../header/header";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import "./food.css"
import "../../styles/table.css"


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
      <FoodForm />
      <section className="body__container center">
        <Table className="food__table">
          <thead>
            <tr>
              <th className="table__cell">Safe Food</th>
              <th className="table__cell">Name</th>
              <th className="table__cell">Location</th>
              <th className="table__cell">Tags</th>
              <th className="table__cell">Quantity</th>
              <th className="table__cell">Buttons</th>
            </tr>
          </thead>
          <tbody>
            {foods.map((food) => {
              return (
                <tr className="table__row" key={`food--${food.id}`}>
                  <td className="table__cell safe-food">
                    <Form>
                      <Form.Switch
                        type="switch"
                        id="custom-switch"
                      />
                    </Form>
                  </td>
                  <td className="table__cell name">
                    {food.name}
                  </td>
                  <td className="table__cell location">
                    {food.location.title}
                  </td>
                  <td className="table__cell tags">
                    {food.tags.map((tag) => {
                      return (
                        <div
                          className="food__tag tag"
                          key={`food-${food.id}_tag-${tag.id}`}
                        >
                          {tag.label}
                        </div>
                      )
                    })}
                  </td>
                  <td className="table__cell quantity">
                    {food.quantity.title}
                    
                    {/* high low out add_SL */}
                  </td>
                  <td className="table__cell food-buttons">
                    edit del
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