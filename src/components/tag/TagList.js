import React, { useContext, useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom"
import { TagContext } from "./TagProvider";
import { TagForm } from "./TagForm";
import { Header } from "../header/header";
import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";
import Popover from 'react-bootstrap/Popover';
import Overlay from 'react-bootstrap/Overlay';
import "../../styles/table.css"
import "./tag.css"
import EditBtn from "../../images/edit-btn.png"
import DeleteBtn from "../../images/delete-btn.png"


export const TagList = (props) => {
  const history = useHistory();
  const { tags, getTags, deleteTag } = useContext(TagContext);
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    getTags();
  }, []);


  const handlePopover = (evt) => {
    setShow(!show);
    setTarget(evt.target)
  };

  return (
    <>
      <Header
        header={'Tags'}
        path={() => history.push(`/tags/new`)}
        button={'Create Tag'}
        form={<TagForm />}
        param={props.form}
      />
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
                        onClick={handlePopover}>
                        <img src={EditBtn} />
                      </button>
                      <Overlay
                        show={show}
                        target={target}
                        placement="bottom"
                        container={ref}
                        containerPadding={10}
                        rootClose={true}
                      >
                        <Popover id="popover-contained">
                          <Popover.Body>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishin</p>
                          </Popover.Body>
                        </Popover>
                      </Overlay>
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