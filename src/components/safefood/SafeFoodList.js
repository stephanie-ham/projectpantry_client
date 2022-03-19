import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom"
import { FoodContext } from "../food/FoodProvider";
import { SafeFoodContext } from "./SafeFoodProvider";
// import { FoodForm } from "./FoodForm";
import { Header } from "../header/header";
import { FoodTable } from "../table/FoodTable";



export const SafeFoodList = (props) => {
  const history = useHistory();
  const { safeFoods, getSafeFoods } = useContext(SafeFoodContext);
  const { foods, getFoods, deleteFood } = useContext(FoodContext);

  useEffect(() => {
    getSafeFoods()
      .then(getFoods());
  }, []);

  return (
    <>
      <Header
        header={'Safe Foods'}
      // path={() => history.push(`/foods/new`)}
      // button={'Add Food'}
      // form={<FoodForm />}
      // param={props.form}
      />
      <section className="body__container center">
        <FoodTable
          listItems={foods}
          renderBtns={true}
          handleDelete={deleteFood(props)}
        />
      </section>
    </>
  )
}