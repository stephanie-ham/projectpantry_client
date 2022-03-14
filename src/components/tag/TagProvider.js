import React, { useState } from "react";

export const TagContext = React.createContext();

export const TagProvider = (props) => {
  const [tags, setTags] = useState([]);

  const getTags = () => {
    return fetch(`http://localhost:8000/api/tags`, {
      headers: {
        Authorization: `Token ${localStorage.getItem("pp_token")}`,
      },
    })
      .then((res) => res.json())
      .then(setTags);
  };

  const createTag = (tag) => {
    return fetch(`http://localhost:8000/api/tags`, {
      method: "POST",
      headers: {
        Authorization: `Token ${localStorage.getItem("pp_token")}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(tag)
    }).then((res) => res.json())
      .then(getTags);
  }

  const deleteTag = (tagId) => {
    return fetch(`http://localhost:8000/api/tags/${tagId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Token ${localStorage.getItem("pp_token")}`,
      },
      })
      .then(getTags);
    };
  



  return (
    <TagContext.Provider value={{ tags, getTags, createTag, deleteTag }}>
      {props.children}
    </TagContext.Provider>
  )
}