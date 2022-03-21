import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom"
import { FoodContext } from "./FoodProvider";
import { FoodCreateForm } from "./FoodCreate";
import { FoodEditForm } from "./FoodEdit";
import { FoodFilter } from "./FoodFilter";
import { FoodTag } from "./FoodTag"
import { Header } from "../header/header";

import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

import EditBtn from "../../images/edit-btn.png"
import DeleteBtn from "../../images/delete-btn.png"
import "../../styles/table.css"


export const FoodList = (props) => {
  const history = useHistory();
  const { foods, getFoods, deleteFood, getSafeFoods,  addFoodToSafeList, removeFoodFromSafeList } = useContext(FoodContext);
  const { foodId } = useParams();

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
        form={foodId ? <FoodEditForm /> : <FoodCreateForm />}
        param={props.form}
      />

      <section className="body__container">
        <div className="filter__container">
          <FoodFilter />
        </div>
        <div className="table__container">
          <Table className="food__table" borderless
          >
            <thead className="table__header">
              <tr>
                <th width="100" className="table__cell">Safe Food</th>
                <th width="230" className="table__cell">Name</th>
                <th width="130" className="table__cell">Location</th>
                <th width="230" className="table__cell">Tags</th>
                <th width="120" className="table__cell">Quantity</th>
                <th width="150" className="table__cell"></th>
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
                          bg="secondary"
                          className="pp_switch"
                          id="custom-switch"
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
                    <td className="table__cell food-tags">
                      {food.tags.map((tag) => {
                        return (
                          <FoodTag
                            tag={tag}
                            food={food}
                          />
                        )
                      })}
                    </td>
                    <td className="table__cell quantity">
                      {food.quantity.title}

                      {/* high low out add_SL */}
                    </td>
                    <td className="table__buttons right__align">
                      <button
                        className="table__button edit"
                        foodId={food.id}
                        onClick={() => history.push(`/foods/${food.id}/edit`)}>
                        <img src={EditBtn} /> Edit
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
        </div>
      </section>
    </>
  )
}