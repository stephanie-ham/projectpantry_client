import "./header.css"


export const Header = (props) => {

  const createButton = () => {
    return (
      <section className="header__btn__container">
        <button
          type="submit"
          className="btn btn-primary"
          onClick={props.path}>
          {props.button}</button>
      </section>
    )
  }

  return (
    <section className="header__container">
      <h2 className="header__text">{props.header}</h2>
      {props.param ? props.form : createButton()}
    </section>
  )
}