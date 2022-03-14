import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FoodContext } from "./FoodProvider";
import Form from "react-bootstrap/Form";

export const FoodForm = () => {
  const history = useHistory();
  const { createFood, getLocations, locations, getQuantities, quantities } = useContext(FoodContext);
  const [currentFood, setCurrentFood] = useState({
    name: "",
    locationId: 0,
    quantityId: 0
  });

  useEffect(() => {
    getLocations()
      .then(getQuantities());
  }, []);

  const changeFoodState = (evt) => {
    const newFoodState = { ...currentFood }
    newFoodState[evt.target.name] = evt.target.value
    setCurrentFood(newFoodState)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const food = {
      name: currentFood.name,
      locationId: parseInt(currentFood.locationId),
      quantityId: parseInt(currentFood.quantityId)
    };

    createFood(food)
      .then(() => history.push("/foods"))
      .then(setCurrentFood({
        name: "",
        locationId: 0,
        quantityId: 0
      }));
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
            placeholder="Enter food name"
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
            <option value="0">Select a location</option>
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
            <option value="0">Select a quantity</option>
            {quantities.map((q) => (
              <option value={q.id} key={q.id}>
                {q.title}
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
          Create Food
        </button>
      </section>
    </section>
  )
}