import React, { useState } from "react";

export const FoodContext = React.createContext();

export const FoodProvider = (props) => {
  const [foods, setFoods] = useState([]);

  const getFoods = () => {
    return fetch("http://localhost:8000/api/foods", {
      headers: {
        Authorization: `Token ${localStorage.getItem("pp_token")}`,
      },
    })
      .then((res) => res.json())
      .then(setFoods);
  };

  return (
    <FoodContext.Provider value={{ foods, getFoods }}>
      {props.children}
    </FoodContext.Provider>
  )  
}