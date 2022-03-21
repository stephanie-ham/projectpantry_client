import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FoodContext } from "./FoodProvider";
import { FoodForm } from "./Food";
import { TagContext } from "../tag/TagProvider"

export const FoodCreateForm = (props) => {
  const history = useHistory();
  const { createFood, getLocations, locations, getQuantities, quantities, getFoods } = useContext(FoodContext);
  const { tags, getTags } = useContext(TagContext)

  const [currentFood, setCurrentFood] = useState({
    name: "",
    locationId: 0,
    quantityId: 0,
    tags: []
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
    newTagState.tags.push(evt.target.value)
    setCurrentFood(newTagState)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const food = {
      name: currentFood.name,
      locationId: parseInt(currentFood.locationId),
      quantityId: parseInt(currentFood.quantityId),
      tags: currentFood.tags
    };

    createFood(food)
      .then(() => history.push("/foods"))
      .then(setCurrentFood({
        name: "",
        locationId: 0,
        quantityId: 0,
        tags: []
      }))
  }

  return (
    <FoodForm
      foodId={false}
      onChange={changeFoodState}
      handleSubmit={handleSubmit}
      namePlaceholder={`Enter Food Name`}
      nameValue={currentFood.name}
      locations={locations}
      locationValue={currentFood.locationId}
      quantities={quantities}
      quantityValue={currentFood.quantityId}
      tags={tags}
      tagsValue={tags[0]?.id}
      tagsOnChange={changeTagState}
    />
  )
}