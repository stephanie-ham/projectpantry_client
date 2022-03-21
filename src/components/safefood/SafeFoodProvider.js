import React, { useState } from "react";

export const SafeFoodContext = React.createContext();

export const SafeFoodProvider = (props) => {
    const [ safeFoods, setSafeFoods ] = useState([]);

    const getSafeFoods = () => {
        return fetch("http://localhost:8000/api/foods/filter_by_safefood", {
          headers: {
            Authorization: `Token ${localStorage.getItem("pp_token")}`,
          },
        })
          .then((res) => res.json())
          .then(setSafeFoods);
      }

    return(
        <SafeFoodContext.Provider value={{ getSafeFoods, safeFoods }}>
        {props.children}
      </SafeFoodContext.Provider>
    )
}