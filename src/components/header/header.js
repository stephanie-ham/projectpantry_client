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
      <h1 className="header__text">{props.header}</h1>
      {props.param ? props.form : createButton()}
    </section>
  )
}