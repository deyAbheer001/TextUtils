const Button = (props)=> {

    return (

        <button onClick={props.fn} type="button" className={`${props.class} my-2`}>{props.use}</button>

    )
}

export default Button;