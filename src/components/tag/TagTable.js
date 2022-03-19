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
      <section className="body__container taglist__container">
        <Table className="tag__table">
          <thead>
            <tr>
              <th className="table__cell">Label</th>
              <th className="table__cell">Count</th>
              <th className="table__cell">Edit</th>
            </tr>
          </thead>
          <tbody>
            {tags.map((tag) => {
              return (
                <tr className="table__row" key={`tag--${tag.id}`}>
                  <td className="table__cell tag">
                    <Badge
                      pill
                      className="pp_badge"
                      bg="override">
                      {tag.label}
                    </Badge>{' '}
                  </td>
                  <td className="table__cell counter">XX</td>
                  <td className="table__cell table__buttons">

                    <div ref={ref}>
                      <button
                        className="table__button"
                        tagId={tag.id}
                        onClick={e => history.push(`/tags/${tag.id}/edit`)}>
                        <img src={EditBtn} />
                      </button>
                      <section className="form__btn__container">
                      </section>
                    </div>
                    <button
                      className="table__button"
                      onClick={() => deleteTag(tag.id)}
                    >
                      <img src={DeleteBtn} />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </section>
    </>
  )
}