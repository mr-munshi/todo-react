import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {
    return (
        <div><p>404Notfound</p>
            <button>
                <Link to={'/'}>Back to Home</Link>
            </button>
        </div>
    )
}

export default Notfound