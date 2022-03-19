import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Badge from 'react-bootstrap/Badge';
import EditBtn from "../../images/edit-btn.png"
import DeleteBtn from "../../images/delete-btn.png"
import "../../styles/table.css"


export const FoodTable = (props) => {

  const btns = (props) => (
    <td className="table__cell table__buttons">
      <button
        className="table__button"
      // onClick={props.onClickEdit}
      >
        <img src={EditBtn} />
      </button>
      <button
        className="table__button"
        // onClick={() => deleteFood(props)}
        onClick={() => props.handleDelete}
      >
        <img src={DeleteBtn} />
      </button>
    </td>
  )

  return (
    <Table className="food__table">
      <thead>
        <tr>
          <th className="table__cell">Safe Food</th>
          <th className="table__cell">Name</th>
          <th className="table__cell">Location</th>
          <th className="table__cell">Tags</th>
          <th className="table__cell">Quantity</th>
        </tr>
      </thead>
      <tbody>
        {props.listItems.map((item) => {
          return (
            <tr className="table__row" key={`food--${item.id}`}>
              <td className="table__cell safe-food">
                <Form>
                  <Form.Switch
                    type="switch"
                    className="pp_switch"
                    bg="override"
                  />
                </Form>
              </td>
              <td className="table__cell name">
                {item.name}
              </td>
              <td className="table__cell location">
                {item.location.title}
              </td>
              <td className="table__cell tags">
                {item.tags.map((tag) => {
                  return (
                    <div
                      className="food__tag tag"
                      key={`food-${item.id}_tag-${tag.id}`}
                    >
                      <Badge
                        pill
                        className="pp_badge"
                        bg="override">
                        {tag.label}
                      </Badge>{' '}
                    </div>

                  )
                })}
              </td>
              <td className="table__cell quantity">
                {item.quantity.title}
              </td>
              {props.renderBtns ? btns(item.id) : <></>}
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}