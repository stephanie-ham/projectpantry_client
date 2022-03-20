import React, { useContext, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { TagContext } from "./TagProvider";
import Form from "react-bootstrap/Form";

export const TagForm = (props) => {
  const history = useHistory();
  const { createTag, editTag } = useContext(TagContext);
  const { tagId } = useParams();

  const [currentTag, setCurrentTag] = useState({});

  const changeTagState = (evt) => {
    const newTagState = { ...currentTag }

    newTagState[evt.target.name] = evt.target.value

    setCurrentTag(newTagState)
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const updatedTag = {
      id: parseInt(tagId),
      label: currentTag.label
    }

    const tag = {
      label: currentTag.label
    };

    if (tagId) {
      editTag(updatedTag)
        .then(() => history.push("/tags"))
        .then(setCurrentTag({}));
    } else {
      createTag(tag)
        .then(() => history.push("/tags"))
        .then(setCurrentTag({}));
    }
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
            placeholder={tagId ? "Update Tag Label" : "Enter Tag Label"}
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
            {tagId ? "Update Tag" : "Create Tag"}
          </button>
        </section>
      </Form>
    </section >
  )
}