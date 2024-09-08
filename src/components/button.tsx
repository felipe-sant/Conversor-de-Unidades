import css from "../styles/button.module.css"

function Button(props: { text: string, onClick: () => void }) {
    return (
        <button
            onClick={props.onClick}
            className={css.button}
        >{props.text}</button>
    )
}

export default Button

// Path: src/styles/button.module.css