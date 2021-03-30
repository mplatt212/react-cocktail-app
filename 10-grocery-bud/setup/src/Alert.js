import React, {useEffect} from 'react'

function Alert({alert, list,removeAlert}) {
    const {msg,type} = alert;

    useEffect(() => {
        const timeout = setInterval(() => {
            removeAlert();
        },3000)
        return () => clearInterval(timeout)
    },[list])

    return <>
        <p className={`alert alert-${type}`}>{msg}</p>
    </>
}

export default Alert