import React, { useContext, useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom"
import { TagContext } from "./TagProvider";
import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";

import "./tag.css"
import EditBtn from "../../images/edit-btn.png"
import DeleteBtn from "../../images/delete-btn.png"


export const TagTable = (props) => {
  const history = useHistory();
  const { tags, getTags, editTag, deleteTag } = useContext(TagContext);
  const [currentTag, setCurrentTag] = useState([]);
  const ref = useRef(null);


  useEffect(() => {
    getTags()
  }, []);

  return (
    <>
      <section className="body__container__tag taglist__container">
      <div className="table__container tag__table">
        <Table className="food__table">
          <thead className="table__header">
            <tr>
              <th className="table__cell">Label</th>
              {/* <th className="table__cell">Count</th> */}
            </tr>
          </thead>
          <tbody>
            {tags.map((tag) => {
              return (
                <tr className="table__row" key={`tag--${tag.id}`}>
                  <td className="table__cell tag">
                    <Badge
                      pill
                      className=" tag_badge"
                      bg="override">
                      {tag.label}
                    </Badge>{' '}
                  </td>
                  {/* <td className="table__cell counter">XX</td> */}
                  <div className="table__buttons right__align">
                    <button
                      className="table__button edit" 
                      tagId={tag.id}
                      onClick={() => history.push(`/tags/${tag.id}/edit`)}
                      >
                      <img src={EditBtn} /> Edit
                    </button>
                    <button
                      className="table__button"
                      onClick={() => deleteTag(tag.id)}
                    >
                      <img src={DeleteBtn} />
                    </button>
                  </div>
                </tr>
              )
            })}
          </tbody>
        </Table>
        </div>
      </section>
    </>
  )
}