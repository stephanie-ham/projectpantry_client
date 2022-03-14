import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { TagContext } from "./TagProvider";
import Form from "react-bootstrap/Form";

export const TagForm = () => {
  const history = useHistory();
  const { createTag } = useContext(TagContext);

  const [currentTag, setCurrentTag] = useState({ label: "" });

  const changeTagState = (evt) => {
    const newTagState = { ...currentTag }

    newTagState[evt.target.name] = evt.target.value

    setCurrentTag(newTagState)
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const tag = {
      label: currentTag.label
    };

    createTag(tag)
      .then(() => history.push("/tags"))
      .then(setCurrentTag({ label: "" }));
  };

  return (
    <section className="form__container">
      <Form>
        <Form.Group className="tag__form" controlId="formCreateTag">
          <Form.Label
            className="form__label"
          >
            Tag Label
          </Form.Label>
          <Form.Control
            placeholder="Enter Tag Label"
            type="text"
            name="label"
            required
            value={currentTag.label}
            onChange={changeTagState}
          />
          <Form.Text className="form__text">
            Suggestions: level of effort, food category or meal type
          </Form.Text>
        </Form.Group>
        <section className="form__btn__container">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Create Tag
          </button>
        </section>
      </Form>
    </section >
  )
}