import React, { useState } from "react";

export const TagContext = React.createContext();

export const TagProvider = (props) => {
  const [tags, setTags] = useState([]);

  const getTags = () => {
    return fetch("http://localhost:8000/api/tags", {
      headers: {
        Authorization: `Token ${localStorage.getItem("pp_token")}`,
      },
    })
      .then((res) => res.json())
      .then(setTags);
  };

  return (
    <TagContext.Provider value={{ tags, getTags }}>
      {props.children}
    </TagContext.Provider>
  )  
}