
import React, { useState } from 'react'

function CounterHook() {
    const [count, setCount] = useState(0)
    const [text, setText] = useState('this is a text ')
    const [info, setInfo] = useState({ name: "", email: '' })
    return (
        <div>
            {/* //     {count}
        //     <button onClick={() => setCount(count + 1)} className='btn btn-primary'>Click me</button>
            <h2>{text}</h2>
            <button onClick={() => setText('text is changed')} className='btn btn-primary'>Click me</button> */}
            <input className='form-control mt-5 ' value={info.name} onChange={e => setInfo({ ...info, name: e.target.value })} />
            <input className='form-control mt-5 ' value={info.email} onChange={e => setInfo({ ...info, email: e.target.value })} />

            <h2 className='mt-2'>Name : {info.name}</h2>
            <h2 className='mt-2'>Email : {info.email}</h2>

        </div >
    )
}

export default CounterHook
