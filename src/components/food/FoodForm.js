import React, { useContext, useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { FoodContext } from "./FoodProvider";
import { TagContext } from "../tag/TagProvider"
import Form from "react-bootstrap/Form";

export const FoodForm = (props) => {
  const history = useHistory();
  const { createFood, getLocations, locations, getQuantities, quantities, getFoods, foods, updateFood } = useContext(FoodContext);
  const { tags, getTags } = useContext(TagContext)
  const { foodId } = useParams();

  const [currentFood, setCurrentFood] = useState({
    name: "",
    locationId: 0,
    quantityId: 0,
    tags: []
  });

  useEffect(() => {
    getFoods()
      .then(getLocations())
      .then(getQuantities())
      .then(getTags());
  }, []);

  const changeFoodState = (evt) => {
    const newFoodState = { ...currentFood }
    newFoodState[evt.target.name] = evt.target.value
    setCurrentFood(newFoodState)
  }

  const changeTagState = (evt) => {
    const newTagState = { ...currentFood }
    newTagState.tags.push(evt.target.value)
    setCurrentFood(newTagState)
  }

  const findFood = (foodId) => {
    let foodName 
    foods.map(food => {
      if (food.id === parseInt(foodId)) {
        foodName = food.name
      }
    })
    return foodName
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const updatedFood = {
      id: parseInt(foodId),
      name: currentFood.name,
      locationId: parseInt(currentFood.locationId),
      quantityId: parseInt(currentFood.quantityId)
    }

    const food = {
      name: currentFood.name,
      locationId: parseInt(currentFood.locationId),
      quantityId: parseInt(currentFood.quantityId),
      tags: currentFood.tags
    };

    if (foodId) {
      updateFood(updatedFood)
        .then(() => history.push("/foods"))
        .then(setCurrentFood({
          name: "",
          locationId: 0,
          quantityId: 0,
          tags: []
        }))

    } else {
      createFood(food)
        .then(() => history.push("/foods"))
        .then(setCurrentFood({
          name: "",
          locationId: 0,
          quantityId: 0,
          tags: []
        }))
    }
  }

  return (
    <section className="form__container">
      <Form>
        <Form.Group
          className="food__form"
          controlId="formCreateFood"
        >
          <Form.Label
            className="form__label">
            Food Name
          </Form.Label>
          <Form.Control
            placeholder={foodId ? `Update ${findFood(foodId) }` : "Enter Food Name"}
            type="text"
            name="name"
            required
            value={currentFood.name}
            onChange={changeFoodState}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label
            className="form__label">
            Storage Location
          </Form.Label>
          <Form.Select
            aria-label="Default select example"
            name="locationId"
            required
            className="form__select"
            defaultValue={currentFood.locationId}
            onChange={changeFoodState}
          >
            <option value="0">{foodId ? "Update Storage Location" : "Select Storage Location"}</option>
            {locations.map((l) => (
              <option value={l.id} key={l.id}>
                {l.title}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label
            className="form__label">
            Quantity
          </Form.Label>
          <Form.Select
            aria-label="Default select example"
            name="quantityId"
            required
            className="form__select"
            defaultValue={currentFood.quantityId}
            onChange={changeFoodState}
          >
            <option value="0">{foodId ? "Update Quantity" : "Select Quantity"}</option>
            {quantities.map((q) => (
              <option value={q.id} key={q.id}>
                {q.title}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label
            className="form__label">
            Tags
          </Form.Label>
          <Form.Select
            aria-label="Default select example"
            name="tagId"
            required
            className="form__select"
            defaultValue={tags[0]?.id}
            onChange={changeTagState}
          >
            <option value="0">Select a Tag</option>
            {tags.map((t) => (
              <option value={t.id} key={t.id}>
                {t.label}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      </Form>
      <section className="form__btn__container">
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          {foodId ? "Update Food" : "Add Food"}
        </button>
      </section>
    </section>
  )
}