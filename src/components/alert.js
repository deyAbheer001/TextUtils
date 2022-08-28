import React from 'react'

const Alert  = (props)=>{

    function casing(str) {

        const newstr = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()

        return newstr;
    }

    return (

        props.alert && <div className={`alert alert-${props.alert.status} alert-dismissible fade show`} role="alert">
            <strong>{casing(props.alert.status)}</strong> | {props.alert.msg}.
        </div>
    )
}

export default Alert;