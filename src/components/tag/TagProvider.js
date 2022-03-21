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

  const getTagById = (tagId) => {
    return fetch(`http://localhost:8000/api/tags/${tagId}`, {
      headers: {
        Authorization: `Token ${localStorage.getItem("pp_token")}`,
      }
    })
      .then((res) => res.json())
  }

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

  const editTag = (tag) => {
    return fetch(`http://localhost:8000/api/tags/${tag.id}`, {
      method: "PUT",
      headers: {
        Authorization: `Token ${localStorage.getItem("pp_token")}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(tag)
    })
      .then((res) => {
        getTags();
        return res
      });
  }

  const addTagToFood = (foodTag) => {
    return fetch(`http://localhost:8000/api/tags/${foodTag.tag}/add_to_food`, {
      method: "POST",
      headers: {
        Authorization: `Token ${localStorage.getItem("pp_token")}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(foodTag)
    }).then((res) => res.json())
      .then(getTags);
  }

  return (
    <TagContext.Provider value={{ tags, getTags, getTagById, createTag, deleteTag, editTag, addTagToFood }}>
      {props.children}
    </TagContext.Provider>
  )
}