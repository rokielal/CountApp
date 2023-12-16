import { useState } from "react"
import './counter.css'


export default function Counter () {

    const[count, setCount] = useState(0)

    function increament () {
        // alert("increased")
        setCount(count + 1)
    }

    function decreament () {
        // alert("decreased")
        setCount(count - 1)
    }

    function reset () {
        // alert("decreased")
        setCount(0)
    }



    return (
        <div className="container">
            <h1>Counter : {count}</h1>
            <button onClick={increament}>Increament</button>
            <button onClick={decreament}>Decreament</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

// export default Counter