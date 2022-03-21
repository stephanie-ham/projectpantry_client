import Form from "react-bootstrap/Form";
import Multiselect from 'multiselect-react-dropdown';

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
            {props.foodId ? <></> : <option value="0">Select Storage Location</option>}
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
            {props.foodId ? <></> : <option value="0">Select Quantity</option>}
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
          {/* <Multiselect
            name="tagId"
            className="form__select"
            displayValue="label"
            value={props.tagValue}
            onChange={props.tagsOnChange}
            options={props.tags}
            // ref={props.ref}
          /> */}

           <select 
            multiple={true}
            name="tagId"
            className="form__select form-padding"
            value={props.tagValue}
            onChange={props.tagsOnChange}
            options={props.tags}
            selected={props.selectedValues}
          >
            {props.tags.map((t) => (
              <option value={t.id} key={t.id}>
                {t.label}
              </option>
            ))}
          </select>

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