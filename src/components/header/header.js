import "./header.css"


export const Header = (props) => {
    return (
        <section className="header__container">
            <h1>{props.header}</h1>
        </section>
    )
}