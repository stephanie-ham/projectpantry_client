import React, { useContext, useEffect } from "react";
import "./list.css"


export const ListHeader = (props) => {
  return (
    <>
      <table className="list__table">
        <tr className="list__row">
          {/* <div className="safe__food">{props.list.safe__food}</div> */}
          <th className="list__cell name">Name</th>
          <th className="list__cell location">Location</th>
          {/* <div className="tags">{props.list.tags.label}</div> */}
          <th className="list__cell quantity">Quantity</th>
          {/* <div className="buttons">{props.list.buttons}</div> */}
        </tr>
      </table>
    </>
  )
}

export const List = (props) => {
  return (
    <>
      <table className="list__table">
        <tr className="list__row">
          {/* <div className="safe__food">{props.list.safe__food}</div> */}
          <td className="list__cell name">{props.list.name}</td>
          <td className="list__cell location">{props.list.location.title}</td>
          {/* <div className="tags">{props.list.tags.label}</div> */}
          <td className="list__cell quantity">{props.list.quantity.title}</td>
          {/* <div className="buttons">{props.list.buttons}</div> */}
        </tr>
      </table>
    </>
  )
}
