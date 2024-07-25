import React from 'react'

function Greating(props: any) {

    if (props.isLogin) {
        return <h2>welcome {props.name}</h2>
    } else {
        return "not login"
    }


}

export default Greating