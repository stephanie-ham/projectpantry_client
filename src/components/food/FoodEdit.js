import React, { useContext, useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { FoodContext } from "./FoodProvider";
import { TagContext } from "../tag/TagProvider"
import { FoodForm } from "./Food";

export const FoodEditForm = (props) => {
  const history = useHistory();
  const { foods, getFoods, updateFood, locations, getLocations, quantities, getQuantities } = useContext(FoodContext);
  const { tags, getTags } = useContext(TagContext)
  const { foodId } = useParams();

  const findFood = (foodId) => {
    let foundFood
    foods.map(food => {
      if (food.id === parseInt(foodId)) {
        foundFood = food
      }
    })
    return foundFood
  }

  const foundFood = findFood(foodId)

  const [currentFood, setCurrentFood] = useState({
    name: foundFood.name,
    locationId: parseInt(foundFood.location.id),
    quantityId: parseInt(foundFood.quantity.id),
    tags: foundFood.tags
    // tags: foundFood.tags
  })

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
    const selectedOptions = Array.from(evt.target.options)
      .filter(option => option.selected)
      .map(option => option.value)

    newTagState.tags = selectedOptions
    setCurrentFood(newTagState)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const updatedFood = {
      id: parseInt(foodId),
      name: currentFood.name,
      locationId: parseInt(currentFood.locationId),
      quantityId: parseInt(currentFood.quantityId),
      tags: currentFood.tags
    }

    updateFood(updatedFood)
      .then(() => history.push("/foods"))
      .then(setCurrentFood({
        name: `${foundFood.name}`,
        locationId: parseInt(foundFood.location.id),
        quantityId: parseInt(foundFood.quantity.id),
        tags: foundFood.tags
      }))
  }

  return (
    <FoodForm 
      foodId={foodId}
      onChange={changeFoodState}
      handleSubmit={handleSubmit}
      namePlaceholder={foundFood.name}
      nameValue={currentFood.name}
      locations={locations}
      locationValue={currentFood.locationId}
      quantities={quantities}
      quantityValue={currentFood.quantityId}
      tags={tags}
      tagsValue={currentFood.tags}
      tagsOnChange={() => changeTagState}
    />
  )
}