import React from 'react'
import { MyContext } from '../App'

function ComponentsB() {
    return (
        <div>
            component b
            <MyContext.Consumer>
                {
                    data => {
                        return (<h2>{data}</h2>)
                    }
                }
            </MyContext.Consumer>
        </div>
    )
}

export default ComponentsB
