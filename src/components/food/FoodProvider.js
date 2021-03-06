import React, { useState } from "react";

export const FoodContext = React.createContext();

export const FoodProvider = (props) => {
  const [foods, setFoods] = useState([]);
  const [safeFoods, setSafeFoods] = useState([])
  const [locations, setLocations] = useState([]);
  const [quantities, setQuantities] = useState([]);


  const getFoods = () => {
    return fetch("http://localhost:8000/api/foods", {
      headers: {
        Authorization: `Token ${localStorage.getItem("pp_token")}`,
      },
    })
      .then((res) => res.json())
      .then(setFoods);
  };

  const getSafeFoods = () => {
    return fetch("http://localhost:8000/api/foods/filter_by_safefood", {
      headers: {
        Authorization: `Token ${localStorage.getItem("pp_token")}`,
      },
    })
      .then((res) => res.json())
      .then(setSafeFoods);
  }

  const createFood = (food) => {
    return fetch(`http://localhost:8000/api/foods`, {
      method: "POST",
      headers: {
        Authorization: `Token ${localStorage.getItem("pp_token")}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(food)
    }).then((res) => res.json())
      .then(getFoods);
  }

  const updateFood = (food) => {
    return fetch(`http://localhost:8000/api/foods/${food.id}`, {
      method: "PUT",
      headers: {
        Authorization: `Token ${localStorage.getItem("pp_token")}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(food)
    })
    .then((res) => {
      getFoods();
      return res
    });
  }

  const deleteFood = (foodId) => {
    return fetch(`http://localhost:8000/api/foods/${foodId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Token ${localStorage.getItem("pp_token")}`,
      }
    })
      .then(getFoods);
  }

  const getLocations = () => {
    return fetch(`http://localhost:8000/api/locations`, {
      headers: {
        Authorization: `Token ${localStorage.getItem("pp_token")}`,
      },
    })
      .then((res) => res.json())
      .then(setLocations);
  }

  const getQuantities = () => {
    return fetch(`http://localhost:8000/api/quantities`, {
      headers: {
        Authorization: `Token ${localStorage.getItem("pp_token")}`,
      },
    })
      .then((res) => res.json())
      .then(setQuantities);
  }

  const filterByQuantity = (quantityId) => {
    return fetch(`http://localhost:8000/api/foods?quantity_id=${quantityId}`, {
      headers: {
        Authorization: `Token ${localStorage.getItem("pp_token")}`,
      },
    })
      .then((res) => res.json())
      .then(setFoods);
  };

  const filterByTag = (tagId) => {
    return fetch(`http://localhost:8000/api/foods?tag=${tagId}`, {
      headers: {
        Authorization: `Token ${localStorage.getItem("pp_token")}`,
      },
    })
      .then((res) => res.json())
      .then(setFoods);
  };

  const addFoodToSafeList = (foodId) => {
    return fetch(`http://localhost:8000/api/foods/${foodId}/add_to_safelist`, {
      method: "POST",
      headers: {
        Authorization: `Token ${localStorage.getItem("pp_token")}`,
      },
    })
      .then((res) => res.json())
      .then(getFoods);
  }

  const removeFoodFromSafeList = (foodId) => {
    return fetch(`http://localhost:8000/api/foods/${foodId}/remove_from_safelist`, {
      method: "DELETE",
      headers: {
        Authorization: `Token ${localStorage.getItem("pp_token")}`
      }
    })
    .then(getFoods);  
  }

  const removeTagFromFood = (tag) => {
    return fetch(`http://localhost:8000/api/tags/${tag.tag}/remove_from_food`, {
      method: "DELETE",
      headers: {
        Authorization: `Token ${localStorage.getItem("pp_token")}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(tag)
    })
      .then((res) => {
        getFoods();
        return res
      });
  }

  return (
    <FoodContext.Provider value={{ foods, getFoods, safeFoods, getSafeFoods, createFood, deleteFood, locations, getLocations, quantities, getQuantities, addFoodToSafeList, removeFoodFromSafeList, filterByQuantity, filterByTag, updateFood, removeTagFromFood }}>
      {props.children}
    </FoodContext.Provider>
  )
}