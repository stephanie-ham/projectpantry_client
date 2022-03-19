import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom"
import { FoodContext } from "./FoodProvider";
import { FoodForm } from "./FoodForm";
import { Header } from "../header/header";
// import { FoodTable } from "../table/FoodTable";

import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Badge from 'react-bootstrap/Badge';
import EditBtn from "../../images/edit-btn.png"
import DeleteBtn from "../../images/delete-btn.png"
import "../../styles/table.css"

export const FoodList = (props) => {
  const history = useHistory();
  const { foods, getFoods, getSafeFoods, safeFoods, deleteFood, addFoodToSafeList, removeFoodFromSafeList } = useContext(FoodContext);
  // const [isSafe, setSafe] = useState(false);

  const handleSafeFoodSwitch = (food) => {
    if (!food.is_safe) {
      addFoodToSafeList(food.id);
    } else {
      removeFoodFromSafeList(food.id);
    }
  }

  useEffect(() => {
    getFoods()
      .then(getSafeFoods())
  }, []);

  return (
    <>
      <Header
        header={'Stocked Foods'}
        path={() => history.push(`/foods/new`)}
        button={'Add Food'}
        form={<FoodForm />}
        param={props.form}
      />
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
                        bg="override"
                        className="pp_switch"
                        id={`food--${food.id}`}
                        key={`food--${food.id}`}
                        checked={food.is_safe}
                        onChange={() => handleSafeFoodSwitch(food)}
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
                          <Badge
                            pill
                            className="pp_badge"
                            bg="override">
                            {tag.label}
                          </Badge>{' '}
                        </div>

                      )
                    })}
                  </td>
                  <td className="table__cell quantity">
                    {food.quantity.title}

                    {/* high low out add_SL */}
                  </td>
                  <td className="table__cell table__buttons">
                    <button
                      className="table__button" >
                      <img src={EditBtn} />
                    </button>
                    <button
                      className="table__button"
                      onClick={() => deleteFood(food.id)}
                    >
                      <img src={DeleteBtn} />
                    </button>
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