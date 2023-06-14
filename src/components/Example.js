import React from 'react'

function myElements(names) {
    return (
        names.map(name =>
            <div key={name}>{name}</div>
        )
    )
}

export default function Example(props) {
    return (
        <div className='row'>
            <div className='col'>
                <h1>{myElements(props.names)}</h1>
            </div>

        </div>
    )
}
