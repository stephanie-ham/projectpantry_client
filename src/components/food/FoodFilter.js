import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom"
import { FoodContext } from "./FoodProvider";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownItem from "react-bootstrap/DropdownItem"

import "../../styles/table.css"
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import { TagContext } from "../tag/TagProvider";

export const FoodFilter = (props) => {
  const history = useHistory();
  const { getFoods, getQuantities, quantities, filterByQuantity, filterByTag } = useContext(FoodContext);
  const {getTags, tags} = useContext(TagContext)
  const [filter, setFilter] = useState(true)

  useEffect(() => {
    getFoods()
      .then(getQuantities())
      .then(getTags())
  }, []);

  // const changeFilterState = (evt) => {
  //   const newFilterState = { ...filter }

  //   newFilterState[evt.target.name] = evt.target.value

  //   setFilter(newFilterState)
  // };


  const handleQuantityFilter = (id) => {
    filterByQuantity(id)
  }

  const handleTagFilter = (id) => {
    filterByTag(id)
  }

  return (
    <>
      <section className="filter__container">
        <DropdownButton as={ButtonGroup} title="Filter by Quantity" className="btn-filter" id="bg-nested-dropdown">
          <Dropdown.Item 
            eventKey="1" 
            onClick={() => setFilter(false)}
            
            >
              Remove Filter
            </Dropdown.Item>
            {quantities.map(q => (
              <Dropdown.Item 
                eventKey={q.id}
                onClick={() => handleQuantityFilter(q.id)}
              >
                {q.title}
              </Dropdown.Item>
            ))}

        </DropdownButton>
        <DropdownButton as={ButtonGroup} title="Filter by Tag" id="bg-nested-dropdown">
          <Dropdown.Item 
            eventKey="1" 
            onClick={() => setFilter(false)}
            
            >
              Remove Filter
            </Dropdown.Item>
            {tags.map(t => (
              <Dropdown.Item 
                eventKey={t.id}
                onClick={() => handleTagFilter(t.id)}
              >
                {t.label}
              </Dropdown.Item>
            ))}

        </DropdownButton>
      </section>
    </>
  )
}