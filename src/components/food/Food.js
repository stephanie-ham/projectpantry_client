import Form from "react-bootstrap/Form";

export const FoodForm = (props) => {

  return (
    <section className="form__container">
      <Form>
        <Form.Group
          className="food__form"
          controlId="formCreateFood"
        >
          <Form.Label
            className="form__label">
            Food Name
          </Form.Label>
          <Form.Control
            placeholder={props.namePlaceholder}
            type="text"
            name="name"
            required
            value={props.nameValue}
            onChange={props.onChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label
            className="form__label">
            Storage Location
          </Form.Label>
          <Form.Select
            aria-label="Default select example"
            name="locationId"
            required
            className="form__select"
            defaultValue={props.locationValue}
            onChange={props.onChange}
          >
            {props.foodId ? <></> : <option value="0">Select Storage Location</option> }
            {props.locations.map((l) => (
              <option value={l.id} key={l.id}>
                {l.title}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label
            className="form__label">
            Quantity
          </Form.Label>
          <Form.Select
            aria-label="Default select example"
            name="quantityId"
            required
            className="form__select"
            defaultValue={props.quantityValue}
            onChange={props.onChange}
          >
            {props.foodId ? <></> : <option value="0">Select Quantity</option> }
            {props.quantities.map((q) => (
              <option value={q.id} key={q.id}>
                {q.title}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label
            className="form__label">
            Tags
          </Form.Label>
          <Form.Select
            aria-label="Default select example"
            name="tagId"
            required
            className="form__select"
            defaultValue={props.tagsValue}
            onChange={props.tagsOnChange}
          >
            <option value="0">Select a Tag</option>
            {props.tags.map((t) => (
              <option value={t.id} key={t.id}>
                {t.label}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      </Form>
      <section className="form__btn__container">
        <button
          type="submit"
          className="btn btn-primary"
          onClick={props.handleSubmit}
        >
          {props.foodId ? "Update Food" : "Add Food"}
        </button>
      </section>
    </section>
  )
}